import React, { Component } from "react";
import "./style.css";
import Seat from "../Seat";
export default class PeopleState extends Component {
  // 初始化
  state = {
    onePeople:JSON.parse(localStorage.getItem('onePeople')), // 單人座初始化人數
    fourPeople:JSON.parse(localStorage.getItem('fourPeople')), // 四人座初始化人數
    // 是否已點餐
    orderDone101: false,
    orderDone102: false,
    orderDone103: false,
    orderDone104: false,
    orderDone201: false,
    orderDone202: false,
    orderDone203: false,
    orderDone204: false,
    done:true
  }
  // 將狀態傳給seat
  componentDidMount(){
    console.log('人數狀態被掛載了');
    // 之後判斷狀態是否為要點餐再執行
    if(this.state.done){
      this.setState((state,props)=>({onePeople:state.onePeople+1}),()=>localStorage.setItem('onePeople',JSON.stringify(this.state.onePeople)))
      this.setState((state,props)=>({fourPeople:state.fourPeople+1}),()=>localStorage.setItem('fourPeople',JSON.stringify(this.state.fourPeople)))
    }
  }
  // 測試用
  increase =()=>{
    if(this.state.onePeople<4){
      this.setState((state,props)=>({onePeople:state.onePeople+1}),()=>localStorage.setItem('onePeople',JSON.stringify(this.state.onePeople)))
    }
    if(this.state.fourPeople<4){
      this.setState((state,props)=>({fourPeople:state.fourPeople+1}),()=>localStorage.setItem('fourPeople',JSON.stringify(this.state.fourPeople)))
    }
  }
  reset =()=>{
    this.setState((state,props)=>({onePeople:0}),()=>localStorage.setItem('onePeople',JSON.stringify(this.state.onePeople)))
    this.setState((state,props)=>({fourPeople:0}),()=>localStorage.setItem('fourPeople',JSON.stringify(this.state.fourPeople)))
    this.setState({done:!this.state.done})
  }
  render() {
    return (
      <div className="peopleState">
        <div className="seatInfo">
          <h2>座位資訊</h2>
          <h2>單人座 ： {this.state.onePeople} / 4</h2>
          <h2>四人座 ： {this.state.fourPeople} / 4</h2>
          <button onClick={this.increase}>點我加一</button>
          <button onClick={this.reset}>RESET</button>
        </div>
        <Seat/>
      </div>
    );
  }
}
