import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import categorysReducer from "./categorysReducer";
import restaurantsReducer from "./restaurantReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  productsReducer: productsReducer,
  categorysReducer: categorysReducer,
  restaurantsReducer: restaurantsReducer,
});
export default rootReducer;
