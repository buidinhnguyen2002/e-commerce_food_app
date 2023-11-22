const initialState = {
    categorys: [],
    foodByCategory: [],
    selectedCategoryId:null,
}
export default function categorysReducer(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ALL_CATEGORYS':
            return {
                ...state,
                categorys: action.payload,
            };
        case 'SET_FOOD_BY_CATEGORY':
            return {
                ...state,
                foodByCategory: action.payload,
            };
        case 'SELECT_CATEGORY':
            return {
                ...state,
                selectedCategoryId: action.payload,
            };
        default:
            return state;
    }
}

