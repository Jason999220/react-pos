import React from "react";
import { Link } from "react-router-dom";

/*
export default class MyMeals extends Component {
  // 掛載時訂閱及發布
  componentDidMount(){
    PubSub.subscribe('order',(_,data)=>{
      this.setState(data)
      console.log('我的餐點已更新',data);
      console.log(this.state);
    })
  }
  render() {
    // const {name} = this
    return (
      //右側 已選購的餐點
      // <div className="my-meals">
      //   <h4>我的餐點</h4>
      //   <br />
      //   <p>名稱 數量 單價 金額</p>
      //   <div className="my-meal">
      //     <div className="my-meal-name">熱狗</div>
      //     <div className="my-meal-number">4</div>
      //     <div className="my-meal-price">45</div>
      //     <div className="my-meal-total">220</div>
      //   </div>
      // </div>
      // <table>
      //   { 表格標題 
      //   <tr cloSpan='4'>
      //     <th>我的餐點</th>
      //   </tr>
      //   {/* 各項分類 *
      //   <tr>
      //     <th>名稱</th>
      //     <th>數量</th>
      //     <th>單價</th>
      //     <th>總金額</th>
      //   </tr>
      // </table>
      <h1> </h1>
    );
  }
}
*/

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  // set money
  const porductsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const serviceCharge = (porductsPrice * 0.1).toFixed(0);
  const totalPrice = porductsPrice + parseInt(serviceCharge);
  return (
    <div className="basket">
      <h2>購物車</h2>
      {cartItems.map((item) => (
        <div className="basket-item" key={item.id}>
          <div className="size-2">{item.name}</div>
          <div className="col-2 right m-x1">
            {item.qty} x ${item.price}
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          {/* 顯示金錢 */}
          <div className="moneyBox">
            <p className="padding-b-1 size-2">
              餐點金額 : <span className="money">${porductsPrice}</span>
            </p>
            <p className="padding-b-1 size-2">
              服務費 : <span className="money">${serviceCharge}</span>
            </p>
            <p className="padding-b-1 size-2">
              總金額 : <span className="money">${totalPrice}</span>
            </p>
          </div>
          <hr />
          <div className="center">
            <button onClick={() => alert("已完成點餐並結帳")}>
              <Link to="/peopleState">已完成點餐並結帳</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
