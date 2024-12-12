import produceData from "../mockData/produce.json"
import { createSelector } from "@reduxjs/toolkit"

const POPULATE = "produce/POPULATE"
const TOGGLE_LIKE_ITEM = "produce/TOGGLE_LIKE_ITEM"

const produceReducer = (state={}, action) => {
    switch(action.type) {
        case POPULATE: {
            const newState = {};
            action.produce.forEach((produce) => {
                newState[produce.id] = produce;
            })
            return newState;
        }
        case TOGGLE_LIKE_ITEM: {
            const newState = {...state};
            newState[action.id] = {
                ...state[action.id],
                liked: !state[action.id].liked
            }
            return newState;
        }
        default:
            return state;
    }
}

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const toggleLikeItem = (id) => {
    return {
        type: TOGGLE_LIKE_ITEM,
        id
    }
}

// Memoized selector to get all produce items from state
export const getAllProduce = createSelector(
    // Input selector: This gets the part of the state you care about
    (state) => state.produce,

    // Output selector: Returns the values of the produce object
    (produce) => Object.values(produce)
);


export default produceReducer;
