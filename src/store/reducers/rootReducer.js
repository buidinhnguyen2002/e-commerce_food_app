import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import restaurantsReducer from "./restaurantReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  productsReducer: productsReducer,
  restaurantsReducer: restaurantsReducer,
});
export default rootReducer;
