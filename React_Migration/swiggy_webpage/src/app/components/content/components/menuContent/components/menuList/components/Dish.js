import React from 'react'
import Button from './Button';
import { addToCart, removeFromCart } from '../../../../../../../actions';
import { connect } from "react-redux"
import { selectCartItemCount} from '../../../../../../../reducers/selectors/Cart';

function Dish(props) {
    const {item, itemCount, addToCart} = props
    const itemQuantity = itemCount.get(item.id);
    
    return (
        <div className="dish" id={item.id}>
            <div className="item">
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.cost}</div>
                <div className="item-desc"> {item.desc}</div>
            </div>
            <div className="item-pic">
                <div>
                    <img src={item.img} alt='item'
                        width="140" />
                </div>
                <div className="item-add">
                    {itemQuantity > 0 ? <Button item={item} quantity={itemQuantity}/>: <button onClick={()=>addToCart(item)}>Add</button>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        itemCount: selectCartItemCount(state),
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addToCart: (item) => dispatch(addToCart(item)),
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dish);