export function saveAllProducts({ products }) {
    return {
        type: 'SAVE_ALL_PRODUCTS',
        payload: products,
    }
}