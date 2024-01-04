const baseURL = "http://192.168.1.106:80/food_app";
export default ApiUrlConstants = {
  signIn: baseURL + "/authentication/sign-in.php",
  signUp: baseURL + "/authentication/sign-up.php",
  getAllFoods: baseURL + "/food/food.php",
  getAllCategorys: baseURL + "/category/category.php",
  cart: baseURL + "/cart/cart.php",
  order: baseURL + "/order/order.php",
  getAllRestaurants: baseURL + "/restaurant/restaurant.php",
  user: baseURL + "/users/customer.php"
};

