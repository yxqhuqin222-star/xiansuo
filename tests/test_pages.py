"""Browser adapter keeps the existing calculations and rejects partial updates."""
import json
import sys
import unittest
from io import BytesIO
from pathlib import Path
from openpyxl import load_workbook

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'pages'))
import backend
import app
from test_data_layer import book, J, L

class PagesAdapterTests(unittest.TestCase):
    def setUp(self):
        self.original_mapping = app.BATCH_TYPES_FILE
        self.operating = book(J, [['2026-01-01','小学','秋1','1','a',2,20,3,5,8]])
        self.leads = book(L, [['20260101','小学','秋1','1','a',1,5]])
        self.mapping = book(['批次','批次类型'], [['a','甲类']])

    def tearDown(self):
        if backend.current is not None:
            import shutil
            shutil.rmtree(backend.current)
            backend.current = None
        app.BATCH_TYPES_FILE = self.original_mapping

    def test_refresh_query_export_and_failed_refresh(self):
        self.assertEqual(backend.refresh(self.operating,self.leads,self.mapping), {'经营':1,'线索':1})
        query='aggregate=1&dimension=日期&dimension=学部&dimension=批次类型'
        result=json.loads(backend.dashboard(query))
        self.assertEqual(result['total'],1)
        self.assertEqual(result['rows'][0]['批次类型'],'甲类')
        self.assertEqual(result['rows'][0]['接通转化率'],0.2)
        sheet=load_workbook(BytesIO(backend.export(query+'&column=学部&column=接通转化率'))).active
        self.assertEqual(list(sheet.values), [('学部','接通转化率'),('小学',0.2)])
        invalid=book(['批次','批次类型'],[['a','甲类'],['a','乙类']])
        with self.assertRaisesRegex(ValueError, '多个类型'):
            backend.refresh(self.operating,self.leads,invalid)
        self.assertEqual(json.loads(backend.dashboard(query))['rows'][0]['批次类型'],'甲类')
