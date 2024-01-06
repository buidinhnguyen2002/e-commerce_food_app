const initialState = {
  reviews: [],
  reply: [],
};
export default function reviewRestaurantReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_REVIEW_RESTAURANT":
      return {
        ...state,
        reviews: action.payload,
      };
    case "ADD_REVIEWS":
      const newReview = {
        restaurant_id: action.payload.restaurant_id,
        customer_id: action.payload.customer_id,
        message: action.payload.message,
      };

      return {
        ...state,
        reviews: [...state.reviews, newReview],
      };
    case "REPLY_REVIEWS":
      return {
        ...state,
        reply: action.payload,
      };

    default:
      return state;
  }
}
