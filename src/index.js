// 引入核心庫
import React from "react";
import ReactDOM from "react-dom/client";
// 引入 路由器
import { BrowserRouter } from "react-router-dom";
// 引入App
import App from "./App";

// 渲染到頁面，新版本的react18渲染
// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);

