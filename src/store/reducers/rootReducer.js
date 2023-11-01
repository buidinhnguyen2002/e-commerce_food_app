import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    productsReducer: productsReducer,
})
export default rootReducer;