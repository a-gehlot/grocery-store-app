import { configureStore } from "@reduxjs/toolkit";
import produceReducer from "./produce"


let middleware = [];

if (process.env.NODE_ENV !== "production") {
    const logger = require("redux-logger").default;
    middleware.push(logger);
}

const store = configureStore({
    reducer: { produce: produceReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: process.env.NODE_ENV !== "production",
});


export default store;
