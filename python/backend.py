"""Browser-only adapter around the dashboard's existing Python data layer."""
import json
import shutil
import tempfile
import sqlite3
from pathlib import Path
from urllib.parse import parse_qs
import app
from data_layer import connect, read_batch_types, replace_sources
from contextlib import closing
from decimal import Decimal

current = None

def load_snapshot(database, mapping):
    global current
    candidate = Path(tempfile.mkdtemp())
    try:
        db_path = candidate / 'data.sqlite3'
        map_path = candidate / 'mapping.xlsx'
        db_path.write_bytes(database)
        map_path.write_bytes(mapping)
        read_batch_types(map_path)
        with closing(sqlite3.connect(f'{db_path.as_uri()}?mode=ro', uri=True)) as db:
            counts = dict(db.execute('SELECT kind, count(*) FROM records GROUP BY kind'))
        old = current
        current = candidate
        app.BATCH_TYPES_FILE = map_path
        if old is not None:
            shutil.rmtree(old)
        return {kind: counts.get(kind, 0) for kind in ('经营', '线索')}
    except Exception:
        shutil.rmtree(candidate, ignore_errors=True)
        raise

def refresh(operating, leads, mapping):
    global current
    candidate = Path(tempfile.mkdtemp())
    try:
        db_path = candidate / 'data.sqlite3'
        map_path = candidate / 'mapping.xlsx'
        map_path.write_bytes(mapping)
        read_batch_types(map_path)
        with closing(connect(db_path)) as db:
            counts = replace_sources(db, [('经营', operating, '经营表'), ('线索', leads, '线索表')])
        old = current
        current = candidate
        app.BATCH_TYPES_FILE = map_path
        if old is not None:
            shutil.rmtree(old)
        return counts
    except Exception:
        shutil.rmtree(candidate, ignore_errors=True)
        raise

def dashboard(query):
    if current is None:
        return json.dumps({'sources': [], 'options': {}, 'summary': {}, 'rows': [], 'total': 0, 'trends': []})
    result = app.dashboard(parse_qs(query), current / 'data.sqlite3')
    return json.dumps(result, ensure_ascii=False, default=lambda value: float(value) if isinstance(value, Decimal) else value)

def export(query):
    if current is None:
        raise ValueError('请先选择三份 Excel 并更新数据')
    return app.export_workbook(parse_qs(query), current / 'data.sqlite3')
