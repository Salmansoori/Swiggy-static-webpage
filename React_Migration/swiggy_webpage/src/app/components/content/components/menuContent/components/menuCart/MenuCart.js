import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../../../../../reducers/selectors/Cart';
import Cart from './components/Cart';

function MenuCart(props) {
    //console.log(props)
    const {cart} = props
    const cartItems = cart;
    return (
        <div className="cart">
            {cartItems.length > 0 ? <Cart cartItems={cartItems} /> :
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

const mapStateToProps = state => {
    return {
        cart: selectCartItems(state),
    }
}

export default connect(mapStateToProps)(MenuCart);
