"""Local, read-only web view of the imported lead data."""
import json
import sqlite3
from contextlib import closing
from datetime import date
from decimal import Decimal
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

from data_layer import detail, filter_rows, sources, summarize

ROOT = Path(__file__).resolve().parent
DB = ROOT / 'data' / 'dashboard.sqlite3'
FILTERS = ('学部', '流量期次', '外呼池', '线索批次')


def dashboard(params, db_path=DB):
    if not db_path.exists():
        return {'sources': [], 'options': {}, 'summary': {}, 'rows': [], 'total': 0}
    with closing(sqlite3.connect(f'{db_path.as_uri()}?mode=ro', uri=True)) as db:
        all_rows = detail(db)
        source_info = sources(db)
    start, end = params.get('start', [''])[0], params.get('end', [''])[0]
    for value in (start, end):
        if value:
            date.fromisoformat(value)
    if start and end and start > end:
        raise ValueError('起始日期不能晚于结束日期')
    selected = filter_rows(all_rows, start or None, end or None,
                           **{key: params.get(key, []) for key in FILTERS})
    options = {key: sorted({r[key] for r in all_rows if r.get(key) is not None}) for key in FILTERS}
    page = int(params.get('page', ['1'])[0])
    if page < 1:
        raise ValueError('页码必须大于零')
    return {'sources': source_info, 'options': options, 'summary': summarize(selected),
            'rows': selected[(page-1)*50:page*50], 'total': len(selected)}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        url = urlsplit(self.path)
        if url.path == '/api/dashboard':
            try:
                body = json.dumps(dashboard(parse_qs(url.query)), ensure_ascii=False,
                                  default=lambda v: float(v) if isinstance(v, Decimal) else v).encode()
                self.send_response(200)
            except (ValueError, sqlite3.Error) as exc:
                body = json.dumps({'error': str(exc)}, ensure_ascii=False).encode()
                self.send_response(400 if isinstance(exc, ValueError) else 500)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
        elif url.path in ('/', '/style.css', '/app.js'):
            name = 'index.html' if url.path == '/' else url.path[1:]
            body = (ROOT / 'web' / name).read_bytes()
            self.send_response(200)
            self.send_header('Content-Type', {'index.html': 'text/html', 'style.css': 'text/css', 'app.js': 'text/javascript'}[name] + '; charset=utf-8')
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
