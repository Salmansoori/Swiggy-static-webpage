import React, { useContext, useCallback } from 'react'
import cartItemsContext from '../../../../../../../context/CartItemsContext'
import MinusPlusQuant from '../../menuList/components/MinusPlusQuant'

export default function Cart(props) {
    const {cart,setCart,itemCount, setItemCount, addToCart, removeFromCart} = useContext(cartItemsContext);
    const cartItems = cart;

    const subTotal =useCallback((cartItems) =>{
        let total = 0
        for(let i=0;i<cartItems.length;i++){
            total=total+cartItems[i].quantity*cartItems[i].cost
        }
        return total
    }, [cart])

    const getTotalItem = useCallback((cartItems) => {
        let totalItem = 0
        for(let i=0; i<cartItems.length; i++){
            totalItem = totalItem + itemCount.get(cartItems[i].id);
        }
        return totalItem;
    },[cart])

    return (
        <div id="cart_div">
            <div className='cart-heading'>
                <h2>Cart</h2>
                <span className='cart-item-cnt'>{getTotalItem(cartItems)} Items</span>
            </div>
            <div className='cart-item-list'>
                {cartItems.map((item) => (
                    <div className='cartItem' key={item.id}>
                        <div className='cart-item-name'>{item.name}</div>
                        <MinusPlusQuant item={item} />
                        <div className='cart-item-price'>{item.cost * item.quantity}</div>
                    </div>
                ))}
            </div>
            <div className='sub-total'>
                <h3>SubTotal</h3>
                <span>{subTotal(cartItems)}</span>
            </div>
            <div>
                <button className='cart-checkout'>CHECKOUT</button>
            </div>
        </div>
    )
}
