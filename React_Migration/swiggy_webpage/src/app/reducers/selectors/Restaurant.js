import { selectRestaurantDetails } from "./root";

export const selectLoading = state =>{
    const restaurantDetails = selectRestaurantDetails(state);
    return restaurantDetails.isLoading;
}

export const selectError = state =>{
    const restaurantDetails = selectRestaurantDetails(state);
    return restaurantDetails.isError;
}

export const selectRestaurantData = state =>{
    const restaurantDetails = selectRestaurantDetails(state);
    return restaurantDetails.restaurant_data;
}