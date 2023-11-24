export function saveAllReviewRestaurant({ reviews }) {
  return {
    type: "SAVE_ALL_REVIEW_RESTAURANT",
    payload: reviews,
  };
}
export function addReview({ restaurant_id, customer_id, message }) {
  return {
    type: "ADD_REVIEWS",
    payload: {
      restaurant_id: restaurant_id,
      customer_id: customer_id,
      message: message,
    },
  };
}
export function replyReview({ reply }) {
  return {
    type: "REPLY_REVIEWS",
    payload: reply,
  };
}
