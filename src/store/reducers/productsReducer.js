const initialState = {
    products: [],
}
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}