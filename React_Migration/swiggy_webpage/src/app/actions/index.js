import { ADD_ITEM, LOADING, LOADING_FAIL, LOADING_SUCCESS, REMOVE_ITEM, SET_ONLY_VEG } from "./action_types";
import axios from "axios";

export const addToCart = (item) =>{
    return {
        type: ADD_ITEM,
        payload: item
    };
};

export const removeFromCart = (item) =>{
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const updateOnlyVegPreference = (onlyVeg) =>{
    return {
        type: SET_ONLY_VEG,
        payload: {
            onlyVeg,
        }    
    }
}

export const fetchRestaurantDataStated = () =>{
    return{
        type: LOADING
    }
}

export const fetchRestaurantDataSuccess = (data) =>{
    return {
        type: LOADING_SUCCESS,
        payload: data
    }
}

export const fetchRestaurantDataFailure = (error) =>{
    return {
        type: LOADING_FAIL,
        payload: error
    }
}

export const fetchRestaurantData = () => {
    return (dispatch)=>{
        dispatch(fetchRestaurantDataStated());
        axios.get("restaurant_data.json")
        .then(res => {
            const restaurant_data = res.data;
            dispatch(fetchRestaurantDataSuccess(restaurant_data))
        })
        .catch( error => {
            dispatch(fetchRestaurantDataFailure(error.message));
        })
    }
}

