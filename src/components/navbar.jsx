import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
          <div className="shop-link">
            <Link to="/"> Shop </Link>
          </div>
            <div className="cart-link">
            <Link to="/cart"> <ShoppingCart size={32}/> </Link>
            </div>
        </div>
    </div>
  )
}
