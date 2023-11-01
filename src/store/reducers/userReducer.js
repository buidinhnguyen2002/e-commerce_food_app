const initialState = {
    isSignIn: false,
    id: null,
    userName: '',
    phoneNumber: '',
    avatar: '',
    cartId: '',
    cart: {
        cartId: '',
        products: [],
    },
}
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSignIn: true,
                id: action.payload.id,
                userName: action.payload.userName,
                phoneNumber: action.payload.phoneNumber,
                avatar: action.payload.avatar,
                cartId: action.payload.cartId,
                cart: {
                    ...state.cart,
                    cartId: action.payload.cartId,
                }
            };
        case 'LOAD_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: action.payload,
                }
            }
        case 'ADD_TO_CART':
            let init = true;
            const updateProducts = state.cart.products.map((product) => {
                console.log(product.id);
                if (product.id == action.payload.id) {
                    init = false;
                    return { ...product, quantity: product.quantity + action.payload.quantity }
                }
                return product;
            });
            if (init) updateProducts.push(action.payload);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: updateProducts,
                }
            }
        case 'DELETE_PRODUCT_IN_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: state.cart.products.filter(product => product.id !== action.payload),
                }
            }
        default:
            return state;
    }
}