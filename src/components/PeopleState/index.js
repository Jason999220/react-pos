import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./style.css";
import Seat from "../Seat";
export default class PeopleState extends Component {
  // 初始化
  state = {
    onePeople:0, // 單人座初始化人數
    fourPeople:0, // 四人座初始化人數
    // 是否已點餐
    orderDone101: false,
    orderDone102: false,
    orderDone103: false,
    orderDone104: false,
    orderDone201: false,
    orderDone202: false,
    orderDone203: false,
    orderDone204: false,
  }
  // 將狀態傳給seat
  componentDidMount(){
    // 接收資料 => 訂閱消息
    PubSub.subscribe('changePeopleState',(_,stateObj)=>{
      console.log(this.state.orderDone101);
      this.state.orderDone101?this.setState({onePeople:this.onePeople+1}):this.setState({...this.state})
    })
  }
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
