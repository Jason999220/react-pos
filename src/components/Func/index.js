import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default class Func extends Component {
  render() {
    return (
      <nav className="func">
        <button className="func-list">
          <Link to="/peopleState">現況座位</Link>
        </button>
        <button className="func-list">
          <Link to="/peopleChange">調整人數</Link>
        </button>
        <button className="func-list">
          <Link to="/menu">點餐</Link>
        </button>
      </nav>
    );
  }
}
