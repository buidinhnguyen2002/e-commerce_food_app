const initialState = {
  customers: [],
};
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_ALL_CUSTOMERS':
      console.log("SET_CUSTOMER_DETAILS :", action.payload);
      return {
        ...state,
        customers: action.payload,
      };
      case 'SET_ADDRESS_DETAILS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}