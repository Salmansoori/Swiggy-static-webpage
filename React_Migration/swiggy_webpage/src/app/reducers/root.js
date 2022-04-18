import {combineReducers} from "redux";
import cart from "./Cart"
import veg from "./OnlyVeg";
import restaurantDetails from "./Restaurant";
import { enableMapSet } from 'immer'

enableMapSet()

const rootReduce = combineReducers({
    cart,
    veg,
    restaurantDetails,
})

export default rootReduce;