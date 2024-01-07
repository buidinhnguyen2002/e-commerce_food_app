
const initialState = {
};
const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADDRES_DETAILS':
      console.log('Data reducer', action);
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
  
};
  export default orderDetailsReducer;