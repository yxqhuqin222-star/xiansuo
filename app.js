const dashboardFetch=window.dashboardFetch;
const form=document.querySelector('#filters'), fields=['学部','流量期次','外呼池','线索批次','批次类型'];
let page=1,total=0,sortField='',sortDirection='asc',requestId=0,loading=false,exporting=false,loadFailed=false;
const exportButton=document.querySelector('#export');
function updateExportState(){exportButton.disabled=loading||exporting||loadFailed||!window.pagesDataReady}
const storageKey='xiansuo.dashboard.filters.v1';
const filterKeys=new Set(['start','end',...fields]);
function storageWarning(){document.querySelector('#storage-warning').textContent='无法在此浏览器保存筛选条件，重新打开后需要重新选择。'}
function readStoredFilters(){try{const data=JSON.parse(localStorage.getItem(storageKey)||'null');if(!data||typeof data.draft!=='string'||typeof data.applied!=='string')return null;return data}catch(e){storageWarning();return null}}
function safeParams(value){const params=new URLSearchParams(value);for(const key of [...params.keys()])if(!filterKeys.has(key))params.delete(key);return params}
const savedFilters=readStoredFilters();
let appliedFilters=savedFilters?safeParams(savedFilters.applied):new URLSearchParams(new FormData(form));
if(savedFilters){const draft=safeParams(savedFilters.draft);for(const key of ['start','end']){const value=draft.get(key)||'';if(!value||/^\d{4}-\d{2}-\d{2}$/.test(value)){form.elements[key].value=value;form.elements[key].dispatchEvent(new Event('change',{bubbles:true}))}}for(const key of fields){const select=form.elements[key];for(const value of new Set(draft.getAll(key))){const option=document.createElement('option');option.value=value;option.textContent=value;option.selected=true;select.append(option)}}}
function saveFilters(){try{localStorage.setItem(storageKey,JSON.stringify({draft:new URLSearchParams(new FormData(form)).toString(),applied:appliedFilters.toString()}));document.querySelector('#storage-warning').textContent=''}catch(e){storageWarning()}}
const metrics=[['例子数量','经营例子量'],['接通转化率','接通转化率'],['有课例产','有课例产'],['单例子结算成本','单例子结算成本'],['北A','北A']];
const cols=['日期','学部','流量期次','外呼池','线索批次','批次类型','状态','经营例子量','接通转化率','有课例产','单例子结算成本','北A'];
const dimensions=['日期','学部','流量期次','外呼池','线索批次','批次类型','状态'];
const headers=[...document.querySelectorAll('.sort-button')];
const visible=new Set(['日期','学部','批次类型','经营例子量','接通转化率','有课例产','单例子结算成本','北A']);
function showSort(){headers.forEach(item=>{const field=item.dataset.sort,active=visible.has(field)&&(sortField===field||(!sortField&&field==='日期')),direction=sortField?sortDirection:'desc',label=item.childNodes[0].textContent;item.parentElement.removeAttribute('aria-sort');if(active)item.parentElement.setAttribute('aria-sort',direction==='asc'?'ascending':'descending');item.querySelector('span').textContent=active?(direction==='asc'?'↑':'↓'):'↕';item.setAttribute('aria-label',`按${label}${active&&direction==='desc'?'升序':'降序'}排列`)})}
function format(v,key){if(v===null||v===undefined||v==='')return '—';if(typeof v!=='number')return String(v);if(key==='接通转化率')return (v*100).toFixed(2)+'%';if(key==='北A')return v.toFixed(1);return new Intl.NumberFormat('zh-CN',{maximumFractionDigits:key==='有课例产'||key==='单例子结算成本'?0:2}).format(v)}
function cell(tag,value){const e=document.createElement(tag);e.textContent=value;return e}
function params(){const p=new URLSearchParams(appliedFilters);for(const [key,value] of [...p])if(!value)p.delete(key);p.set('aggregate','1');for(const key of dimensions)if(visible.has(key))p.append('dimension',key);if(sortField){p.set('sort',sortField);p.set('direction',sortDirection)}return p}
function updateColumns(){
  document.querySelectorAll('.table-wrap tr').forEach(row=>[...row.children].forEach((cell,i)=>cell.hidden=!visible.has(cols[i])));
  document.querySelectorAll('#column-options input').forEach(input=>{input.checked=visible.has(input.value);input.disabled=input.checked&&visible.size===1});
  document.querySelector('#column-count').textContent=`已选 ${visible.size} / ${cols.length}`;
}
headers.forEach((button,i)=>{const label=document.createElement('label');label.className='column-option';const input=document.createElement('input');input.type='checkbox';input.value=cols[i];input.checked=true;input.addEventListener('change',()=>{if(input.checked)visible.add(input.value);else visible.delete(input.value);const resetSort=!!sortField&&!visible.has(sortField);if(resetSort){sortField='';sortDirection='asc'}showSort();updateColumns();if(dimensions.includes(input.value)||resetSort){page=1;document.querySelector('#rows').replaceChildren();load()}});const text=document.createElement('span');text.textContent=button.firstChild.textContent;label.append(input,text);document.querySelector('#column-options').append(label)});
showSort();
updateColumns();
const trendColors=['#2475ed','#00ad68','#d89900','#a34fc0','#d65b52','#34879a','#795548','#687080'];
function svgElement(name,attrs={},text){const node=document.createElementNS('http://www.w3.org/2000/svg',name);for(const [key,value] of Object.entries(attrs))node.setAttribute(key,value);if(text!==undefined)node.textContent=text;return node}
function renderTrend(rows,key,root){
  root.replaceChildren();
  const available=rows.filter(row=>row['日期']&&typeof row[key]==='number'&&Number.isFinite(row[key]));
  if(!available.length){const empty=cell('p','当前筛选条件下没有可展示的数据。');empty.className='trend-empty';root.append(empty);return}
  const dates=[...new Set(rows.map(row=>row['日期']).filter(Boolean))].sort();
  const days=[];let current=new Date(dates[0]+'T00:00:00Z'),end=new Date(dates[dates.length-1]+'T00:00:00Z');
  while(current<=end){days.push(current.toISOString().slice(0,10));current.setUTCDate(current.getUTCDate()+1)}
  const series=[...new Set(available.map(row=>row['批次类型']))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
  const width=Math.max(760,days.length*86+95),height=270,left=70,right=25,top=32,bottom=48,plotW=width-left-right,plotH=height-top-bottom;
  const values=available.map(row=>row[key]),min=Math.min(0,...values),max=Math.max(0,...values),span=max-min||1;
  const low=min<0?min-span*.08:0,high=max>0?max+span*.12:span*.12;
  const x=i=>left+(days.length===1?plotW/2:i*plotW/(days.length-1)),y=v=>top+(high-v)/(high-low)*plotH;
  const svg=svgElement('svg',{viewBox:`0 0 ${width} ${height}`,width,height,role:'img','aria-label':`${key}，按日期和批次类型汇总`});
  const axisFormat=v=>key==='接通转化率'?(v*100).toFixed(2)+'%':new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(v);
  for(let i=0;i<=4;i++){const value=low+(high-low)*i/4,py=y(value);svg.append(svgElement('line',{x1:left,y1:py,x2:width-right,y2:py,class:'trend-grid'}),svgElement('text',{x:left-10,y:py+4,'text-anchor':'end',class:'trend-axis'},axisFormat(value)))}
  days.forEach((day,i)=>svg.append(svgElement('text',{x:x(i),y:height-15,'text-anchor':'middle',class:'trend-axis'},day)));
  const labelPositions=new Map();
  for(const [index,type] of series.entries()){
    const color=trendColors[index%trendColors.length],byDate=new Map(available.filter(row=>row['批次类型']===type).map(row=>[row['日期'],row[key]]));
    let previous=null;
    days.forEach((day,i)=>{const value=byDate.get(day);if(value===undefined){previous=null;return}const px=x(i),py=y(value);
      if(previous){const mid=(previous.x+px)/2;svg.append(svgElement('path',{d:`M ${previous.x} ${previous.y} C ${mid} ${previous.y}, ${mid} ${py}, ${px} ${py}`,fill:'none',stroke:color,'stroke-width':2}))}
      const point=svgElement('circle',{cx:px,cy:py,r:4,fill:'#fff',stroke:color,'stroke-width':2,tabindex:'0','aria-label':`${day} ${type} ${key} ${format(value,key)}`});point.append(svgElement('title',{},`${day} ${type} ${format(value,key)}`));svg.append(point);
      const labelY=Math.max(12,py-10),used=labelPositions.get(day)||[];
      if(days.length<=14&&series.length<=4&&used.every(pos=>Math.abs(pos-labelY)>=15)){svg.append(svgElement('text',{x:px,y:labelY,'text-anchor':'middle',class:'trend-value'},format(value,key)));used.push(labelY);labelPositions.set(day,used)}
      previous={x:px,y:py};
    });
  }
  const scroll=cell('div','');scroll.className='trend-scroll';scroll.tabIndex=0;scroll.setAttribute('aria-label',`${key}趋势图，可横向滚动`);scroll.append(svg);root.append(scroll);scroll.scrollLeft=scroll.scrollWidth;
  const legend=cell('div','');legend.className='trend-legend';series.forEach((type,index)=>{const item=cell('span','');const line=cell('span','');line.className='trend-legend-line';line.style.backgroundColor=trendColors[index%trendColors.length];item.append(line,document.createTextNode(type));legend.append(item)});root.append(legend);
}
async function load(){
  const id=++requestId,p=params();p.set('page',page);loading=true;loadFailed=false;updateExportState();document.querySelector('#error').textContent='';
  try{
    const response=await dashboardFetch('/api/dashboard?'+p),data=await response.json();if(!response.ok)throw new Error(data.error||'读取失败');if(id!==requestId)return;
    total=data.total;
    renderTrend(data.trends, '接通转化率', document.querySelector('#trend-rate'));
    renderTrend(data.trends, '单例子结算成本', document.querySelector('#trend-cost'));
    for(const key of fields){const select=form.elements[key],selected=new Set([...select.selectedOptions].map(o=>o.value));select.replaceChildren();for(const value of new Set([...(data.options[key]||[]),...selected])){const option=document.createElement('option');option.value=value;option.textContent=value;option.selected=selected.has(value);select.append(option)}select.dispatchEvent(new Event('change',{bubbles:true}))}
    document.querySelector('#count').textContent=`${total.toLocaleString()} 条结果`;
    const metricRoot=document.querySelector('#metrics');metricRoot.replaceChildren();for(const [label,key] of metrics){const box=document.createElement('div');box.className='metric';const name=cell('div',label);name.className='metric-label';const value=cell('div',format(data.summary[key],key));value.className='metric-value';box.append(name,value);metricRoot.append(box)}
    const rows=document.querySelector('#rows');rows.replaceChildren();for(const row of data.rows){const tr=document.createElement('tr');for(const key of cols){const td=cell('td',format(row[key],key));if(key==='学部'&&row[key]){const badge=cell('span',format(row[key],key));badge.className='department-badge';badge.dataset.department=row[key];td.replaceChildren(badge)}tr.append(td)}rows.append(tr)}updateColumns();
    document.querySelector('#empty').hidden=total>0;document.querySelector('#page').textContent=`第 ${page} / ${Math.max(1,Math.ceil(total/50))} 页`;document.querySelector('#prev').disabled=page<=1;document.querySelector('#next').disabled=page*50>=total;
  }catch(e){if(id===requestId){loadFailed=true;document.querySelector('#trend-rate').replaceChildren();document.querySelector('#trend-cost').replaceChildren();document.querySelector('#error').textContent='数据读取失败：'+e.message}}finally{if(id===requestId){loading=false;updateExportState()}}
}
form.addEventListener('change',saveFilters);
form.addEventListener('submit',e=>{e.preventDefault();appliedFilters=new URLSearchParams(new FormData(form));saveFilters();page=1;load()});
document.querySelector('#reset').addEventListener('click',()=>{form.reset();appliedFilters=new URLSearchParams(new FormData(form));saveFilters();page=1;load()});
document.querySelector('#prev').addEventListener('click',()=>{page--;load()});document.querySelector('#next').addEventListener('click',()=>{page++;load()});
headers.forEach(button=>button.addEventListener('click',()=>{
  const field=button.dataset.sort;sortDirection=sortField===field?(sortDirection==='asc'?'desc':'asc'):(field==='日期'&&!sortField?'asc':'desc');sortField=field;page=1;
  showSort();load();
}));
document.querySelector('#export').addEventListener('click',async event=>{
  const button=event.currentTarget,p=params(),now=new Date(),pad=n=>String(n).padStart(2,'0');
  const filename=`关联数据_${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}.xlsx`;for(const key of cols)if(visible.has(key))p.append('column',key);
  exporting=true;updateExportState();button.textContent='正在导出…';document.querySelector('#export-error').textContent='';
  try{const response=await dashboardFetch('/api/export?'+p);if(!response.ok){const data=await response.json();throw new Error(data.error||'导出失败')}const blob=await response.blob(),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=filename;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}catch(e){document.querySelector('#export-error').textContent='导出失败：'+e.message}finally{exporting=false;updateExportState();button.textContent='导出 Excel'}
});
const refreshButton=document.querySelector('#refresh-data'),uploadStatus=document.querySelector('#upload-status');
refreshButton.addEventListener('click',async()=>{
  refreshButton.disabled=true;uploadStatus.classList.remove('error');uploadStatus.textContent='正在加载公开数据…';
  try{
    const response=await dashboardFetch('/api/refresh',{method:'POST',headers:{'Content-Type':'application/json'}});
    const data=await response.json();if(!response.ok)throw new Error(data.error||'更新失败');
    uploadStatus.textContent=`更新成功：经营表 ${data.counts['经营'].toLocaleString()} 行，线索表 ${data.counts['线索'].toLocaleString()} 行。`;page=1;await load();
  }catch(e){uploadStatus.classList.add('error');uploadStatus.textContent=`更新未完成：${e.message}。请检查后重试。`}
  finally{refreshButton.disabled=false}
});
load();
