const initialState = {
  customers: [],
};
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
}
