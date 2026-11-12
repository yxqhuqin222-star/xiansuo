"""Local dashboard and Excel import service."""
import json
from io import BytesIO
import sqlite3
from contextlib import closing
from datetime import date
from decimal import Decimal
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

from openpyxl import Workbook

from data_layer import KEYS, aggregate_rows, connect, detail, filter_rows, read_batch_types, replace_sources, sources, summarize

ROOT = Path(__file__).resolve().parent
DB = ROOT / 'data' / 'dashboard.sqlite3'
SOURCE_FILES = {'经营': ROOT / 'jingyinglirun_demo.xlsx', '线索': ROOT / 'xiansuoloudou.xlsx'}
BATCH_TYPES_FILE = ROOT / 'xiansuoleixin.xlsx'
DEPARTMENTS = ('小学', '初中', '高中', '自拼')
FILTERS = ('学部', '流量期次', '外呼池', '线索批次', '批次类型')
COLUMNS = {'日期': '日期', '学部': '学部', '流量期次': '流量期次', '外呼池': '外呼池',
           '线索批次': '线索批次', '批次类型': '批次类型', '状态': '关联状态', '经营例子量': '例子量',
           '接通转化率': '接通转化率', '有课例产': '有课例产', '单例子结算成本': '单例子结算成本', '北A': '北A'}
DIMENSIONS = (*KEYS, '批次类型', '状态')
SORT_FIELDS = ('日期', '学部', '流量期次', '外呼池', '线索批次', '批次类型', '状态',
               '经营例子量', '接通转化率', '有课例产', '单例子结算成本', '北A')


def dashboard(params, db_path=DB, all_results=False):
    if not db_path.exists():
        return {'sources': [], 'options': {}, 'summary': {}, 'rows': [], 'total': 0, 'trends': []}
    with closing(sqlite3.connect(f'{db_path.as_uri()}?mode=ro', uri=True)) as db:
        all_rows = [row for row in detail(db) if row['学部'] in DEPARTMENTS]
        source_info = sources(db)
    batch_types = read_batch_types(BATCH_TYPES_FILE)
    for row in all_rows:
        row['批次类型'] = batch_types.get(row['线索批次'], '其他')
    start, end = params.get('start', [''])[0], params.get('end', [''])[0]
    for value in (start, end):
        if value:
            date.fromisoformat(value)
    if start and end and start > end:
        raise ValueError('起始日期不能晚于结束日期')
    selected = filter_rows(all_rows, start or None, end or None,
                           **{key: params.get(key, []) for key in FILTERS})
    options = {key: sorted({r[key] for r in all_rows if r.get(key) is not None}) for key in FILTERS}
    options['学部'] = [value for value in DEPARTMENTS if value in options['学部']]
    summary = summarize(selected)
    trends = [] if all_results else [
        {key: row.get(key) for key in ('日期', '批次类型', '接通转化率', '单例子结算成本')}
        for row in aggregate_rows([row for row in selected if row.get('日期')], ('日期', '批次类型'))
    ]
    if params.get('aggregate', ['0'])[0] == '1':
        dimensions = params.get('dimension', [])
        if len(set(dimensions)) != len(dimensions) or any(key not in DIMENSIONS for key in dimensions):
            raise ValueError('聚合维度无效')
        selected = aggregate_rows(selected, dimensions)
    sort_field = params.get('sort', [''])[0]
    direction = params.get('direction', ['asc'])[0]
    if sort_field and (sort_field not in SORT_FIELDS or direction not in ('asc', 'desc')):
        raise ValueError('排序字段或方向无效')
    if sort_field:
        present = [row for row in selected if row.get(sort_field) is not None]
        missing = [row for row in selected if row.get(sort_field) is None]
        present.sort(key=lambda row: DEPARTMENTS.index(row[sort_field]) if sort_field == '学部' else row[sort_field], reverse=direction == 'desc')
        selected = present + missing
    else:
        selected.sort(key=lambda row: DEPARTMENTS.index(row['学部']) if row.get('学部') in DEPARTMENTS else len(DEPARTMENTS))
        present = [row for row in selected if row.get('日期') is not None]
        missing = [row for row in selected if row.get('日期') is None]
        present.sort(key=lambda row: row['日期'], reverse=True)
        selected = present + missing
    page = int(params.get('page', ['1'])[0])
    if page < 1:
        raise ValueError('页码必须大于零')
    return {'sources': source_info, 'options': options, 'summary': summary,
            'rows': selected if all_results else selected[(page-1)*50:page*50], 'total': len(selected), 'trends': trends}


def export_workbook(params, db_path=DB):
    columns = params.get('column', list(COLUMNS))
    if not columns or len(set(columns)) != len(columns) or any(key not in COLUMNS for key in columns):
        raise ValueError('导出列无效')
    rows = dashboard(params, db_path, all_results=True)['rows']
    workbook = Workbook()
    sheet = workbook.active
    sheet.title = '关联数据'
    sheet.append([COLUMNS[key] for key in columns])
    for row in rows:
        values = [row.get(key) for key in columns]
        sheet.append([float(v) if isinstance(v, Decimal) else v for v in values])
        for cell, key, value in zip(sheet[sheet.max_row], columns, values):
            if isinstance(value, str):
                cell.data_type = 's'
            if key == '接通转化率' and value is not None:
                cell.number_format = '0.00%'
            elif key == '北A' and value is not None:
                cell.number_format = '0.0'
            elif key in ('有课例产', '单例子结算成本') and value is not None:
                cell.number_format = '0'
            elif isinstance(value, (int, float, Decimal)):
                cell.number_format = '0.##'
    sheet.freeze_panes = 'A2'
    output = BytesIO()
    workbook.save(output)
    return output.getvalue()


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        url = urlsplit(self.path)
        if url.path != '/api/refresh':
            self.send_error(404)
            return
        try:
            # Reject ordinary cross-origin form submissions to this local service.
            origin = self.headers.get('Origin')
            port = self.server.server_port
            if self.headers.get('Content-Type') != 'application/json' or (origin and origin not in (f'http://127.0.0.1:{port}', f'http://localhost:{port}')):
                raise ValueError('请求来源或格式无效')
            read_batch_types(BATCH_TYPES_FILE)
            inputs = []
            for kind, path in SOURCE_FILES.items():
                try:
                    inputs.append((kind, path.read_bytes(), path.name))
                except OSError as exc:
                    raise ValueError(f'无法读取 {path.name}，请检查文件是否存在且可访问') from exc
            DB.parent.mkdir(parents=True, exist_ok=True)
            with closing(connect(DB)) as db:
                counts = replace_sources(db, inputs)
            body = {'counts': counts}
            status = 200
        except (ValueError, sqlite3.Error, OSError) as exc:
            body = {'error': str(exc)}
            status = 400 if isinstance(exc, ValueError) else 500
        payload = json.dumps(body, ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        url = urlsplit(self.path)
        if url.path in ('/api/dashboard', '/api/export'):
            try:
                params = parse_qs(url.query)
                if url.path == '/api/export':
                    body = export_workbook(params, DB)
                    content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                else:
                    body = json.dumps(dashboard(params, DB), ensure_ascii=False,
                                      default=lambda v: float(v) if isinstance(v, Decimal) else v).encode()
                    content_type = 'application/json; charset=utf-8'
                self.send_response(200)
                if url.path == '/api/export':
                    self.send_header('Content-Disposition', 'attachment; filename=lead-details.xlsx')
            except (ValueError, sqlite3.Error) as exc:
                body = json.dumps({'error': str(exc)}, ensure_ascii=False).encode()
                content_type = 'application/json; charset=utf-8'
                self.send_response(400 if isinstance(exc, ValueError) else 500)
            self.send_header('Content-Type', content_type)
        elif url.path == '/favicon.ico':
            body = (ROOT / 'web' / 'favicon.ico').read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', 'image/x-icon')
        elif url.path in ('/fonts/notoserif-heavy.woff2', '/fonts/inter.woff2'):
            body = (ROOT / 'web' / url.path[1:]).read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', 'font/woff2')
        elif url.path in ('/', '/style.css', '/app.js', '/ui.css', '/ui.js'):
            name = 'index.html' if url.path == '/' else url.path[1:]
            body = (ROOT / 'web' / ('dist' if name in ('ui.css', 'ui.js') else '') / name).read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', {'index.html': 'text/html', 'style.css': 'text/css', 'app.js': 'text/javascript', 'ui.js': 'text/javascript', 'ui.css': 'text/css'}[name] + '; charset=utf-8')
        else:
            self.send_error(404)
            return
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == '__main__':
    print('打开 http://127.0.0.1:8001', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8001), Handler).serve_forever()
