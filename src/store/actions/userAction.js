export function loginSuccess({ id, userName, phoneNumber, avatar, cartId }) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: id,
            userName: userName,
            phoneNumber: phoneNumber,
            avatar: avatar,
            cartId: cartId,
        },
    }
}
export function loadCart({ products }) {
    return {
        type: 'LOAD_CART',
        payload: products,
    }
}
export function addToCart({ product }) {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}
export function deleteProductInCart({ id }) {
    return {
        type: 'DELETE_PRODUCT_IN_CART',
        payload: id,
    }
}