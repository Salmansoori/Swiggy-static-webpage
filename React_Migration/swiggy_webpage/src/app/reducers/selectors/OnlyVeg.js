import { selectOnlyVegDetails } from "./root";

export const selectOnlyVeg = state => {
    const onlyVeg = selectOnlyVegDetails(state);
    return onlyVeg
}