export function saveAllReviewRestaurant({ reviews }) {
  return {
    type: "SAVE_ALL_REVIEW_RESTAURANT",
    payload: reviews,
  };
}
