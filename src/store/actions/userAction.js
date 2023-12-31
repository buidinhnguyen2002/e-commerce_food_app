export function loginSuccess({ id, userName, phoneNumber,dob, gender, avatar, cartId, role, isActive }) {
  return {
    type: "LOGIN_SUCCESS",
    payload: {
      id: id,
      userName: userName,
      phoneNumber: phoneNumber,
      dob: dob,
      gender:gender,
      avatar: avatar,
      cartId: cartId,
      role: role,
      isActive: isActive,
    },
  };
}
export function loadCart({ products }) {
  return {
    type: "LOAD_CART",
    payload: products,
  };
}
export function addToCart({ product }) {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}
export function deleteProductInCart({ id }) {
  return {
    type: "DELETE_PRODUCT_IN_CART",
    payload: id,
  };
}
export function loadOrder({ orders }) {
  return {
    type: "LOAD_ORDER",
    payload: orders,
  };
}
export function updateStatusOrder({ id, status }) {
  return {
    type: "UPDATE_STATUS_ORDER",
    payload: {
      id: id,
      status: status,
    },
  };
}
export function clearCart() {
  return {
    type: "CLEAR_CART",
    payload: "",
  };
}
export function saveAllCustomer({ customers }) {
  return {
    type: "SAVE_ALL_CUSTOMERS",
    payload: customers,
  };
}

export function updateProfile() {
    return {
        type: 'UPDATE_PROFILE',
        payload
    }
}
export function logout(){
    return {
        type: 'LOGOUT',
    }
}