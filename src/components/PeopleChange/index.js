import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Seat from "../Seat";
export default class PeopleChange extends Component {
  state = { adult: 1, children: 0 };
  // 增加大人人數
  increaseAdult = () => {
    this.setState((state, props) => {
      return { adult: state.adult + 1 };
    });
  };
  // 減少大人人數
  decreaseAdult = () => {
    this.setState((state, props) => {
      if (state.adult !== 0) {
        return { adult: state.adult - 1 };
      } else {
        return { adult: 0 };
      }
    });
  };
  // 增加孩童人數
  increaseChildren = () => {
    this.setState((state, props) => {
      return { children: state.children + 1 };
    });
  };
  // 減少孩童人數
  decreaseChildren = () => {
    this.setState((state, props) => {
      if (state.children !== 0) {
        return { children: state.children - 1 };
      } else {
        return { children: 0 };
      }
    });
  };
  render() {
    return (
      <div className="peopleChange">
        <div className="people">
          <h2>大人</h2>
          <div className="peopleBox">
            <button className="increasepeople" onClick={this.increaseAdult}>
              +
            </button>
            <h3>{this.state.adult}</h3>
            <button className="decreasepeople" onClick={this.decreaseAdult}>
              -
            </button>
          </div>
          <h2>小孩</h2>
          <div className="peopleBox">
            <button className="increasepeople" onClick={this.increaseChildren}>
              +
            </button>
            <h3>{this.state.children}</h3>
            <button className="decreasepeople" onClick={this.decreaseChildren}>
              -
            </button>
          </div>
          <br />
          <button className="peopleChage-button">
            {
              // 檢查大人小孩人數是否同時低於1
              (this.state.adult===0 && this.state.children ===0)?(alert('人數錯誤'), '開始點餐'):<Link to="/menu">開始點餐</Link>
            }
          </button>
        </div>
        <Seat />
      </div>
    );
  }
}
