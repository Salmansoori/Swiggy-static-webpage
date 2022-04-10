import { selectCartDetails } from "./root"

export const selectCartItems = state => {
    const cartDetails = selectCartDetails(state);
    return cartDetails.items;
};

export const selectCartItemCount = state => {
    const cartDetails = selectCartDetails(state);
    return cartDetails.itemCount;
};
