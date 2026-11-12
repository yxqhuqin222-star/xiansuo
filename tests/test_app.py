import tempfile
import json
import threading
import urllib.request
import urllib.error
from http.server import ThreadingHTTPServer
from unittest.mock import patch
from io import BytesIO
from openpyxl import load_workbook
import unittest
from contextlib import closing
from decimal import Decimal
from pathlib import Path
from data_layer import connect, replace_source
from test_data_layer import book, J, L
from app import Handler, dashboard, export_workbook

class MappingFixtureTest(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        mapping = Path(directory.name) / 'mapping.xlsx'
        mapping.write_bytes(book(['批次', '批次类型'], []))
        patcher = patch('app.BATCH_TYPES_FILE', mapping)
        patcher.start()
        self.addCleanup(patcher.stop)


class RefreshTests(MappingFixtureTest):
    def test_refresh_reads_both_files_and_rejects_invalid_without_changes(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            paths = {'经营': root / '经营.xlsx', '线索': root / '线索.xlsx'}
            row = ['2026-01-01', '小学', '秋1', '1', 'a', 2, 20, 3, 5, 8]
            paths['经营'].write_bytes(book(J + ['额外', '额外'], [row + ['x', 'y']]))
            paths['线索'].write_bytes(book(L, [['20260101', '小学', '秋1', '1', 'a', 1, 5]]))
            with patch('app.DB', root / 'test.sqlite3'), patch('app.SOURCE_FILES', paths):
                server = ThreadingHTTPServer(('127.0.0.1', 0), Handler)
                thread = threading.Thread(target=server.serve_forever, daemon=True); thread.start()
                url = f'http://127.0.0.1:{server.server_port}'
                def refresh():
                    request = urllib.request.Request(url + '/api/refresh', data=b'', headers={'Content-Type':'application/json'})
                    try:
                        with urllib.request.urlopen(request) as response:
                            return response.status, json.load(response)
                    except urllib.error.HTTPError as response:
                        with response: return response.code, json.load(response)
                def summary():
                    with urllib.request.urlopen(url + '/api/dashboard') as response:
                        return json.load(response)['summary']
                try:
                    self.assertEqual(refresh(), (200, {'counts': {'经营': 1, '线索': 1}}))
                    self.assertEqual(summary()['例子数量'], 2)
                    row[5] = 7
                    paths['经营'].write_bytes(book(J, [row]))
                    paths['线索'].write_bytes(book(L[:-1], [['20260101', '小学', '秋1', '1', 'a', 1]]))
                    status, result = refresh()
                    self.assertEqual(status, 400)
                    self.assertIn('线索.xlsx', result['error'])
                    self.assertIn('AI接通数', result['error'])
                    self.assertEqual(summary()['例子数量'], 2)
                    paths['线索'].write_bytes(book(L, [['20260101', '小学', '秋1', '1', 'a', 1, 5]]))
                    self.assertEqual(refresh()[0], 200)
                    self.assertEqual(summary()['例子数量'], 7)
                    paths['线索'].unlink()
                    status, result = refresh()
                    self.assertEqual(status, 400)
                    self.assertIn('线索.xlsx', result['error'])
                    self.assertEqual(summary()['例子数量'], 7)
                finally:
                    server.shutdown(); server.server_close(); thread.join()

class DashboardTests(MappingFixtureTest):
    def test_department_scope_default_order_and_export(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            departments = ['自拼', '高中', '初中', '小学', '其他', None]
            rows = [['2026-01-02', dept, '秋1', '1', str(i), 1, 2, 3, 5, 8] for i, dept in enumerate(departments)]
            rows += [['2026-01-01', '小学', '秋1', '1', 'older', 1, 2, 3, 5, 8]]
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, rows), 'test.xlsx')
            result = dashboard({}, path)
            self.assertEqual(result['options']['学部'], ['小学', '初中', '高中', '自拼'])
            self.assertEqual(result['summary']['例子数量'], 5)
            self.assertEqual([(r['日期'], r['学部']) for r in result['rows']],
                [('2026-01-02', d) for d in ['小学', '初中', '高中', '自拼']] + [('2026-01-01', '小学')])
            self.assertEqual(dashboard({'学部':['其他']}, path)['total'], 0)
            sheet = load_workbook(BytesIO(export_workbook({'column':['日期','学部']}, path))).active
            self.assertEqual(list(sheet.values)[1:], [(r['日期'], r['学部']) for r in result['rows']])
            ordered = dashboard({'sort':['学部'], 'direction':['asc']}, path)['rows']
            self.assertEqual([r['学部'] for r in ordered], ['小学', '小学', '初中', '高中', '自拼'])

    def test_batch_type_filter_group_export_and_live_mapping(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory); path = root / 'test.sqlite3'; mapping = root / 'mapping.xlsx'
            mapping.write_bytes(book(['批次', '批次类型'], [['a', '甲类']]))
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [
                    ['2026-01-01', '小学', '秋1', '1', 'a', 2, 20, 3, 5, 8],
                    ['2026-01-01', '小学', '秋1', '1', 'b', 3, 30, 3, 5, 8],
                    ['2026-01-01', '小学', '秋1', '1', None, 4, 40, 3, 5, 8],
                ]), 'test.xlsx')
            with patch('app.BATCH_TYPES_FILE', mapping):
                result = dashboard({'批次类型':['其他']}, path)
                self.assertEqual(result['summary']['例子数量'], 7)
                self.assertEqual(result['options']['批次类型'], ['其他', '甲类'])
                grouped = dashboard({'aggregate':['1'], 'dimension':['批次类型']}, path)
                self.assertEqual({r['批次类型']: r['经营例子量'] for r in grouped['rows']}, {'甲类':2, '其他':7})
                sheet = load_workbook(BytesIO(export_workbook({'aggregate':['1'], 'dimension':['批次类型'], 'column':['批次类型','经营例子量']}, path))).active
                self.assertEqual({row[0]:row[1] for row in list(sheet.values)[1:]}, {'甲类':2, '其他':7})
                mapping.write_bytes(book(['批次', '批次类型'], [['a', '乙类'], ['b', '乙类']]))
                self.assertEqual(dashboard({'批次类型':['乙类']}, path)['summary']['例子数量'], 5)
                mapping.write_bytes(book(['批次', '批次类型'], [['a', '甲类'], ['a', '乙类']]))
                with self.assertRaisesRegex(ValueError, '多个类型'): dashboard({}, path)

    def test_filters_summary_pagination_and_read_only(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [['2026-01-01', '小学', '秋1', '1', 'a', 2, 20, 3, 5, 8], ['2026-01-02', '初中', '秋2', '2', 'b', 3, 30, 3, 5, 8]]), 'test.xlsx')
                replace_source(db, '线索', book(L, [['20260101', '小学', '秋1', '1', 'a', 1, 5]]), 'test.xlsx')
            result = dashboard({'学部': ['小学']}, path)
            self.assertEqual(result['total'], 1)
            self.assertEqual(result['summary']['例子数量'], 2)
            self.assertEqual(result['summary']['接通转化率'], Decimal('0.2'))
            self.assertEqual(result['rows'][0]['状态'], '已匹配')
            self.assertEqual(dashboard({'page': ['2']}, path)['rows'], [])
            with self.assertRaises(ValueError): dashboard({'start': ['2026-02-01'], 'end': ['2026-01-01']}, path)
            self.assertFalse(dashboard({}, Path(directory) / 'missing.sqlite3')['sources'])

    def test_multiselect_and_export_all_filtered_rows_and_columns(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            rows = [['2026-01-01', '小学' if i % 2 else '初中', '秋1', '1',
                     '=formula' if i == 0 else str(i), i, 20, 3, 5, 8] for i in range(60)]
            rows.append(['2026-01-01', '高中', '秋2', '2', 'outside', 9, 20, 3, 5, 8])
            with closing(connect(path)) as db:
                source = load_workbook(BytesIO(book(J, rows)))
                source.active['E2'].data_type = 's'
                content = BytesIO(); source.save(content)
                replace_source(db, '经营', content.getvalue(), 'test.xlsx')
            params = {'学部': ['小学', '初中'], '流量期次': ['秋1'],
                      'sort': ['经营例子量'], 'direction': ['desc'],
                      'column': ['学部', '线索批次', '经营例子量', '北A']}
            result = dashboard(params, path)
            self.assertEqual(result['total'], 60)
            self.assertEqual(len(result['rows']), 50)
            sheet = load_workbook(BytesIO(export_workbook(params, path)), data_only=False).active
            self.assertEqual(sheet.max_row, 61)
            self.assertEqual([c.value for c in sheet[1]], ['学部', '线索批次', '例子量', '北A'])
            self.assertEqual(sheet['C2'].value, 59)
            self.assertEqual(sheet['C61'].value, 0)
            self.assertEqual(sheet['B61'].value, '=formula')
            self.assertEqual(sheet['B61'].data_type, 's')
            self.assertEqual(sheet['D2'].number_format, '0.0')
            self.assertIsNone(load_workbook(BytesIO(export_workbook({'学部':['不存在']}, path))).active['A2'].value)
            with self.assertRaises(ValueError): export_workbook({'column':['未知']}, path)
            with self.assertRaises(ValueError): export_workbook({'column':['日期','日期']}, path)

    def test_export_metric_display_formats_preserve_values(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [['2026-01-01', '小学', '秋1', '1', 'a', 2, 21, 3.4, 5, 8]]), 'test.xlsx')
                replace_source(db, '线索', book(L, [['20260101', '小学', '秋1', '1', 'a', 1, 2000]]), 'test.xlsx')
            columns = ['接通转化率', '有课例产', '单例子结算成本', '北A']
            sheet = load_workbook(BytesIO(export_workbook({'column': columns}, path))).active
            self.assertEqual([c.number_format for c in sheet[2]], ['0.00%', '0', '0', '0.0'])
            self.assertEqual([c.value for c in sheet[2]], [0.0005, 10.5, 3.4, 0.8])
            self.assertEqual(dashboard({}, path)['rows'][0]['接通转化率'], Decimal('0.0005'))

    def test_aggregation_uses_selected_dimensions_and_recomputes_metrics(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [
                    ['2026-01-01', '初中', '秋14期', '1', 'a', 2, 20, 3, 5, 8],
                    ['2026-01-02', '初中', '秋14期', '2', 'b', 8, 120, 5, 10, 16],
                    ['2026-01-03', '初中', '秋14期', '2', 'c', 5, 50, 4, 10, 10],
                    ['2026-01-03', '小学', '秋14期', '2', 'd', 1, 10, 3, 5, 8],
                ]), 'test.xlsx')
                replace_source(db, '线索', book(L, [
                    ['20260101', '初中', '秋14期', '1', 'a', 1, 10],
                    ['20260102', '初中', '秋14期', '2', 'b', 4, 40],
                ]), 'test.xlsx')
            p = {'aggregate':['1'], 'dimension':['学部','流量期次'], '学部':['初中']}
            result = dashboard(p, path)
            self.assertEqual(result['total'], 1)
            row = result['rows'][0]
            self.assertEqual((row['学部'], row['流量期次']), ('初中', '秋14期'))
            self.assertEqual(row['经营例子量'], 15)
            self.assertEqual(row['接通转化率'], Decimal('0.1'))
            self.assertEqual(row['有课例产'], Decimal(190)/15)
            self.assertEqual(row['单例子结算成本'], Decimal(66)/15)
            self.assertEqual(row['北A'], Decimal(34)/140)
            self.assertEqual(row['经营例子量'], result['summary']['经营例子量'])
            by_batch = dashboard({**p, 'dimension':['学部','流量期次','线索批次']}, path)
            self.assertEqual(by_batch['total'], 3)
            by_status = dashboard({**p, 'dimension':['学部','状态']}, path)
            self.assertEqual({r['状态'] for r in by_status['rows']}, {'已匹配','线索表未找到'})
            total = dashboard({'aggregate':['1'], '学部':['初中']}, path)
            self.assertEqual(total['total'], 1)
            self.assertEqual(total['rows'][0]['经营例子量'], 15)
            self.assertEqual(dashboard({'aggregate':['1'], '学部':['不存在']}, path)['total'], 0)
            sheet = load_workbook(BytesIO(export_workbook({**p,'column':['学部','流量期次','经营例子量','接通转化率']}, path))).active
            self.assertEqual(sheet.max_row, 2)
            self.assertEqual([c.value for c in sheet[2]], ['初中','秋14期',15,0.1])
            with self.assertRaises(ValueError): dashboard({'aggregate':['1'],'dimension':['不存在']},path)

    def test_trends_use_all_filtered_rows_and_recompute_per_day_and_type(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory); path = root / 'test.sqlite3'; mapping = root / 'mapping.xlsx'
            mapping.write_bytes(book(['批次', '批次类型'], [['a', 'LV1'], ['b', 'LV1'], ['c', 'LV2']]))
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [
                    ['2026-10-28', '高中', '秋12', '33', 'a', 3, 0, 100, 203, 54],
                    ['2026-10-28', '高中', '秋12', '33', 'b', 8, 9000, 125, 212, 9393],
                    ['2026-10-28', '小学', '秋12', '33', 'c', 1, 30, 50, 20, 10],
                    [None, '高中', '秋12', '33', 'a', 1, 10, 10, 10, 10],
                ]), 'profit.xlsx')
                replace_source(db, '线索', book(L, [
                    ['20261028', '高中', '秋12', '33', 'a', 4, 1602],
                    ['20261028', '高中', '秋12', '33', 'b', 9, 1843],
                ]), 'leads.xlsx')
            with patch('app.BATCH_TYPES_FILE', mapping):
                params = {'学部':['高中'], 'aggregate':['1'], 'dimension':['线索批次'], 'page':['2']}
                result = dashboard(params, path)
                self.assertEqual(result['rows'], [])
                self.assertEqual(len(result['trends']), 1)
                point = result['trends'][0]
                self.assertEqual((point['日期'], point['批次类型']), ('2026-10-28', 'LV1'))
                self.assertEqual(point['接通转化率'], Decimal(13)/3445)
                self.assertEqual(point['单例子结算成本'], Decimal(1300)/11)
                other = dashboard({'批次类型':['LV2']}, path)['trends'][0]
                self.assertIsNone(other['接通转化率'])
                self.assertEqual(other['单例子结算成本'], 50)
                self.assertEqual(dashboard({'学部':['不存在']}, path)['trends'], [])

    def test_aggregation_does_not_fake_matches_or_hide_missing_inputs(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, [
                    ['2026-01-01', '小学', '秋1', None, 'a', 2, 20, 3, 5, 8],
                    ['2026-01-02', '小学', '秋1', '1', 'b', 3, None, 5, 5, 8],
                ]), 'test.xlsx')
                replace_source(db, '线索', book(L, [
                    ['20260101', '小学', '秋1', None, 'a', 1, 10],
                ]), 'test.xlsx')
            result = dashboard({'aggregate':['1'], 'dimension':['学部','状态']}, path)
            self.assertEqual({r['状态'] for r in result['rows']}, {'经营：键缺失','线索：键缺失','线索表未找到'})
            grouped = dashboard({'aggregate':['1'], 'dimension':['学部']}, path)['rows'][0]
            self.assertEqual(grouped['经营例子量'], 5)
            self.assertEqual(grouped['接通转化率'], Decimal('0.1'))
            self.assertIsNone(grouped['有课例产'])
            self.assertNotIn('状态', grouped)

    def test_sort_before_pagination_and_missing_last(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'test.sqlite3'
            rows = [['2026-01-01', '小学', '秋1', '1', str(i), i, 20, 3, 5, 8] for i in range(55)]
            with closing(connect(path)) as db:
                replace_source(db, '经营', book(J, rows), 'test.xlsx')
                replace_source(db, '线索', book(L, [['20260102', '小学', '秋1', '1', 'only', 1, 5]]), 'test.xlsx')
            asc = dashboard({'sort': ['经营例子量'], 'direction': ['asc']}, path)
            desc = dashboard({'sort': ['经营例子量'], 'direction': ['desc']}, path)
            self.assertEqual(asc['rows'][0]['经营例子量'], 0)
            self.assertEqual(desc['rows'][0]['经营例子量'], 54)
            self.assertEqual(dashboard({'sort': ['经营例子量'], 'direction': ['asc'], 'page': ['2']}, path)['rows'][-1]['状态'], '经营表未找到')
            self.assertEqual(dashboard({'sort': ['经营例子量'], 'direction': ['desc'], 'page': ['2']}, path)['rows'][-1]['状态'], '经营表未找到')
            self.assertEqual(asc['summary'], desc['summary'])
            grouped = dashboard({'aggregate':['1'], 'dimension':['线索批次'], 'sort':['经营例子量'], 'direction':['desc'], 'page':['2']}, path)
            self.assertEqual(grouped['total'], 56)
            self.assertEqual(grouped['rows'][0]['经营例子量'], 4)
            self.assertIsNone(grouped['rows'][-1]['经营例子量'])
            with self.assertRaises(ValueError): dashboard({'sort': ['invalid']}, path)
            with self.assertRaises(ValueError): dashboard({'sort': ['日期'], 'direction': ['invalid']}, path)
