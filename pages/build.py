"""Build a self-contained GitHub Pages artifact without business data."""
import hashlib
import json
import shutil
import subprocess
import sys
import tempfile
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parent.parent
output = root / 'site-dist'
if output.exists():
    raise SystemExit('site-dist 已存在，请先移走该目录，避免覆盖文件')
output.mkdir()
runtime = output / 'runtime'
runtime.mkdir()
(output / 'python').mkdir()
for name in ('pyodide.js', 'pyodide.asm.js', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json'):
    shutil.copy2(root / 'node_modules' / 'pyodide' / name, runtime / name)
lock = json.loads((runtime / 'pyodide-lock.json').read_text())['packages']['sqlite3']
url = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' + lock['file_name']
with urllib.request.urlopen(url, timeout=60) as response:
    sqlite = response.read()
if hashlib.sha256(sqlite).hexdigest() != lock['sha256']:
    raise SystemExit('sqlite3 组件校验失败')
(runtime / lock['file_name']).write_bytes(sqlite)
with tempfile.TemporaryDirectory() as temp:
    subprocess.run([sys.executable, '-m', 'pip', 'download', '--disable-pip-version-check', '--only-binary=:all:', '--dest', temp, 'openpyxl==3.1.5', 'et_xmlfile==2.0.0'], check=True)
    for prefix, destination in [('openpyxl-', 'openpyxl.whl'), ('et_xmlfile-', 'et_xmlfile.whl')]:
        wheels = list(Path(temp).glob(prefix + '*.whl'))
        if len(wheels) != 1:
            raise SystemExit(f'无法定位 {prefix} 组件')
        shutil.copy2(wheels[0], runtime / destination)
for name in ('app.py', 'data_layer.py'):
    shutil.copy2(root / name, output / 'python' / name)
shutil.copy2(root / 'pages/backend.py', output / 'python/backend.py')
for name in ('worker.js', 'client.js'):
    shutil.copy2(root / 'pages' / name, output / name)
for name in ('style.css', 'app.js', 'favicon.ico'):
    shutil.copy2(root / 'web' / name, output / name)
shutil.copytree(root / 'web/fonts', output / 'fonts')
for name in ('ui.js', 'ui.css'):
    shutil.copy2(root / 'web/dist' / name, output / name)
html = (root / 'web/index.html').read_text()
for asset in ('favicon.ico', 'style.css', 'app.js', 'ui.css', 'ui.js'):
    html = html.replace('"/' + asset + '"', '"./' + asset + '"')
html = html.replace('<script src="./app.js" defer></script>', '<script src="./client.js" defer></script><script src="./app.js" defer></script>')
html = html.replace('本地数据看板', '公开数据快照').replace('>更新数据</button>', '>刷新数据</button>')
(output / 'index.html').write_text(html)
js = (output / 'app.js').read_text()
js = js.replace('const form=document', 'const dashboardFetch=window.dashboardFetch;\nconst form=document', 1).replace("fetch('/api/", "dashboardFetch('/api/")
js = js.replace('loading||exporting||loadFailed', 'loading||exporting||loadFailed||!window.pagesDataReady')
js = js.replace('正在读取两份底表…', '正在加载公开数据…')
(output / 'app.js').write_text(js)
(output / '.nojekyll').write_text('')
print('Pages artifact built:', output)
