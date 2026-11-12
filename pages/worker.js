importScripts('./runtime/pyodide.js');
let initialized;
async function initialize(){
  const py=await loadPyodide({indexURL:new URL('./runtime/',self.location.href).href});
  await py.loadPackage('sqlite3');
  for(const wheel of ['openpyxl.whl','et_xmlfile.whl']){
    const response=await fetch('./runtime/'+wheel);
    if(!response.ok)throw new Error('计算组件加载失败');
    py.FS.writeFile('/tmp/'+wheel,new Uint8Array(await response.arrayBuffer()));
  }
  await py.runPythonAsync(`import zipfile, site\nfor wheel in ('openpyxl.whl','et_xmlfile.whl'):\n    with zipfile.ZipFile('/tmp/'+wheel) as archive:\n        archive.extractall(site.getsitepackages()[0])`);
  for(const file of ['app.py','data_layer.py','backend.py']){
    const response=await fetch('./python/'+file);
    if(!response.ok)throw new Error('计算程序加载失败');
    py.FS.writeFile('/home/pyodide/'+file,await response.text());
  }
  await py.runPythonAsync('import sys; sys.path.insert(0, "/home/pyodide"); import backend');
  return py;
}
self.onmessage=async ({data})=>{
  const {id,action,query,files}=data;
  try{
    const py=await (initialized ||= initialize());
    const backend=py.pyimport('backend');
    try{
      let value;
      if(action==='refresh'){
        const args=files.map(file=>py.toPy(new Uint8Array(file)));
        try{const result=backend.refresh(...args);value=result.toJs({dict_converter:Object.fromEntries});result.destroy()}finally{args.forEach(arg=>arg.destroy())}
      }else if(action==='dashboard')value=backend.dashboard(query);
      else if(action==='export'){
        const result=backend.export(query);try{value=result.toJs().slice().buffer}finally{result.destroy()}
      }else throw new Error('未知操作');
      self.postMessage({id,value});
    }finally{backend.destroy()}
  }catch(error){
    const lines=String(error.message||error).trim().split('\n').filter(Boolean);
    const message=lines.at(-1).replace(/^[\w.]+(?:Error|ErrorDetail):\s*/, '');
    self.postMessage({id,error:message});
  }
};
