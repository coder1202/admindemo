import React from 'react'
import { parth } from '../../products'
import Product from './Product'
import  './shop.css'


const Shop = () => {
    return (
        <div className="shop">
          <div className="shopTitle">
            <h1>PedroTech Shop</h1>
          </div>
    
          <div className="products">
            {parth.map((product10) => (
              <Product data={product10} />
            ))}
          </div>
        </div>
      );
}

export default Shop