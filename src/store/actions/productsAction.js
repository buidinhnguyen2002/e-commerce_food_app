export function saveAllProducts({ products }) {
    return {
        type: 'SAVE_ALL_PRODUCTS',
        payload: products,
    }
}
export function addFood({ id,restaurant_id, category_id,food_name, description,price,unit,image_source ,quantity_init}) {
    return {
      type: "ADD_FOOD",
      payload: {
        id:id,
        restaurant_id: restaurant_id,
        category_id:category_id,
        food_name: food_name,
        description: description,
        price:price,
        unit:unit,
        image_source:image_source,
        quantity_init:quantity_init,
      },
    };
  }
  export function updateFood({ restaurant_id, food_name, description,price,unit,image_source ,quantity_init}) {
    return {
      type: "UPDATE_FOOD",
      payload: {
        restaurant_id: restaurant_id,
        food_name: food_name,
        description: description,
        price:price,
        unit:unit,
        image_source:image_source,
        quantity_init:quantity_init,
      },
    };
  }
  export function deleteProduct({ id }) {
    return {
      type: "DELETE_PRODUCT",
      payload: id,
    };
  }