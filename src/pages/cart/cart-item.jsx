import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

export const CartItem = (props) => {
  const {id, productName, price, productImage } = props.data;
  const {cartItems, addToCart, removeToCart} = useContext(ShopContext);
  
  return (
    <div className='cartItem'>
      {""}
      <img src={productImage} />
      <div className='description'>
        <p>
          <b> {productName} </b>
        </p>
        <p> ${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeToCart(id)}> - </button>
          <input value={cartItems[id]} onChange={() => } />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
