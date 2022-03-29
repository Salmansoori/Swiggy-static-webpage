import React, { useContext } from 'react'
import cartItemsContext from '../../../../../../../context/CartItemsContext';

export default function MinusPlusQuant(props) {    

    const {item} = props
    const {cart, setCart, itemCount, setItemCount, addToCart, removeFromCart} = useContext(cartItemsContext)

    return (
        <div className="addBClass">
            <span className="addBSpan" id="minusDiv" onClick={(e)=>removeFromCart(item)}>--</span>
            <span className="addBcnt">{itemCount.get(item.id)}</span>
            <span className="addBSpan" id="plusDiv" onClick={()=>addToCart(item)}>+</span>
        </div>
    )
}