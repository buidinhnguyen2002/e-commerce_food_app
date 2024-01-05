export function saveAllCategorys({ categorys }) {
    return {
        type: 'SAVE_ALL_CATEGORYS',
        payload: categorys,
    }
}
export function setFoodByCategory({foodByCategory})  {
   return{
    type: 'SET_FOOD_BY_CATEGORY',
    payload: foodByCategory,
  }
}
export const selectCategory = (categoryId) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: categoryId,
  };
}