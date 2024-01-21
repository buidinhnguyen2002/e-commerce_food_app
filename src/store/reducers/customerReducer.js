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
      case 'UPDATE_CUSTOMER_STATUS':
      const updatedCustomers = state.customers.map(customer => {
        if (customer.id === action.payload.customerId) {
          return {
            ...customer,
            isActive: action.payload.isActive,
          };
        }
        console.log(customer.id, customer.isActive);
        return customer;
      });

      return {
        ...state,
        customers: updatedCustomers,
      };
    default:
      return state;
  }
}
