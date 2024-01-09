import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from '../shop/product'
import { ShopContext } from '../../context/shop-context'

export const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
        <div className='cartItems'>
          {" "}
          {PRODUCTS.map((product)=> {
            if (cartItems[product.id] !==0){
              return <CartItem data ={product} />;
            }
          }
          )
          }
        </div>
      </div>
    </div>
  )
}
