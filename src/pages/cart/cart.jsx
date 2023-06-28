import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';

import { Navigate, useNavigate } from 'react-router-dom';


export const Cart = () => {
  const { cartItems, getTotalCartValue } = useContext(ShopContext);
  const totalValue = getTotalCartValue();

  const navigate = useNavigate();

  return <div className="cart">
    <div className="cartTitle">
      <h1> Your Cart Items </h1>
    </div>

    <div className="cartItems">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />
        }
      })}
    </div>
    
    {totalValue > 0 ? (
      <div className="checkout">
        <p> Subtotal: ${totalValue}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button> Checkout </button>
      </div>
    ) : (
      <h1> Your Cart Is Empty</h1>
    )}
  </div>

}
