"""Prepare an explicitly authorized public snapshot from the current local database."""
import argparse
import json
import sqlite3
import sys
from contextlib import closing
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import app
from data_layer import connect, read_batch_types
from openpyxl import Workbook

parser = argparse.ArgumentParser()
parser.add_argument('--confirm-public', action='store_true')
args = parser.parse_args()
if not args.confirm_public:
    parser.error('此操作生成公开数据，必须明确指定 --confirm-public')
root = app.ROOT / 'site-dist' / 'snapshot'
if root.exists():
    raise SystemExit('快照目录已存在，避免覆盖')
if not app.DB.exists():
    raise SystemExit('本地数据库不存在，请先更新数据')
mapping = read_batch_types(app.BATCH_TYPES_FILE)
root.mkdir(parents=True)
out_db = root / 'data.sqlite3'
with closing(sqlite3.connect(f'{app.DB.resolve().as_uri()}?mode=ro', uri=True)) as source, closing(connect(out_db)) as target:
    rows = [(kind, payload) for kind, payload in source.execute('SELECT kind, payload FROM records') if json.loads(payload).get('学部') in app.DEPARTMENTS]
    if not rows:
        raise SystemExit('当前看板没有可发布的数据')
    with target:
        target.executemany('INSERT INTO sources(kind,filename,sha256) VALUES (?,?,?)', [(kind, kind, '') for kind in sorted({kind for kind, _ in rows})])
        target.executemany('INSERT INTO records(kind,payload) VALUES (?,?)', rows)
    batches = {json.loads(payload).get('线索批次') for _, payload in rows}
book=Workbook()
sheet=book.active
sheet.title='Sheet1'
sheet.append(['批次','批次类型'])
for batch in sorted(value for value in batches if value in mapping):
    sheet.append([batch,mapping[batch]])
map_path=root/'mapping.xlsx'
book.save(map_path)
original=app.BATCH_TYPES_FILE
try:
    cases=[{}, {'aggregate':['1'],'dimension':['日期','学部','批次类型']}, {'学部':['小学']}, {'学部':['初中','高中'], 'aggregate':['1'],'dimension':['批次类型']}]
    for params in cases:
        app.BATCH_TYPES_FILE=original
        expected=app.dashboard(params, app.DB, all_results=True)
        app.BATCH_TYPES_FILE=map_path
        actual=app.dashboard(params, out_db, all_results=True)
        for field in ('options','summary','rows','total'):
            if expected[field] != actual[field]:
                raise RuntimeError(f'快照与本地数据不一致：{field}')
finally:
    app.BATCH_TYPES_FILE=original
print('快照已生成并完成对账；记录数：',len(rows))
