import {SET_ONLY_VEG} from "../actions/action_types";

const INIT_STATE = false

const veg = (state=INIT_STATE, action)=>{
    const {type, payload} = action;
    
    switch (type) {
        case SET_ONLY_VEG:
            const { onlyVeg } = payload
            return onlyVeg;
        default:
            return state;
    }
}

export default veg;