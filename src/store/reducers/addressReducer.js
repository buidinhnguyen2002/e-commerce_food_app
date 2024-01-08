const initialState = {
    addresses: [],
}
export default function addressesReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ALL_ADDRESSES':
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };
        default:
            return state;
    }
}