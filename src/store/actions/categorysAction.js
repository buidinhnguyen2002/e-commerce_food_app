export function saveAllCategorys({ categorys }) {
    return {
        type: 'SAVE_ALL_CATEGORYS',
        payload: categorys,
    }
}