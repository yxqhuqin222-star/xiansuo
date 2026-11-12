# 线索数据处理

当前实现本地数据导入、关联、指标计算和网页看板。需要 Python 3 和 `requirements.txt` 中的依赖。

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

## GitHub Pages 版

打开 https://yxqhuqin222-star.github.io/xiansuo/，分别选择经营表、线索表和批次类型表，再点击“更新数据”。文件在当前浏览器中处理，不上传；刷新或关闭页面后需要重新选择。首次使用需要下载计算组件，大文件处理可能需要等待。页面支持筛选、汇总和导出，计算口径与本地看板一致。

## 本地看板

安装 Python 依赖后，首次运行 `npm ci && npm run build` 构建界面；界面源码有改动时重新运行 `npm run build`。在浏览器打开 http://127.0.0.1:8001。当前 Mac 已配置用户级后台服务，登录后自动启动，进程退出时自动重启；如果没有配置该服务，可在终端运行 `.venv/bin/python app.py`。将批次类型映射表 `xiansuoleixin.xlsx` 放在项目目录（`Sheet1` 包含“批次”和“批次类型”列）。保存项目目录中的 `jingyinglirun_demo.xlsx` 和 `xiansuoloudou.xlsx` 后，点击“更新数据”即可重新读取两份文件并刷新看板；每份文件需包含该来源所需的全部历史数据。服务只监听本机，不提供外网访问。手动在终端运行时可用 Ctrl+C 退出；后台服务运行时不要再启动第二个实例。若 8001 被其他程序占用，需先处理端口冲突。
