const baseURL = "http://192.168.1.39:80/food_app";
export default ApiUrlConstants = {
  signIn: baseURL + "/authentication/sign-in.php",
  signUp: baseURL + "/authentication/sign-up.php",
  getAllFoods: baseURL + "/food/food.php",
  cart: baseURL + "/cart/cart.php",
};
