import React from 'react';
import { useState, useContext } from 'react';
import cartItemsContext from '../../../../../../context/CartItemsContext';
import Cart from './components/Cart';

export default function MenuCart(props) {
    //console.log(props)
    const {cart, setCart} = useContext(cartItemsContext);
    const cartItems = cart;
    return (
        <div className="cart">
            {cartItems.length > 0 ? <Cart cartItems={cartItems}  addToCart={props.addToCart} removeFromCart={props.removeFromCart} /> :
                <div id="cart_div">
                    <div className="cart-head">
                        <h1>Cart Empty</h1>
                    </div>
                    <div className="cart-img">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                            width="280px" />
                    </div>
                    <div className="cart-desc">
                        <p>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
                    </div>
                </div>
            }
        </div>
    )
}
