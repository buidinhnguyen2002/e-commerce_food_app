const initialState = {
  reviews: [],
};
export default function reviewRestaurantReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_REVIEW_RESTAURANT":
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
}
