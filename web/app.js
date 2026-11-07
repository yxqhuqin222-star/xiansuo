const form=document.querySelector('#filters'), fields=['学部','流量期次','外呼池','线索批次'];
let page=1,total=0,initialized=false,sortField="",sortDirection="asc";
const metrics=[['例子数量','经营例子量'],['接通转化率','接通转化率','percent'],['有课例产','有课例产'],['单例子结算成本','单例子结算成本'],['北A','北A','percent']];
const cols=['日期','学部','流量期次','外呼池','线索批次','状态','经营例子量','接通转化率','有课例产','单例子结算成本','北A'];
function format(v,percent=false){if(v===null||v===undefined||v==='')return '—';if(typeof v!=='number')return String(v);return percent?(v*100).toFixed(1)+'%':new Intl.NumberFormat('zh-CN',{maximumFractionDigits:2}).format(v)}
function cell(tag,value){const e=document.createElement(tag);e.textContent=value;return e}
async function load(){const p=new URLSearchParams(new FormData(form));for(const [key,value] of [...p])if(!value)p.delete(key);p.set('page',page);if(sortField){p.set('sort',sortField);p.set('direction',sortDirection)}document.querySelector('#error').textContent='';try{const response=await fetch('/api/dashboard?'+p);const data=await response.json();if(!response.ok)throw new Error(data.error||'读取失败');total=data.total;if(!initialized){for(const key of fields){const select=form.elements[key];for(const value of data.options[key]||[]){const option=document.createElement('option');option.value=value;option.textContent=value;select.append(option)}}initialized=true}document.querySelector('#count').textContent=`${total.toLocaleString()} 条关联明细`;const metricRoot=document.querySelector('#metrics');metricRoot.replaceChildren();for(const [label,key,type] of metrics){const box=document.createElement('div');box.className='metric';const name=cell('div',label);name.className='metric-label';const value=cell('div',format(data.summary[key],type==='percent'));value.className='metric-value';box.append(name,value);metricRoot.append(box)}const rows=document.querySelector('#rows');rows.replaceChildren();for(const row of data.rows){const tr=document.createElement('tr');for(const key of cols)tr.append(cell('td',format(row[key],key==='接通转化率'||key==='北A')));rows.append(tr)}document.querySelector('#empty').hidden=total>0;document.querySelector('#page').textContent=`第 ${page} / ${Math.max(1,Math.ceil(total/50))} 页`;document.querySelector('#prev').disabled=page<=1;document.querySelector('#next').disabled=page*50>=total}catch(e){document.querySelector('#error').textContent='数据读取失败：'+e.message}}
form.addEventListener('submit',e=>{e.preventDefault();page=1;load()});document.querySelector('#reset').addEventListener('click',()=>{form.reset();page=1;load()});document.querySelector('#prev').addEventListener('click',()=>{page--;load()});document.querySelector('#next').addEventListener('click',()=>{page++;load()});load();

document.querySelectorAll('.sort-button').forEach(button=>button.addEventListener('click',()=>{
  const field=button.dataset.sort;
  sortDirection=sortField===field&&sortDirection==='asc'?'desc':'asc';
  sortField=field;page=1;
  document.querySelectorAll('.sort-button').forEach(item=>{
    const active=item===button, label=item.childNodes[0].textContent;
    item.parentElement.removeAttribute('aria-sort');
    if(active)item.parentElement.setAttribute('aria-sort',sortDirection==='asc'?'ascending':'descending');
    item.querySelector('span').textContent=active?(sortDirection==='asc'?'↑':'↓'):'↕';
    item.setAttribute('aria-label',`按${label}${active&&sortDirection==='asc'?'降序':'升序'}排列`);
  });
  load();
}));
