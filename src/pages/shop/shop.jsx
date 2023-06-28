import React from 'react';
import './shop.css'
import { PRODUCTS } from '../../products';
import { Product } from './product';

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>E-Shop.com</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => ( 
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}
