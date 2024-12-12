const ADD_ITEM = "cart/ADD_ITEM"
const REMOVE_ITEM = "cart/REMOVE_ITEM"
const INCREASE_COUNT = "cart/INCREASE_COUNT"
const DECREASE_COUNT = "cart/DECREASE_COUNT"

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
        default:
            return state;
    }
};

export const increaseItemCount = (id) => {
    return {
        type: INCREASE_COUNT,
        id: id
    }
}

export const decreaseItemCount = (id) => {
    return {
        type: DECREASE_COUNT,
        id: id
    }
}

export const addItemToCart = (id) => {
    return {
        type: ADD_ITEM,
        id: id,
    }
}

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}

export default cartReducer;
