import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import categorysReducer from "./categorysReducer";
import restaurantsReducer from "./restaurantReducer";
import reviewRestaurantReducer from "./reviewRestaurantReducer";
import customerReducer from "./customerReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  productsReducer: productsReducer,
  categorysReducer: categorysReducer,
  restaurantsReducer: restaurantsReducer,
  reviewRestaurantReducer: reviewRestaurantReducer,
  customerReducer: customerReducer,
});
export default rootReducer;
