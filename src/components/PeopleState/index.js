import React, { Component } from "react";
import PubSub from 'pubsub-js' // 分享與訂閱機制
import "./style.css";
import Seat from "../Seat";
export default class PeopleState extends Component {
  // 初始化
  state = {
    onePeople:JSON.parse(localStorage.getItem('onePeople')), // 單人座初始化人數
    fourPeople:JSON.parse(localStorage.getItem('fourPeople')), // 四人座初始化人數
  }
  // 組件掛載時觸發
  componentDidMount(){
    PubSub.subscribe('seatState',(msg,stateObj)=>{
      // 更新狀態
      this.setState(stateObj)
      // 更新localStorage
      localStorage.setItem('onePeople',JSON.stringify(this.state.onePeople))
      localStorage.setItem('fourPeople',JSON.stringify(this.state.fourPeople))
    })
  }
  // 接收 Seat 傳過來的座位資訊
  render() {
    return (
      <div className="peopleState">
        <div className="seatInfo">
          <h2>座位資訊</h2>
          <h2>單人座 ： {this.state.onePeople} / 4</h2>
          <h2>四人座 ： {this.state.fourPeople} / 4</h2>
        </div>
        <Seat/>
      </div>
    );
  }
}
