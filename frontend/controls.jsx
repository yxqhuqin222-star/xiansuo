import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {I18nProvider} from 'react-aria-components';
import {Button, Calendar, DateField, DatePicker, Label, ListBox, Select} from '@heroui/react';
import {parseDate} from '@internationalized/date';
import './theme.css';

function SelectControl({element,label}) {
  const [options,setOptions]=useState([]);
  const [value,setValue]=useState(null);
  useEffect(()=>{
    const sync=()=>{setOptions(Array.from(element.options).map(o=>({id:o.value||'__all__',label:o.textContent})));setValue(element.value||'__all__')};
    sync();const observer=new MutationObserver(sync);observer.observe(element,{childList:true});
    const reset=()=>setTimeout(sync,0);element.form?.addEventListener('reset',reset);element.addEventListener('change',sync);
    return ()=>{observer.disconnect();element.form?.removeEventListener('reset',reset);element.removeEventListener('change',sync)};
  },[element]);
  return <Select className="filter-control" selectedKey={value} onSelectionChange={key=>{element.value=key==='__all__'?'':String(key);element.dispatchEvent(new Event('change',{bubbles:true}))}}>
    <Label>{label}</Label><Select.Trigger><Select.Value/><Select.Indicator/></Select.Trigger>
    <Select.Popover className="filter-popover"><ListBox>{options.map(o=><ListBox.Item key={o.id} id={o.id} textValue={o.label}>{o.label}<ListBox.ItemIndicator/></ListBox.Item>)}</ListBox></Select.Popover>
  </Select>;
}
function DateControl({element,label}) {
  const [value,setValue]=useState(null);
  useEffect(()=>{const reset=()=>setTimeout(()=>setValue(element.value?parseDate(element.value):null),0);element.form?.addEventListener('reset',reset);return()=>element.form?.removeEventListener('reset',reset)},[element]);
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
