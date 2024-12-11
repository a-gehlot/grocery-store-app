import { configureStore } from "@reduxjs/toolkit";
import produceReducer from "./produce"
import cartReducer from "./cart";


let middleware = [];

if (process.env.NODE_ENV !== "production") {
    const logger = require("redux-logger").default;
    middleware.push(logger);
}

const store = configureStore({
    reducer: { produce: produceReducer, cart: cartReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== "production",
});


export default store;
