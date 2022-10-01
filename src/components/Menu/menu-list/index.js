/*
import React, { Component } from "react";
import PubSub from 'pubsub-js'
import "./style.css";
export default class MenuList extends Component {
  state={
    meals:'', // 放入所選餐點
    count:0, // 餐點數量
    isHit:false, // 是否點擊餐點
  }
  push=(event)=>{
    // 利用 setState 取得更新後的資訊
    PubSub.publish('order',
    {name:event.target.innerHTML})
      // ,()=>{console.log(this.state.meals)}
    
    
    
    // 類陣列 nodeList
    // let menuItem = document.querySelectorAll("li");
    // menuItem.forEach((item) => {
    //   item.addEventListener('click',(event)=>{
    //     if(item != event){console.log(event.target.innerHTML),  this.setState({meals:event.target.innerHTML})}
    //   },false)
    // });
    // console.log(this.state.meals)
  }
  componentDidUpdate(){
    
  }
  render() {
    

    // const menuItemArr = [...menuItem];
    // menuItemArr.map((item) => {
    //   // console.log(item.innerHTML);
    //   // item.addEventListener("click", (hit) => {
    //   //   if(item==hit){
    //   //     console.log(item.innerHTML);
    //   //   }
    //   // });
    //   if(item='美式咖啡'){
    //     console.log(item.innerHTML)
    //   }else if(item='大熱狗'){
    //     console.log(item.innerHTML)
    //   }else if(item='夏威夷披薩'){
    //     console.log(item.innerHTML)
    //   }else if(item=='巧克力聖代'){
    //     console.log(item.innerHTML)
    //   }else if(item=='龍蝦炒飯'){
    //     console.log(item.innerHTML)
    //   }else{
    //     // console.log(item.innerHTML);
    //   }
    // });
    return (
      // 左側 菜單列表
      <ul className="menu-list">
        <li className="menu-item" onClick={this.push} >
          <p>美式咖啡</p>
          <number>$45</number>
        </li>
        <li className="menu-item" onClick={this.push} >
          <p>大熱狗</p>
          <number>$65</number>
        </li>
        <li className="menu-item" onClick={this.push} >夏威夷披薩</li>
        <li className="menu-item" onClick={this.push} >巧克力聖代</li>
        <li className="menu-item" onClick={this.push} >龍蝦炒飯</li>
        <li className="menu-item" onClick={this.push} >棉花糖</li>
        <li className="menu-item" onClick={this.push} >漂浮抹茶</li>
        <li className="menu-item" onClick={this.push} >檸檬紅茶</li>
        <li className="menu-item" onClick={this.push} >紅豆小町</li>
      </ul>
    );
  }
}
*/

import React from 'react'
import Product from '../../Product';
export default function MenuList(props) {
  const {products,onAdd} = props
  return (
    <div className='menu-list'>
      {
        // 遍歷產品
        products.map((product)=>(
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))
      }
    </div>
  )
}
