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

const Checkout = ({ navigation, route }) => {
  const [quantity, setQuantity] = useState(1);
  const products = route.params.products;
  const [deliverFee, setDeliverFee] = useState("10000");
  const subTotal = route.params.totalCost;
  console.log(products);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const DeliverTo = () => {
    navigation.navigate(Routers.DeliverTo);
  };
  const Payment = () => {
    navigation.navigate(Routers.Payment);
  };
  const cardOrder = ({ id, name, price, quantity, image }) => {
    return (<View key={id}>
      <View style={Styles.divider} />
      <View style={CheckoutStyles.rowContainer}>
        <Image
          style={[CommonStyles.imageCart, CheckoutStyles.imageCart]}
          source={{ uri: image }}
        ></Image>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={[TypographyStyles.nameFood]}>
            {name}
          </Text>
          <Text style={[TypographyStyles.nameFood, { color: "#1BAC4B" }]}>
            {price} VNĐ
          </Text>
        </View>
        <View
          style={[
            CheckoutStyles.rowContainer,
            CheckoutStyles.modifyQuantity,
          ]}
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
    </View>)
  }
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
                  <Text style={[TypographyStyles.medium, Margin.ml_15]}>
                    Home
                  </Text>
                  <Text style={CheckoutStyles.defaultStyles}>Default</Text>
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
              <Text style={CheckoutStyles.addressText}>
                Times Square NYC, Manhattan
              </Text>
            </TouchableOpacity>
          </View>
          {/* //order summary */}
          <View style={CheckoutStyles.orderSummary}>
            <Text
              style={[TypographyStyles.medium, { margin: 20 }, Margin.mb_10]}
            >
              Order Summary
            </Text>
            {products.map(product => cardOrder({ id: product.id, name: product.food_name, price: product.price, quantity: product.quantity, image: product.image_source }))}
          </View>

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
              <Text style={{ fontWeight: "500" }}>{parseInt(subTotal) + parseInt(deliverFee)} VNĐ</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[CheckoutStyles.buttonProduct, { marginRight: 20 }, Margin.mb_20]}
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
