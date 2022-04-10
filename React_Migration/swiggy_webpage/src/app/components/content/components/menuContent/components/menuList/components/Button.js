import React from 'react';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../../../../../../../actions';

function MinusPlusQuant(props) {    

    const {item, quantity,  addToCart, removeFromCart} = props

    return (
        <div className="addBClass">
            <span className="addBSpan" id="minusDiv" onClick={(e)=>removeFromCart(item)}>--</span>
            <span className="addBcnt">{quantity}</span>
            <span className="addBSpan" id="plusDiv" onClick={()=>addToCart(item)}>+</span>
        </div>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }
}
export default connect(null, mapDispatchToProps)(MinusPlusQuant);