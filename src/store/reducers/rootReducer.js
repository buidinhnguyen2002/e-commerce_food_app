import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import categorysReducer from "./categorysReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    productsReducer: productsReducer,
    categorysReducer: categorysReducer
})
export default rootReducer;