const ADD_ITEM = "cart/ADD_ITEM"

const cartReducer = (state={}, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const newState = {
                ...state,
                [action.id]: {
                    id: action.id,
                    count: 1
                }
            };
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

export default cartReducer;
