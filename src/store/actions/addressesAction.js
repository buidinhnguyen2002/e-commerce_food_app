export function saveAllAddresses({ addresses }) {
    return {
        type: 'SAVE_ALL_ADDRESSES',
        payload: addresses,
    }
}