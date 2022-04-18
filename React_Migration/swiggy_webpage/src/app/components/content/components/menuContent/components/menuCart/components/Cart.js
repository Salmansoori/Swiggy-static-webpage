import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import { selectCartItemCount, selectCartItems } from '../../../../../../../reducers/selectors/Cart';
import Button from '../../menuList/components/Button'

function Cart(props) {
    const {cart, itemCount} = props

    const subTotal =useCallback(() =>{
        let total = 0
        for(let i=0;i<cart.length;i++){
            total=total+cart[i].quantity*cart[i].cost
        }
        return total
    }, [cart])

    const getTotalItem = useCallback(() => {
        let totalItem = 0
        for(let i=0; i<cart.length; i++){
            totalItem = totalItem + itemCount.get(cart[i].id);
        }
        return totalItem;
    },[itemCount, cart])

    return (
        <div id="cart_div">
            <div className='cart-heading'>
                <h2>Cart</h2>
                <span className='cart-item-cnt'>{getTotalItem()} Items</span>
            </div>
            <div className='cart-item-list'>
                {cart.map((item) => (
                    <div className='cartItem' key={item.id}>
                        <div className='cart-item-name'>{item.name}</div>
                        <Button item={item} quantity={itemCount.get(item.id)}/>
                        <div className='cart-item-price'>{item.cost * item.quantity}</div>
                    </div>
                ))}
            </div>
            <div className='sub-total'>
                <h3>SubTotal</h3>
                <span>{subTotal()}</span>
            </div>
            <div>
                <button className='cart-checkout'>CHECKOUT</button>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        itemCount: selectCartItemCount(state),
        cart: selectCartItems(state),
    }
}

export default connect(mapStateToProps)(Cart);
