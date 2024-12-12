import { createSelector } from 'reselect';

const ADD_ITEM = "cart/ADD_ITEM"
const REMOVE_ITEM = "cart/REMOVE_ITEM"
const INCREASE_COUNT = "cart/INCREASE_COUNT"
const DECREASE_COUNT = "cart/DECREASE_COUNT"
const CLEAR_CART = "cart/CLEAR_CART"


const cartReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    count: 1
                }
            }
        }
        case REMOVE_ITEM: {
            const newState = {...state};
            delete newState[action.id];
            return newState;
        }
        case INCREASE_COUNT: {
            const newState = {...state, [action.id]: {
                ...state[action.id],
                count: state[action.id].count + 1
                }
            };
            return newState
        }
        case DECREASE_COUNT: {
            const newState = {...state, [action.id]: {
                ...state[action.id],
                count: state[action.id].count - 1
            }};
            return newState;
        }
        case CLEAR_CART: {
            return {};
        }
        default:
            return state;
    }
};

export const increaseItemCount = (id) => {
    return {
        type: INCREASE_COUNT,
        id
    }
}

export const decreaseItemCount = (id) => {
    return {
        type: DECREASE_COUNT,
        id
    }
}

export const addItemToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const clearItemsFromCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const getCartItems = createSelector(
    // Input selector: This gets the part of the state you care about
    (state) => state.cart,
    (state) => state.produce,

    // Output selector: Combines the data and returns the result
    (cart, produce) => {
        return Object.values(cart).map(item => ({
            ...item,
            ...produce[item.id]
        }));
    }
);

export default cartReducer;
