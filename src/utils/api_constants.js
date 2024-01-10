const baseURL = "http://192.168.1.5:80/food_app/";
export default ApiUrlConstants = {
  signIn: baseURL + "/authentication/sign-in.php",
  signUp: baseURL + "/authentication/sign-up.php",
  getAllFoods: baseURL + "/food/food.php",
  getAllCategorys: baseURL + "/category/category.php",
  cart: baseURL + "/cart/cart.php",
  order: baseURL + "/order/order.php",
  getAllRestaurants: baseURL + "/restaurant/restaurant.php",
  getReviewRestaurant: baseURL + "/review/restaurant_review.php",
  getAllCustomers: baseURL + "/users/customer.php",
  getAllRepLy: baseURL + "/review/reply_review.php",
  getFoodOfCategory: baseURL + "/category/category_of_food.php",
  getAllAddresses: baseURL + "/users/address_customer.php",
};

