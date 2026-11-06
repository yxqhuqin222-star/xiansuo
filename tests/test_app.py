import tempfile
import unittest
from contextlib import closing
from decimal import Decimal
from pathlib import Path
from data_layer import connect, replace_source
from test_data_layer import book, J, L
from app import dashboard

class DashboardTests(unittest.TestCase):
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
