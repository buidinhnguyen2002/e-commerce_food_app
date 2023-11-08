export function saveAllRestaurant({ restaurant }) {
  return {
    type: "SAVE_ALL_RESTAURANT",
    payload: restaurant,
  };
}
