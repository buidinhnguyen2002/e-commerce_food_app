const initialState = {
    categorys: [],
}
export default function categorysReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ALL_CATEGORYS':
            return {
                ...state,
                categorys: action.payload,
            };
        default:
            return state;
    }
}