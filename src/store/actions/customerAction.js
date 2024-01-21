export const updateCustomerStatus = (customerId, isActive) => {
    return {
      type: 'UPDATE_CUSTOMER_STATUS',
      payload: {
        customerId,
        isActive,
      },
    };
  };