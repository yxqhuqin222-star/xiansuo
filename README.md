# 线索数据处理

当前实现本地数据导入、关联、指标计算和只读网页看板。需要 Python 3 和 `requirements.txt` 中的依赖。业务 Excel 和本地数据库不包含在仓库中，请自行准备文件。

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python cli.py import 经营 jingyinglirun_demo.xlsx
.venv/bin/python cli.py import 线索 xiansuoloudou.xlsx
.venv/bin/python cli.py status
.venv/bin/python cli.py view --start 2026-10-26 --学部 小学
```

每次导入会完整替换该来源的数据，请导入包含所需全部历史日期的文件。数据存储在本地 `data/dashboard.sqlite3`，原始 Excel 不会被修改。`view` 会在终端打印所选业务数据，请仅在本机可信环境中使用；可通过 `--end`、`--流量期次`、`--外呼池` 和 `--线索批次` 筛选。具体口径见 [数据架构](docs/数据架构.md)。

运行测试：`.venv/bin/python -m unittest discover -s tests`。

## 本地看板

安装 Python 依赖并导入数据后，首次运行 `npm ci && npm run build` 构建界面；界面源码有改动时重新运行 `npm run build`。然后运行 `.venv/bin/python app.py`，在浏览器打开 http://127.0.0.1:8001。看板支持日期、学部、流量期次、外呼池和线索批次筛选，展示汇总指标与分页关联明细。数据导入仍使用上方命令行；服务只监听本机，不提供外网访问。退出服务按 Ctrl+C。
