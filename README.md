

1. 步驟
    step1 靜態畫面
        座位表
        菜單介面
        我的餐點介面
        計算金額畫面
    step2 點餐功能
        小型購物車模板
        儲存餐點資訊
        區分已點餐和未點餐
        座位資訊動態化
    step3 其餘功能
        利用localstorage儲存所有點過的餐點 ？ 能否只用前端進行儲存

利用 create-react-app 創建 react 腳手架
利用 React-route 進行 SPA

2. SKILL：
    1. Javascript
        1. Arrow Function
        2. Spread Operator
        3. Local Storage
        4. Ternary Operator
    2. React
        1. ReactHook
        2. React-Route
        3. React-pubsub-js
    3. Other
        1. SPA


3. Qusetion：
    1. setState 因為 route 而導致資料不對。
        => 有在 PeopleState 中設定加一按鈕，確定人數狀態是可以變更的，但在跳轉頁面後再回到人數狀態時資料回到初始化 
        => PeopleState 利用 localStorage 將人數資訊存儲至網頁中再加以取得
        => 使用 JSON.stringify 與 JSON.parse 轉換資料格式
        => 利用 componentDidMount 更新 setState 以解決此問題
    2. 在 Seat 中判別 state 改變 CSS 方法？
