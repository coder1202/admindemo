import React, { useContext } from 'react'
import { parth } from '../../products'
import {shopcontext} from '../../context/Shopcontext';
import CartItem from './CartItem';
import "./cart.css"
import { Navigate } from 'react-router-dom';


const Cart = () => {
    const {cartItem,getTotalCartAmount, checkout}=useContext(shopcontext);
    const totalAmount = getTotalCartAmount();


  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>

        </div>
        <div className='cartItems'>
        <div className="cart">
        {parth.map((pa) => {
          if (cartItem[pa.id] !== 0) {
            return <CartItem data={pa} />;
          }
        
        
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => Navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              Navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
        
        </div>
    </div>
  )
}

export default Cart