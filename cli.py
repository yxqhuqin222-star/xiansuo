"""Command-line access to the local data layer; no network service is started."""
import argparse
import json
import sys
from datetime import date
from decimal import Decimal
from pathlib import Path
from data_layer import ImportErrorDetail, connect, detail, filter_rows, replace_source, sources, summarize


def iso_date(value):
    try:
        return date.fromisoformat(value).isoformat()
    except ValueError as exc:
        raise argparse.ArgumentTypeError('日期请使用 YYYY-MM-DD') from exc


def main():
    parser = argparse.ArgumentParser(description='本地线索数据处理')
    parser.add_argument('--db', default='data/dashboard.sqlite3', help='本地数据文件')
    sub = parser.add_subparsers(dest='action', required=True)
    imp = sub.add_parser('import', help='完整替换一个数据源')
    imp.add_argument('kind', choices=['经营', '线索'])
    imp.add_argument('file')
    sub.add_parser('status', help='显示已导入的数据源')
    view = sub.add_parser('view', help='查看筛选结果和汇总')
    view.add_argument('--start', type=iso_date, help='起始日期 YYYY-MM-DD')
    view.add_argument('--end', type=iso_date, help='结束日期 YYYY-MM-DD')
    for key in ('学部', '流量期次', '外呼池', '线索批次'):
        view.add_argument('--' + key, action='append')
    args = parser.parse_args()
    if args.action == 'view' and args.start and args.end and args.start > args.end:
        parser.error('起始日期不能晚于结束日期')
    path = Path(args.db)
    path.parent.mkdir(parents=True, exist_ok=True)
    with connect(path) as db:
        if args.action == 'import':
            source = Path(args.file)
            count = replace_source(db, args.kind, source.read_bytes(), source.name)
            print(f'{args.kind}数据导入成功，记录数：{count}')
        elif args.action == 'status':
            print(json.dumps(sources(db), ensure_ascii=False, indent=2))
        else:
            filters = {k: getattr(args, k) for k in ('学部', '流量期次', '外呼池', '线索批次')}
            rows = filter_rows(detail(db), args.start, args.end, **filters)
            print(json.dumps({'汇总': summarize(rows), '明细': rows}, ensure_ascii=False, indent=2,
                             default=lambda value: float(value) if isinstance(value, Decimal) else value))

if __name__ == '__main__':
    try:
        main()
    except (ImportErrorDetail, OSError) as exc:
        print(f'操作失败：{exc}', file=sys.stderr)
        sys.exit(1)
