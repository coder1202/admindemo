import React, { useContext } from 'react'
import  './shop.css'
import {shopcontext} from '../../context/Shopcontext';


const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {addToCart,cartItem}=useContext(shopcontext);
    const cartItemAmount =cartItem[id];
    return (
        <>
      
      <div className="product">
      <img alt='' src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn"onClick={() => addToCart(id)} >

       Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</> }
       </button>
            </div>

        </>
    )
}

export default Product
