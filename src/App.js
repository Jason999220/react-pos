import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Func from "./components/Func";
import Menu from "./components/Menu";
import PeopleState from "./components/PeopleState";
import PeopleChange from "./components/PeopleChange";

export default class App extends Component {
  render() {
    return (
      // 初始的整個畫面
      <div className="container">
        {/* 左側按鈕選單，導覽列 */}
        <Func />
        <main>
          <Routes>
            {/* 根目錄 */}
            <Route path="/" element={<PeopleState />} />
            {/* 座位現況 */}
            <Route path="/peopleState" element={<PeopleState />} />
            {/* 調整人數 */}
            <Route path="/peopleChange" element={<PeopleChange />} />
            {/* 點餐畫面 */}
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
      </div>
    );
  }
}
