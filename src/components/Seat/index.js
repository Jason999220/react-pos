import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import table from '../../data/table'
/* 右側座位 */

export default function Seat(props) {
  // 已點餐
  // order =()=>{
    //  PubSub.publish('訂閱名稱',{資料對象})
    // PubSub.publish('changePeopleState',{orderDone101:true})
    // console.log(this.props);
    // this.props.check(console.log(onePeople))
    // this.props.check({Done:!true,onePeople:})
    // 取得當前點擊的桌號
    // console.log(node.target.innerText);
  //   const value = node.target.innerText
  //   table.map((number)=>{ 
  //     if(number===value){
  //       this.setState({Done:true})
  //     }
  // })
  // }
  // 點完餐後的特效
  const [Toggled, setToggled] = useState(false);
  const [Toggled101, setToggled101] = useState(false);
  const [Toggled102, setToggled102] = useState(false);
  const [Toggled103, setToggled103] = useState(false);
  const toggleTrueFalse = () => setToggled(!Toggled); 
  const toggleTrueFalse101 = () => setToggled101(!Toggled101); 
  const toggleTrueFalse102 = () => setToggled102(!Toggled102); 
  const toggleTrueFalse103 = () => setToggled103(!Toggled103); 
  // 點餐後的特效 
  const orederChange1 = {
    backgroundColor: "rgb(100, 50, 225)"
  }
  // 利用三元表達式得到CSS效果
  const changeStyle = Toggled?orederChange1:null
  const changeStyle101 = Toggled101?orederChange1:null
  const changeStyle102 = Toggled102?orederChange1:null
  const changeStyle103 = Toggled103?orederChange1:null
  return (
    <div className="seat">
      <Link to="/peopleChange">
        <div className="box box101" onClick={toggleTrueFalse101} style={changeStyle101}>101</div>
        <div className="box box102" onClick={toggleTrueFalse102} style={changeStyle102}>102</div>
        <div className="box box103" onClick={toggleTrueFalse103} style={changeStyle103}>103</div>
        <div className="box box104" onClick={toggleTrueFalse} style={changeStyle}>104</div>
        <div className="box box201" onClick={toggleTrueFalse} style={changeStyle}>201</div>
        <div className="box box202" onClick={toggleTrueFalse} style={changeStyle}>202</div>
        <div className="box box203" onClick={toggleTrueFalse} style={changeStyle}>203</div>
        <div className="box box204" onClick={toggleTrueFalse} style={changeStyle}>204</div>
      </Link>
    </div>
  );
}