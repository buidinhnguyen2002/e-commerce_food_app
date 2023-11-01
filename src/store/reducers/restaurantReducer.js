const initialState = {
  restaurant: [],
};
export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_RESTAURANT":
      return {
        ...state,
        restaurant: action.payload,
      };
    default:
      return state;
  }
}
