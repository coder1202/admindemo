import React, { createContext, useState } from 'react'
import { parth } from '../products';
 const shopcontext = createContext(null);

const getDefaultCart=()=>{
    let cart=[];
    //i=0 0 thi start thati hot id to 0 let 
    for(let i=1;i<parth.length +1;i++)
    {
            cart[i]=0;
    }
    return cart;
}
const ShopcontextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = parth.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
    const addToCart=(itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    };
    console.log(cartItem);
    const removeToCard=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };
    const updateCartItemCount = (newAmount, itemId) => {
      setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
    };
    const checkout = () => {
      setCartItem(getDefaultCart());
    };
  

    const contextValue={cartItem,addToCart,removeToCard,updateCartItemCount,getTotalCartAmount,checkout};
  return (
<shopcontext.Provider value={contextValue}>
{props.children}
</shopcontext.Provider>
  );
}
export default ShopcontextProvider
export {shopcontext}
