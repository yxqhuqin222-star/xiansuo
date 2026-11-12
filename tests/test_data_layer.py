import io
import sqlite3
import unittest
from datetime import date
from decimal import Decimal

from openpyxl import Workbook
from data_layer import connect, detail, filter_rows, replace_source, sources, summarize, ImportErrorDetail


def book(headers, rows):
    w = Workbook(); s = w.active; s.title = 'Sheet1'; s.append(headers)
    for row in rows: s.append(row)
    out = io.BytesIO(); w.save(out); return out.getvalue()

K = ['日期', '学部', '流量期次', '外呼池', '线索批次']
J = K + ['例子量', '有课gmv', '单例子结算成本', '单例子cac', '北A分子']
L = ['日期', '学部', '流量期次_学部', '外呼池', '批次', '例子量', 'AI接通数']

class DataLayerTests(unittest.TestCase):
    def setUp(self): self.db = connect(':memory:')
    def tearDown(self): self.db.close()
    def put(self, kind, headers, rows): replace_source(self.db, kind, book(headers, rows), 'example.xlsx')

    def test_aggregate_match_and_summary(self):
        self.put('经营', J, [[date(2026,1,1),'小学','秋1',33,'a',2,20,3,5,8],
                            ['2026-01-01','小学','秋1',33,'a',3,60,5,7,13],
                            ['2026-01-02','小学','秋1',33,'b',1,10,2,4,4]])
        self.put('线索', L, [['20260101','小学','秋1','33','a',4,10], ['20260102','小学','秋1','33','b',1,5]])
        rows=detail(self.db); first=rows[0]; summary=summarize(rows)
        self.assertEqual(len(rows),2); self.assertEqual(first['状态'],'已匹配')
        self.assertEqual(first['例子数量'],5); self.assertEqual(first['例子差异'],1)
        self.assertEqual(first['单例子结算成本'],Decimal('4.2'))
        self.assertEqual(first['有课例产'],16); self.assertEqual(first['北A'],Decimal(21)/31)
        self.assertEqual(summary['接通转化率'],Decimal(5)/15)
        self.assertEqual(summarize(filter_rows(rows, '2026-01-02'))['例子数量'],1)

    def test_missing_keys_never_match_and_missing_values_remain_missing(self):
        self.put('经营',J,[['2026-01-01','小学','秋1',None,'a',3,None,2,0,3]])
        self.put('线索',L,[['20260101','小学','秋1',None,'a',2,0]])
        rows=detail(self.db); self.assertEqual(len(rows),2)
        self.assertTrue(all('键缺失' in r['状态'] for r in rows))
        self.assertTrue(all(r['例子差异'] is None for r in rows))
        total=summarize(rows); self.assertIsNone(total['接通转化率']); self.assertIsNone(total['有课例产']); self.assertIsNone(total['北A'])

    def test_replace_is_atomic_and_does_not_touch_other_source(self):
        self.put('经营',J,[['2026-01-01','小学','秋1',33,'a',2,4,3,5,8]])
        self.put('线索',L,[['20260101','小学','秋1',33,'a',2,4]])
        before=sources(self.db)
        with self.assertRaises(ImportErrorDetail): replace_source(self.db,'经营',b'invalid','invalid.xlsx')
        self.assertEqual(sources(self.db),before)
        self.put('经营',J,[['2026-01-02','初中','秋2',34,'b',7,14,3,5,8]])
        rows=detail(self.db)
        self.assertEqual(len(rows),2)
        self.assertEqual(rows[0]['状态'], '经营表未找到')
        self.assertEqual(rows[1]['状态'], '线索表未找到')
        self.assertEqual(summarize(rows)['例子数量'],7)
        self.assertEqual(summarize(rows)['线索例子量'],2)

    def test_legacy_header_and_partial_metric_are_safe(self):
        legacy = L[:-2] + ['例子数', 'AI接通数']
        self.put('线索',legacy,[['20260101','小学','秋1',33,'a',1,2]])
        self.put('经营',J,[['2026-01-01','小学','秋1',33,'a',2,4,3,5,8],
                           ['2026-01-01','小学','秋1',33,'a',3,6,None,5,8]])
        row=detail(self.db)[0]; self.assertIsNone(row['单例子结算成本']); self.assertEqual(row['有课例产'],2)

    def test_invalid_rows_are_rejected(self):
        self.put('经营',J,[['2026-01-01','小学','秋1',33,'a',2,4,3,5,8]])
        for bad in ([['bad-date','小学','秋1',33,'a',2,4,3,5,8]], [['2026-01-01','小学','秋1',33,'a','bad',4,3,5,8]]):
            with self.assertRaises(ImportErrorDetail): self.put('经营',J,bad)
        self.assertEqual(summarize(detail(self.db))['例子数量'],2)

if __name__ == '__main__': unittest.main()
