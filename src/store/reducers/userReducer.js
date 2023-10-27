const initialState = {
    isSignIn: true,
    id: null,
    userName: '',
    phoneNumber: '',
    avatar: '',
    cartId: '',
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSignIn: true,
                id: action.payload.id,
                userName: action.payload.id.userName,
                phoneNumber: action.payload.phoneNumber,
                avatar: action.payload.avatar,
                cartId: action.payload.cartId,
            };
        default:
            return state;
    }
}