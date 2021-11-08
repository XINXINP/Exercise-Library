import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name = "react study"
const isAlert = false
function alertName() {
  return name + name
}
const jsx = (
<div>hello{isAlert?alertName():'错误'}</div>
)
const jsx1 = (
  <div>
    {/* 数组 */}
    <ul>
      {
        [1,2,3].map(item=>{
           return <li style={{background:'red'}}>{item}</li>
        })
      }
    </ul>
  </div>
)
const obj = (<div>{jsx}{jsx1}</div>)
ReactDOM.render(
  obj,
  document.getElementById('root')
);
