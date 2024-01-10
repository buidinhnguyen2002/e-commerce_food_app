const initialState = {
  products: [],
};
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_FOOD":
      const newFood = {
        restaurant_id: action.payload.restaurant_id,
        category_id:action.payload.category_id,
        food_name: action.payload.food_name,
        description: action.payload.description,
        price: action.payload.price,
        unit: action.payload.unit,
        image_source: action.payload.image_source,
        quantity_init: action.payload.quantity_init,
      };

      return {
        ...state,
        products: [...state.products, newFood],
      };
    case "UPDATE_FOOD":
      const updateFood = {
        restaurant_id: action.payload.restaurant_id,
        food_name: action.payload.food_name,
        description: action.payload.description,
        price: action.payload.price,
        unit: action.payload.unit,
        image_source: action.payload.image_source,
        quantity_init: action.payload.quantity_init,
      };

      return {
        ...state,
        products: [...state.products, updateFood],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
