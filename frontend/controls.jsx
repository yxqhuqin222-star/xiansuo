import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {I18nProvider} from 'react-aria-components';
import {Calendar, DateField, DatePicker, Label} from '@heroui/react';
import {parseDate} from '@internationalized/date';
import './theme.css';

function SelectControl({element,label}) {
  const [options,setOptions]=useState([]), [selected,setSelected]=useState([]), [query,setQuery]=useState('');
  const details=useRef(null);
  useEffect(()=>{
    const sync=()=>{setOptions(Array.from(element.options).map(o=>({id:o.value,label:o.textContent})));setSelected(Array.from(element.selectedOptions).map(o=>o.value))};
    sync();const observer=new MutationObserver(sync);observer.observe(element,{childList:true});
    const reset=()=>setTimeout(()=>{sync();setQuery('')},0);
    const outside=e=>{if(details.current && !details.current.contains(e.target))details.current.open=false};
    element.form?.addEventListener('reset',reset);element.addEventListener('change',sync);document.addEventListener('pointerdown',outside);
    return ()=>{observer.disconnect();element.form?.removeEventListener('reset',reset);element.removeEventListener('change',sync);document.removeEventListener('pointerdown',outside)};
  },[element]);
  const update=(id,checked)=>{for(const option of element.options)if(option.value===id)option.selected=checked;element.dispatchEvent(new Event('change',{bubbles:true}))};
  const clear=()=>{for(const option of element.options)option.selected=false;element.dispatchEvent(new Event('change',{bubbles:true}))};
  const shown=options.filter(o=>o.label.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  const selectShown=()=>{const ids=new Set(shown.map(o=>o.id));for(const option of element.options)if(ids.has(option.value))option.selected=true;element.dispatchEvent(new Event('change',{bubbles:true}))};
  const selectedText=selected.map(id=>options.find(o=>o.id===id)?.label ?? id).join('、');
  return <div className="filter-control"><span className="label" id={`${element.id}-label`}>{label}</span>
    <details ref={details} className="multi-select" onKeyDown={e=>{if(e.key==='Escape'){details.current.open=false;details.current.querySelector('summary').focus()}}}>
      <summary aria-labelledby={`${element.id}-label ${element.id}-value`}><span id={`${element.id}-value`} className="multi-select__value" title={selectedText || undefined}>{selected.length ? selectedText : `全部${label==='流量期次'?'期次':label==='线索批次'?'批次':label}`}</span><span aria-hidden="true" className="multi-select__chevron">⌄</span></summary>
      <div className="multi-select__panel"><div className="multi-select__toolbar"><input type="search" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')e.preventDefault()}} placeholder="搜索选项" aria-label={`搜索${label}`}/></div><div className="multi-select__actions"><button type="button" onClick={selectShown} disabled={!shown.length}>{query ? '全选搜索结果' : '全选'}</button><button type="button" onClick={clear}>清空</button></div>
        <div className="multi-select__options">{shown.length ? shown.map(o=><label key={o.id} className="multi-select__option"><input type="checkbox" checked={selected.includes(o.id)} onChange={e=>update(o.id,e.target.checked)}/><span>{o.label}</span></label>) : <p className="multi-select__empty">没有匹配的选项</p>}</div>
      </div>
    </details></div>;
}
function DateControl({element,label}) {
  const [value,setValue]=useState(null);
  useEffect(()=>{const sync=()=>setValue(element.value?parseDate(element.value):null);const reset=()=>setTimeout(sync,0);sync();element.addEventListener('change',sync);element.form?.addEventListener('reset',reset);return()=>{element.removeEventListener('change',sync);element.form?.removeEventListener('reset',reset)}},[element]);
  return <DatePicker className="filter-control" value={value} onChange={date=>{setValue(date);element.value=date?date.toString():'';element.dispatchEvent(new Event('change',{bubbles:true}))}}>
    <Label>{label}</Label><DateField.Group fullWidth><DateField.Input>{segment=><DateField.Segment segment={segment}/>}</DateField.Input><DateField.Suffix><DatePicker.Trigger><DatePicker.TriggerIndicator/></DatePicker.Trigger></DateField.Suffix></DateField.Group>
    <DatePicker.Popover className="date-popover"><Calendar aria-label={label}><Calendar.Header><Calendar.YearPickerTrigger><Calendar.YearPickerTriggerHeading/><Calendar.YearPickerTriggerIndicator/></Calendar.YearPickerTrigger><Calendar.NavButton slot="previous"/><Calendar.NavButton slot="next"/></Calendar.Header><Calendar.Grid><Calendar.GridHeader>{day=><Calendar.HeaderCell>{day}</Calendar.HeaderCell>}</Calendar.GridHeader><Calendar.GridBody>{date=><Calendar.Cell date={date}/>}</Calendar.GridBody></Calendar.Grid><Calendar.YearPickerGrid><Calendar.YearPickerGridBody>{({year})=><Calendar.YearPickerCell year={year}/>}</Calendar.YearPickerGridBody></Calendar.YearPickerGrid></Calendar></DatePicker.Popover>
  </DatePicker>;
}
for(const host of document.querySelectorAll('[data-control]')){
  const element=document.getElementById(host.dataset.control);
  const Component=element.tagName==='SELECT'?SelectControl:DateControl;
  createRoot(host).render(<I18nProvider locale="zh-CN"><Component element={element} label={host.dataset.label}/></I18nProvider>);
}
