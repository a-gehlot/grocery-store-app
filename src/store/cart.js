const ADD_ITEM = "cart/ADD_ITEM"
const REMOVE_ITEM = "cart/REMOVE_ITEM"

const cartReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    count: 1
                }
            };
        case REMOVE_ITEM:
            const newState = {...state};
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

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
