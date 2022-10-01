import React from 'react'

export default function Product(props) {
    const {product,onAdd}=props
  return (
    <div className='flex menu-item' onClick={()=>{onAdd(product)}}>
      <h3 className='productName'>{product.name}</h3>
      <div>${product.price}</div >
    </div>
  )
}
