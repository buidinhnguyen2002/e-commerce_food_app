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