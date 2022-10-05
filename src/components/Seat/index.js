import React, { useState} from "react";
import { Link } from "react-router-dom";
import PubSub from 'pubsub-js' // 分享與訂閱機制
import "./style.css";
export default function Seat(props) {
  // 點完餐的狀態
  const [orderDone101, setOrderDone101] = useState(JSON.parse(localStorage.getItem('orderDone101')));
  const [orderDone102, setOrderDone102] = useState(JSON.parse(localStorage.getItem('orderDone102')));
  const [orderDone103, setOrderDone103] = useState(JSON.parse(localStorage.getItem('orderDone103')));
  const [orderDone104, setOrderDone104] = useState(JSON.parse(localStorage.getItem('orderDone104')));
  const [orderDone201, setOrderDone201] = useState(JSON.parse(localStorage.getItem('orderDone201')));
  const [orderDone202, setOrderDone202] = useState(JSON.parse(localStorage.getItem('orderDone202')));
  const [orderDone203, setOrderDone203] = useState(JSON.parse(localStorage.getItem('orderDone203')));
  const [orderDone204, setOrderDone204] = useState(JSON.parse(localStorage.getItem('orderDone204')));
  // 設定 LocalStorage 的狀態
  const TrueOrFalse101 = () => {
    if(orderDone101===false){
      setOrderDone101(true)
      localStorage.setItem('orderDone101',JSON.stringify(true)) 
      console.log('101 準備點餐');
    }else{
      setOrderDone101(false)
      localStorage.setItem('orderDone101',JSON.stringify(false)) 
      console.log('101 已離開');
    }
  }
  const TrueOrFalse102 = () => {
    if(orderDone102===false){
      setOrderDone102(true)
      localStorage.setItem('orderDone102',JSON.stringify(true)) 
      console.log('102 準備點餐');
    }else{
      setOrderDone102(false)
      localStorage.setItem('orderDone102',JSON.stringify(false)) 
      console.log('102 已離開');
    }
  }
  const TrueOrFalse103 = () => {
    if(orderDone103===false){
      setOrderDone103(true)
      localStorage.setItem('orderDone103',JSON.stringify(true)) 
      console.log('103 準備點餐');
    }else{
      setOrderDone103(false)
      localStorage.setItem('orderDone103',JSON.stringify(false)) 
      console.log('103 已離開');
    }
  }
  const TrueOrFalse104 = () => {
    if(orderDone104===false){
      setOrderDone104(true)
      localStorage.setItem('orderDone104',JSON.stringify(true)) 
      console.log('104 準備點餐');
    }else{
      setOrderDone104(false)
      localStorage.setItem('orderDone104',JSON.stringify(false)) 
      console.log('104 已離開');
    }
  }
  const TrueOrFalse201 = () => {
    if(orderDone201===false){
      setOrderDone201(true)
      localStorage.setItem('orderDone201',JSON.stringify(true)) 
      console.log('201 準備點餐');
    }else{
      setOrderDone201(false)
      localStorage.setItem('orderDone201',JSON.stringify(false)) 
      console.log('201 已離開');
    }
  }
  const TrueOrFalse202 = () => {
    if(orderDone202===false){
      setOrderDone202(true)
      localStorage.setItem('orderDone202',JSON.stringify(true)) 
      console.log('202 準備點餐');
    }else{
      setOrderDone202(false)
      localStorage.setItem('orderDone202',JSON.stringify(false)) 
      console.log('202 已離開');
    }
  }
  const TrueOrFalse203 = () => {
    if(orderDone203===false){
      setOrderDone203(true)
      localStorage.setItem('orderDone203',JSON.stringify(true)) 
      console.log('203 準備點餐');
    }else{
      setOrderDone203(false)
      localStorage.setItem('orderDone203',JSON.stringify(false)) 
      console.log('203 已離開');
    }
  }
  const TrueOrFalse204 = () => {
    if(orderDone204===false){
      setOrderDone204(true)
      localStorage.setItem('orderDone204',JSON.stringify(true)) 
      console.log('204 準備點餐');
    }else{
      setOrderDone204(false)
      localStorage.setItem('orderDone204',JSON.stringify(false)) 
      console.log('204 已離開');
    }
  }
  // 點餐後的特效 
  const orederChange1 = {
    backgroundColor: "rgb(129, 216, 208)"
  }
  // 利用三元表達式取得CSS效果
  const changeStyle101 = orderDone101?orederChange1:null
  const changeStyle102 = orderDone102?orederChange1:null
  const changeStyle103 = orderDone103?orederChange1:null
  const changeStyle104 = orderDone104?orederChange1:null
  const changeStyle201 = orderDone201?orederChange1:null
  const changeStyle202 = orderDone202?orederChange1:null
  const changeStyle203 = orderDone203?orederChange1:null
  const changeStyle204 = orderDone204?orederChange1:null
  // 將座位資訊傳回至 Seat
  const onePeople = (orderDone101+orderDone102+orderDone103+orderDone104) // 判斷單人位有幾桌已點餐
  const fourPeople = (orderDone201+orderDone202+orderDone203+orderDone204) // 判斷四人位有幾桌已點餐
  PubSub.publish('seatState',{onePeople:onePeople,fourPeople:fourPeople})
  return (
    <div className="seat">
      {orderDone101
      ?<div className="box box101" onClick={TrueOrFalse101} style={changeStyle101}><Link to="/peopleState">101</Link></div>
      :<div className="box box101" onClick={TrueOrFalse101} style={changeStyle101}><Link to="/peopleChange">101</Link></div>}
      {orderDone102
      ?<div className="box box102" onClick={TrueOrFalse102} style={changeStyle102}> <Link to="/peopleState">102</Link></div>
      :<div className="box box102" onClick={TrueOrFalse102} style={changeStyle102}><Link to="/peopleChange">102</Link></div>}
      {orderDone103
        ?<div className="box box103" onClick={TrueOrFalse103} style={changeStyle103}> <Link to="/peopleState">103</Link></div>
        :<div className="box box103" onClick={TrueOrFalse103} style={changeStyle103}><Link to="/peopleChange">103</Link></div>}
      {orderDone104
        ?<div className="box box104" onClick={TrueOrFalse104} style={changeStyle104}> <Link to="/peopleState">104</Link></div>
        :<div className="box box104" onClick={TrueOrFalse104} style={changeStyle104}><Link to="/peopleChange">104</Link></div>}
      {orderDone201
        ?<div className="box box201" onClick={TrueOrFalse201} style={changeStyle201}> <Link to="/peopleState">201</Link></div>
        :<div className="box box201" onClick={TrueOrFalse201} style={changeStyle201}><Link to="/peopleChange">201</Link></div>}
      {orderDone202
        ?<div className="box box202" onClick={TrueOrFalse202} style={changeStyle202}> <Link to="/peopleState">202</Link></div>
        :<div className="box box202" onClick={TrueOrFalse202} style={changeStyle202}><Link to="/peopleChange">202</Link></div>}
      {orderDone203
        ?<div className="box box203" onClick={TrueOrFalse203} style={changeStyle203}> <Link to="/peopleState">203</Link></div>
        :<div className="box box203" onClick={TrueOrFalse203} style={changeStyle203}><Link to="/peopleChange">203</Link></div>}
      {orderDone204
        ?<div className="box box204" onClick={TrueOrFalse204} style={changeStyle204}> <Link to="/peopleState">204</Link></div>
        :<div className="box box204" onClick={TrueOrFalse204} style={changeStyle204}><Link to="/peopleChange">204</Link></div>}
    </div>
  );
}