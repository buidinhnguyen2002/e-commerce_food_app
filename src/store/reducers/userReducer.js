const initialState = {
    isSignIn: false,
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSignIn: action.payload,
            };
        default:
            return state;
    }
}