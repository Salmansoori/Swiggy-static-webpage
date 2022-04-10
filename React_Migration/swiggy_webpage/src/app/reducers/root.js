import {combineReducers} from "redux";
import cart from "./Cart"
import { enableMapSet } from 'immer'

enableMapSet()

const rootReduce = combineReducers({
    cart,
})

export default rootReduce;