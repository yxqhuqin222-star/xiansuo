(() => {
  const worker=new Worker('./worker.js');
  let nextId=0;
  const pending=new Map();
  worker.onmessage=({data})=>{const item=pending.get(data.id);if(!item)return;pending.delete(data.id);data.error?item.reject(new Error(data.error)):item.resolve(data.value)};
  worker.onerror=()=>{for(const item of pending.values())item.reject(new Error('计算组件启动失败，请刷新页面重试'));pending.clear()};
  function call(action,query=''){return new Promise((resolve,reject)=>{const id=++nextId;pending.set(id,{resolve,reject});worker.postMessage({id,action,query})})}
  window.pagesDataReady=false;
  const status=document.querySelector('#upload-status');
  status.textContent='正在加载公开数据…';
  let initial;
  function loadSnapshot(){
    return call('snapshot').then(counts=>{window.pagesDataReady=true;return counts});
  }
  function ensureSnapshot(){
    if(!initial)initial=loadSnapshot().then(counts=>{status.textContent='';return counts}).catch(error=>{initial=null;status.textContent='';throw error});
    return initial;
  }
  window.dashboardFetch=async (url)=>{
    const [path,query='']=url.split('?');
    try{
      if(path==='/api/refresh'){
        initial=loadSnapshot().catch(error=>{initial=null;throw error});
        return Response.json({counts:await initial});
      }
      if(path==='/api/dashboard'){
        await ensureSnapshot();
        return new Response(await call('dashboard',query),{headers:{'Content-Type':'application/json'}});
      }
      if(path==='/api/export'){
        await ensureSnapshot();
        return new Response(await call('export',query),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}});
      }
      throw new Error('未知请求');
    }catch(error){return Response.json({error:error.message},{status:400})}
  };
})();
