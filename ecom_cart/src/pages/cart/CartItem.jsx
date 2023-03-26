import React, { useContext } from 'react'
import {shopcontext} from '../../context/Shopcontext';
import './cart.css'


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItem, addToCart, removeToCard,updateCartItemCount } =
      useContext(shopcontext);
  return (
    <div className='cartItem'>
       <div className="cartItem">
      <img alt='' src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeToCard(id)}> - </button>
          <input
            value={cartItem[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem
