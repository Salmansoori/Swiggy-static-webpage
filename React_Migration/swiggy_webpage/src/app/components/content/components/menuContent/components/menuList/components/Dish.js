import React, { useState, useContext } from 'react'
import MinusPlusQuant from './MinusPlusQuant';
import cartItemsContext from '../../../../../../../context/CartItemsContext';

export default function Dish(props) {

    const {item} = props
    const {cart, setCart, itemCount, setItemCount, addToCart, removeFromCart} = useContext(cartItemsContext)

    return (
        <div className="dish" id={item.id}>
            <div className="item">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.cost}</div>
                <div className="item-desc"> {item.desc}</div>
            </div>
            <div className="item-pic">
                <div>
                    <img src={item.img}
                        width="140" />
                </div>
                <div className="item-add">
                    {itemCount.get(item.id) ? <MinusPlusQuant item={item} />: <button onClick={()=>addToCart(item)}>Add</button>
                    }
                </div>
            </div>
        </div>
    )
}
