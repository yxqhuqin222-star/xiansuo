"""Local import, reconciliation and metric calculation for the two source workbooks."""
from __future__ import annotations

import hashlib
import json
import math
import sqlite3
from collections import defaultdict
from datetime import date, datetime
from decimal import Decimal, InvalidOperation
from io import BytesIO
from pathlib import Path

from openpyxl import load_workbook

KEYS = ('日期', '学部', '流量期次', '外呼池', '线索批次')
FIELDS = {
    '经营': ('例子量', '有课gmv', '单例子结算成本', '单例子cac', '北A分子'),
    '线索': ('例子量', 'AI接通数'),
}
MAP = {'流量期次_学部': '流量期次', '批次': '线索批次'}

class ImportErrorDetail(ValueError):
    pass


def clean(value):
    if value is None or str(value).strip().upper() in ('', 'NULL', 'NONE', 'NAN'):
        return None
    if isinstance(value, float) and value.is_integer():
        return str(int(value))
    return str(value).strip()


def parse_date(value):
    if isinstance(value, (datetime, date)):
        return value.date().isoformat() if isinstance(value, datetime) else value.isoformat()
    text = clean(value)
    if text is None:
        return None
    try:
        return datetime.strptime(text, '%Y%m%d' if len(text) == 8 and text.isdigit() else '%Y-%m-%d').date().isoformat()
    except ValueError as exc:
        raise ImportErrorDetail('日期格式无法识别，请使用 YYYY-MM-DD 或 YYYYMMDD') from exc


def number(value, field):
    if clean(value) is None:
        return None
    try:
        result = Decimal(str(value).strip())
    except InvalidOperation as exc:
        raise ImportErrorDetail(f'{field}包含非数值') from exc
    if not result.is_finite():
        raise ImportErrorDetail(f'{field}包含非有限数值')
    return str(result)


def parse_workbook(content: bytes, kind: str):
    if kind not in FIELDS:
        raise ImportErrorDetail('未知数据源')
    try:
        book = load_workbook(BytesIO(content), read_only=True, data_only=True)
    except Exception as exc:
        raise ImportErrorDetail('无法读取 Excel 文件，请检查文件格式') from exc
    try:
        if 'Sheet1' not in book.sheetnames:
            raise ImportErrorDetail('找不到 Sheet1 工作表')
        sheet = book['Sheet1']
        sheet.reset_dimensions()
        it = sheet.iter_rows(values_only=True)
        header = next(it, None)
        if not header:
            raise ImportErrorDetail('工作表为空')
        names = [clean(x) for x in header]
        if kind == '线索':
            names = [MAP.get(x, x) for x in names]
            if '例子量' not in names and '例子数' in names:
                names[names.index('例子数')] = '例子量'
            elif '例子量' in names and '例子数' in names:
                raise ImportErrorDetail('同时存在例子量和例子数，请保留一个字段')
        required = KEYS + FIELDS[kind]
        if any(names.count(name) > 1 for name in required):
            raise ImportErrorDetail('映射后表头存在重复字段')
        missing = set(required) - set(names)
        if missing:
            raise ImportErrorDetail('缺少必要字段：' + '、'.join(sorted(missing)))
        out = []
        for rownum, values in enumerate(it, start=2):
            row = {name: values[i] if i < len(values) else None for i, name in enumerate(names) if name in required}
            if not any(v is not None and str(v).strip() for v in row.values()):
                continue
            try:
                parsed = {key: (parse_date(row.get(key)) if key == '日期' else clean(row.get(key))) for key in KEYS}
                parsed.update({field: number(row.get(field), field) for field in FIELDS[kind]})
            except ImportErrorDetail as exc:
                raise ImportErrorDetail(f'第 {rownum} 行：{exc}') from exc
            out.append(parsed)
        if not out:
            raise ImportErrorDetail('工作表没有数据行')
        return out
    finally:
        book.close()


def read_batch_types(path):
    try:
        book = load_workbook(path, read_only=True, data_only=True)
    except Exception as exc:
        raise ImportErrorDetail(f'无法读取批次类型表 {path.name}') from exc
    try:
        if 'Sheet1' not in book.sheetnames:
            raise ImportErrorDetail('批次类型表缺少 Sheet1 工作表')
        sheet = book['Sheet1']; sheet.reset_dimensions()
        rows = sheet.iter_rows(values_only=True)
        header = [clean(v) for v in next(rows, ())]
        for field in ('批次', '批次类型'):
            if header.count(field) != 1:
                raise ImportErrorDetail(f'批次类型表缺少或重复字段：{field}')
        batch_index, type_index = header.index('批次'), header.index('批次类型')
        mapping = {}
        for rownum, row in enumerate(rows, start=2):
            batch = clean(row[batch_index] if batch_index < len(row) else None)
            kind = clean(row[type_index] if type_index < len(row) else None)
            if batch is None and kind is None:
                continue
            if batch is None or kind is None:
                raise ImportErrorDetail(f'批次类型表第 {rownum} 行的批次或批次类型为空')
            if batch in mapping and mapping[batch] != kind:
                raise ImportErrorDetail(f'批次类型表第 {rownum} 行的批次对应多个类型：{batch}')
            mapping[batch] = kind
        return mapping
    finally:
        book.close()


def connect(path):
    db = sqlite3.connect(path)
    db.execute('PRAGMA foreign_keys=ON')
    db.execute('CREATE TABLE IF NOT EXISTS sources (kind TEXT PRIMARY KEY, filename TEXT NOT NULL, sha256 TEXT NOT NULL, imported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)')
    db.execute('CREATE TABLE IF NOT EXISTS records (kind TEXT NOT NULL REFERENCES sources(kind) ON DELETE CASCADE, payload TEXT NOT NULL)')
    db.commit()
    return db


def replace_source(db, kind, content, filename):
    return replace_sources(db, [(kind, content, filename)])[kind]


def replace_sources(db, inputs):
    prepared = []
    for kind, content, filename in inputs:
        try:
            rows = parse_workbook(content, kind)
        except ImportErrorDetail as exc:
            raise ImportErrorDetail(f'{filename}：{exc}') from exc
        prepared.append((kind, filename, hashlib.sha256(content).hexdigest(), rows))
    with db:
        for kind, filename, digest, rows in prepared:
            db.execute('DELETE FROM sources WHERE kind=?', (kind,))
            db.execute('INSERT INTO sources(kind, filename, sha256) VALUES (?, ?, ?)', (kind, Path(filename).name, digest))
            db.executemany('INSERT INTO records(kind,payload) VALUES (?,?)', ((kind, json.dumps(row, ensure_ascii=False)) for row in rows))
    return {kind: len(rows) for kind, _, _, rows in prepared}


def sources(db):
    return [dict(zip(('来源', '文件', 'SHA256', '导入时间UTC'), row)) for row in db.execute('SELECT kind,filename,sha256,imported_at FROM sources ORDER BY kind')]


def strict_sum(values):
    values = list(values)
    if not values or any(v is None for v in values):
        return None
    return sum(values, Decimal(0))


def mul(a, b):
    return a * b if a is not None and b is not None else None


def divide(a, b):
    return a / b if a is not None and b is not None and b != 0 else None


def grouped(db, kind):
    groups = defaultdict(list)
    for (payload,) in db.execute('SELECT payload FROM records WHERE kind=?', (kind,)):
        row = json.loads(payload)
        groups[tuple(row[k] for k in KEYS)].append(row)
    result = {}
    for key, rows in groups.items():
        def get(row, name):
            v = row[name]
            return Decimal(v) if v is not None else None
        count = strict_sum(get(r, '例子量') for r in rows)
        if kind == '经营':
            result[key] = {'经营例子量': count, '有课gmv': strict_sum(get(r, '有课gmv') for r in rows),
                '结算加权和': strict_sum(mul(get(r, '例子量'), get(r, '单例子结算成本')) for r in rows),
                'cac加权和': strict_sum(mul(get(r, '例子量'), get(r, '单例子cac')) for r in rows),
                '北A分子': strict_sum(get(r, '北A分子') for r in rows)}
        else:
            result[key] = {'线索例子量': count, 'AI接通数': strict_sum(get(r, 'AI接通数') for r in rows)}
    return result


def calculate(base):
    v = dict(base)
    v['例子数量'] = v.get('经营例子量')
    v['接通转化率'] = divide(v.get('线索例子量'), v.get('AI接通数'))
    v['单例子结算成本'] = divide(v.get('结算加权和'), v.get('经营例子量'))
    v['有课例产'] = divide(v.get('有课gmv'), v.get('经营例子量'))
    v['北A'] = divide(v.get('北A分子'), v.get('cac加权和'))
    a, b = v.get('经营例子量'), v.get('线索例子量')
    v['例子差异'] = a - b if a is not None and b is not None else None
    return v


def detail(db):
    left, right = grouped(db, '经营'), grouped(db, '线索')
    rows = []
    for key in left.keys() | right.keys():
        a, b = left.get(key), right.get(key)
        if all(v is not None for v in key) and a is not None and b is not None:
            rows.append(calculate({**dict(zip(KEYS, key)), **a, **b, '状态': '已匹配'}))
        else:
            for data, kind in ((a, '经营'), (b, '线索')):
                if data is not None:
                    status = f'{kind}：键缺失' if any(v is None for v in key) else ('线索表未找到' if kind == '经营' else '经营表未找到')
                    rows.append(calculate({**dict(zip(KEYS, key)), **data, '状态': status}))
    return sorted(rows, key=lambda r: tuple(r[k] or '' for k in KEYS) + (r['状态'],))


def filter_rows(rows, start=None, end=None, **filters):
    return [r for r in rows if (not start or (r['日期'] is not None and r['日期'] >= start))
            and (not end or (r['日期'] is not None and r['日期'] <= end))
            and all(not allowed or r.get(k) in allowed for k, allowed in filters.items())]


def summarize(rows):
    result = {}
    for kind, fields in (('经营', ('经营例子量', '有课gmv', '结算加权和', 'cac加权和', '北A分子')),
                         ('线索', ('线索例子量', 'AI接通数'))):
        selected = [r for r in rows if ('经营例子量' if kind == '经营' else '线索例子量') in r]
        for field in fields:
            result[field] = strict_sum(r.get(field) for r in selected)
    result = calculate(result)
    # Totals may cover different populations; comparison is meaningful only per matched key.
    result['例子差异'] = None
    return result


def aggregate_rows(rows, dimensions):
    """Group already-associated detail rows without changing their source membership."""
    groups = defaultdict(list)
    for row in rows:
        groups[tuple(row.get(key) for key in dimensions)].append(row)
    return [{**dict(zip(dimensions, key)), **summarize(group)} for key, group in groups.items()]
