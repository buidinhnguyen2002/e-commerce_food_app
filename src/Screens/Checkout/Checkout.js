import { View, Text, Image, TouchableOpacity } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import Styles from "../Restaurant/RestaurantDetail.Style";
import { ScrollView } from "react-native-gesture-handler";
import CheckoutStyles from "./Checkout.Style";
import { SafeAreaView } from "react-native";
import { Colors } from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Routers } from "../../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/actions/userAction";

const Checkout = ({ navigation, route }) => {
  const userId = useSelector((state) => state.userReducer.id);
  const [quantity, setQuantity] = useState(1);
  const products = route.params.products;
  const [deliverFee, setDeliverFee] = useState("10000");
  const [paymentMethod, setPaymentMethod] = "Payment on delivery";
  const subTotal = route.params.totalCost;
  const [restaurants, setRestaurants] = useState([]);
  const dispatch = useDispatch();
  const textDetail = route.params.textDetail;
  useEffect(() => {
    const restaurantArray = {};
    products.forEach((product) => {
      if (!restaurantArray[product.restaurant_id]) {
        restaurantArray[product.restaurant_id] = [];
      }
      restaurantArray[product.restaurant_id].push(product);
    });
    setRestaurants(Object.values(restaurantArray));
  }, []);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const DeliverTo = () => {
    navigation.navigate(Routers.LocationPicker);
  };
  const Payment = () => {
    navigation.navigate(Routers.Payment);
  };
  const cardOrder = ({ id, name, price, quantity, image }) => {
    return (
      <View key={id}>
        <View style={Styles.divider} />
        <View style={CheckoutStyles.rowContainer}>
          <Image
            style={[CommonStyles.imageCart, CheckoutStyles.imageCart]}
            source={{ uri: image }}
          ></Image>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={[TypographyStyles.nameFood]}>{name}</Text>
            <Text style={[TypographyStyles.nameFood, { color: "#1BAC4B" }]}>
              {price} VNĐ
            </Text>
          </View>
          <View
            style={[CheckoutStyles.rowContainer, CheckoutStyles.modifyQuantity]}
          >
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text
                style={[
                  CheckoutStyles.buttonQuantity,
                  CheckoutStyles.quantityStyles,
                  {
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center",
                  },
                ]}
              >
                -
              </Text>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                {quantity}
              </Text>
            </View>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text
                style={[
                  CheckoutStyles.buttonPlus,
                  CheckoutStyles.quantityStyles,
                  {
                    fontWeight: "700",
                    fontSize: 16,
                    textAlign: "center",
                  },
                ]}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const getSummaryOrderOfRestaurant = ({ productRestaurants }) => {
    return (
      <View key={productRestaurants[0].id} style={CheckoutStyles.orderSummary}>
        <Text style={[TypographyStyles.medium, { margin: 20 }, Margin.mb_10]}>
          Order Summary
        </Text>
        {productRestaurants.map((product) =>
          cardOrder({
            id: product.id,
            name: product.food_name,
            price: product.price,
            quantity: product.quantity,
            image: product.image_source,
          })
        )}
      </View>
    );
  };
  const handelPlaceOder = () => {
    restaurants.forEach((foodRestaurant) => {
      const totalAmount = foodRestaurant.reduce(
        (total, food) => total + food.price * food.quantity,
        0
      );
      placeOrder({ foods: foodRestaurant, totalAmount: totalAmount });
    });
    dispatch(clearCart());
    navigation.navigate(Routers.Main, { selectedTab: 1 });
  };
  const placeOrder = async ({ foods, totalAmount }) => {
    try {
      const response = await fetch(ApiUrlConstants.order, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: foods[0].restaurant_id,
          customer_id: userId,
          customer_address_id: 1,
          deliveryDriver_id: 1,
          delivery_fee: 10000,
          unit: "VNĐ",
          total_amount: totalAmount,
          is_paid: "Unpaid",
          driver_rating_of_customer: 5,
          restaurant_rating_of_customer: 5,
          status: "active",
          foods: foods,
        }),
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const orderObj = data["data"];
        console.log("Thanh toan thanh cong");
        console.log(foods);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingTop: 0 }}>
        <View style={{ backgroundColor: Colors.background }}>
          {/* //Deliver */}
          <View style={CheckoutStyles.deliverTo}>
            <Text
              style={[TypographyStyles.medium, Margin.ml_20, { marginTop: 20 }]}
            >
              Deliver to
            </Text>
            <View style={Styles.divider} />
            <TouchableOpacity onPress={DeliverTo}>
              <View style={CheckoutStyles.rowContainer}>
                <View style={CheckoutStyles.imageBorder}>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      Styles.icon,
                      CheckoutStyles.CheckoutICon,
                    ]}
                    source={require("../../../assets/Icons/locate.png")}
                  />
                </View>

                <View>
                  <Text
                    style={[
                      TypographyStyles.small,
                      Margin.ml_15,
                      {
                        maxWidth: 250,
                        overflow: "hidden",
                        top: 10,
                      },
                    ]}
                  >
                    {textDetail ? textDetail : "Home"}
                  </Text>

                  {!textDetail && (
                    <Text style={CheckoutStyles.defaultStyles}>Default</Text>
                  )}
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      Styles.icon,
                      CheckoutStyles.CheckoutICon,
                    ]}
                    source={require("../../../assets/Icons/greenArrow.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* //order summary */}
          {restaurants.map((restaurant) =>
            getSummaryOrderOfRestaurant({ productRestaurants: restaurant })
          )}

          <View style={CheckoutStyles.discountStyle}>
            {/* /payment */}
            <TouchableOpacity onPress={Payment}>
              <View
                style={[
                  CheckoutStyles.rowContainer,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Image
                  style={[CommonStyles.iconSize, CheckoutStyles.imageCart]}
                  source={require("../../../assets/Icons/vi.png")}
                ></Image>
                <Text style={{ marginLeft: 10 }}>Payment Methods</Text>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      Styles.icon,
                      CheckoutStyles.CheckoutICon,
                    ]}
                    source={require("../../../assets/Icons/greenArrow.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={[Styles.divider, { marginTop: 0 }]} />
            <View
              style={[
                CheckoutStyles.rowContainer,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <Image
                style={[CommonStyles.iconSize, CheckoutStyles.imageCart]}
                source={require("../../../assets/Icons/z.png")}
              ></Image>
              <Text style={{ marginLeft: 10 }}>Get Discounts</Text>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    Styles.icon,
                    CheckoutStyles.CheckoutICon,
                  ]}
                  source={require("../../../assets/Icons/greenArrow.png")}
                />
              </View>
            </View>
          </View>

          <View style={CheckoutStyles.totalStyles}>
            <View style={CheckoutStyles.rowTotal}>
              <Text>Subtotal</Text>
              <Text
                style={{
                  margin: "auto",
                  fontWeight: "500",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {subTotal} VNĐ
              </Text>
            </View>
            <View style={CheckoutStyles.rowTotal}>
              <Text>Deliver Free</Text>
              <Text style={{ fontWeight: "500" }}>{deliverFee} VNĐ</Text>
            </View>
            <View style={Styles.divider} />
            <View style={CheckoutStyles.rowTotal}>
              <Text>Total</Text>
              <Text style={{ fontWeight: "500" }}>
                {parseInt(subTotal) + parseInt(deliverFee)} VNĐ
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              CheckoutStyles.buttonProduct,
              { marginRight: 20 },
              Margin.mb_20,
            ]}
            onPress={handelPlaceOder}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#FFFFFF",
                paddingTop: 5,
              }}
            >
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Checkout;
