import {useState} from "react";
import MenuList from "./menu-list";
import Basket from "./Basket";
import data from "../../data/data";

/*
export default class Menu extends Component {
  componentDidMount(){
    console.log('已進入點餐畫面');
  }
  render() {
    const {products}=data;
    // 設定CartItem 初始值 Hook useState
    const [myItems,setMyItems] = useState([]);
    // 將商品加入購物車
    const onAdd = (product)=>{
      const exist = cartItems.find( (x) => (x.id === product.id));
      if(exist){
        setCartItems(cartItems.map( (x) =>
          (x.id === product.id ? {...exist,qty:exist.qty+1} : x)
        ))
      }else{
        setCartItems([...cartItems,{ ...product,qty:1}])
      }
    }
    return (
      <div className="menu">
        <MenuList products={products}/>
        <MyMeals />
      </div>
    );
  }
}
*/

export default function Menu() {
  // 從 data 取得 product
  const {products} = data
  // 設定CartItem 初始值 Hook useState
  const [cartItems,setCartItems] = useState([]);
  // 將商品加入購物車
  const onAdd = (product)=>{
    const exist = cartItems.find( (x) => (x.id === product.id));
    if(exist){
      setCartItems(cartItems.map( (x) =>
        (x.id === product.id ? {...exist,qty:exist.qty+1} : x)
      ))
    }else{
      setCartItems([...cartItems,{ ...product,qty:1}])
    }
  }
  // 將商品從購物車移除
  const onRemove = (product)=>{
    const exist = cartItems.find((x)=> ( x.id === product.id ));
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x)=> (x.id !== product.id)))
    }else{
      setCartItems(
        cartItems.map((x)=>(
          x.id === product.id ? {...exist,qty:exist.qty-1} : x
        ))
      )
    }
  }
  return (
    <div className="flex">
    <MenuList products={products} onAdd={onAdd}/>
    <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
  </div>
  )
}
