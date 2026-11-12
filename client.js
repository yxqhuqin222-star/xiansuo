(() => {
  const worker=new Worker('./worker.js');
  let nextId=0;
  const pending=new Map();
  worker.onmessage=({data})=>{const item=pending.get(data.id);if(!item)return;pending.delete(data.id);data.error?item.reject(new Error(data.error)):item.resolve(data.value)};
  worker.onerror=()=>{for(const item of pending.values())item.reject(new Error('计算组件启动失败，请刷新页面重试'));pending.clear()};
  function call(action,query='',files){return new Promise((resolve,reject)=>{const id=++nextId;pending.set(id,{resolve,reject});worker.postMessage({id,action,query,files},files||[])})}
  let ready=false;
  window.pagesDataReady=false;
  const inputs={};
  const panel=document.createElement('div');panel.className='pages-files';
  for(const [key,label] of [['operating','经营表'],['leads','线索表'],['mapping','批次类型表']]){
    const wrapper=document.createElement('label');wrapper.textContent=label;
    const input=document.createElement('input');input.type='file';input.accept='.xlsx';wrapper.append(input);panel.append(wrapper);inputs[key]=input;
  }
  document.querySelector('.intro').append(panel);
  window.dashboardFetch=async (url)=>{
    const [path,query='']=url.split('?');
    try{
      if(path==='/api/refresh'){
        const files=Object.values(inputs).map(input=>input.files[0]);
        if(files.some(file=>!file))throw new Error('请选择经营表、线索表和批次类型表');
        const contents=await Promise.all(files.map(file=>file.arrayBuffer()));
        const counts=await call('refresh','',contents);ready=true;window.pagesDataReady=true;
        return Response.json({counts});
      }
      if(path==='/api/dashboard'){
        if(!ready)return Response.json({sources:[],options:{},summary:{},rows:[],total:0,trends:[]});
        return new Response(await call('dashboard',query),{headers:{'Content-Type':'application/json'}});
      }
      if(path==='/api/export')return new Response(await call('export',query),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}});
      throw new Error('未知请求');
    }catch(error){return Response.json({error:error.message},{status:400})}
  };
})();
