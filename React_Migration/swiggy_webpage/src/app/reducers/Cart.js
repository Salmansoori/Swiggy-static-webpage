import { ADD_ITEM, REMOVE_ITEM } from "../actions/action_types";
import produce from "immer"

const initialState = {
    itemCount: new Map(),
    items: [],
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const addNewItem = addToCartHelper(action.payload, state);
            return { ...addNewItem };
        case REMOVE_ITEM:
            const removeItem = removeFromCartHelper(action.payload, state)
            return { ...removeItem };
        default: return state
    }
}

const addToCartHelper = (item, state) => {
    const newState = produce(state, draft => {
        const { items, itemCount } = draft
        if (itemCount.get(item.id)) {
            itemCount.set(item.id, itemCount.get(item.id) + 1)
            for (let i = 0; i < items.length; i++)
                if (item.id === items[i].id) {
                    items[i].quantity = items[i].quantity + 1
                }
        }
        else {
            items.push({ ...item, quantity: 1 })
            itemCount.set(item.id, 1)
        }
    })
    return newState
};

const removeFromCartHelper = (item, state) => {
    const newState = produce(state, draft => {
        const { items, itemCount } = draft
        if (itemCount.get(item.id) === 1) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items.splice(i, 1);
                }
            }
            itemCount.delete(item.id)
        }
        else {
            itemCount.set(item.id, itemCount.get(item.id) - 1)
            for (let i = 0; i < items.length; i++)
                if (item.id === items[i].id) {
                    items[i].quantity = items[i].quantity - 1
                }

        }
    })
    return newState
}

export default cart;