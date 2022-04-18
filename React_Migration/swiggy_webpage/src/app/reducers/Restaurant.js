import { LOADING, LOADING_SUCCESS, LOADING_FAIL } from "../actions/action_types";

const INIT_STATE = {
    isLoading: false,
    isError: null,
    restaurant_data: [],
}

const restaurantDetails = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
                isError: null
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                restaurant_data: action.payload
            }    
        case LOADING_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            }    
        default:
            return state;
    }
}

export default restaurantDetails;