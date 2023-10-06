import { View, Text, Image, TouchableOpacity } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import Styles from "../Product/ProductDetail.Style";
import { ScrollView } from "react-native-gesture-handler";
import CheckoutStyles from "./Checkout.Style";
import { SafeAreaView } from "react-native";
import { Colors } from "../../utils/Colors";
import { useState } from "react";
const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 130 }}
      >
        <View style={{ backgroundColor: Colors.background }}>
          {/* //Deliver */}
          <TouchableOpacity style={[CheckoutStyles.titleBack]}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon, Colors.white]}
              source={require("../../../assets/Icons/arrowBack.png")}
            />
            <Text style={[TypographyStyles.big, { marginLeft: 10 }]}>
              Checkout Orders
            </Text>
          </TouchableOpacity>
          <View style={CheckoutStyles.deliverTo}>
            <Text
              style={[TypographyStyles.medium, Margin.ml_20, { marginTop: 20 }]}
            >
              Deliver to
            </Text>
            <View style={Styles.divider} />
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
              <Image
                style={[
                  CommonStyles.iconSize,
                  Styles.icon,
                  CheckoutStyles.CheckoutICon,
                  { marginLeft: 200 },
                ]}
                source={require("../../../assets/Icons/greenArrow.png")}
              />
            </View>
            <Text style={CheckoutStyles.addressText}>
              Times Square NYC, Manhattan
            </Text>
          </View>
          {/* //order summary */}
          <View style={CheckoutStyles.orderSummary}>
            <Text
              style={[TypographyStyles.medium, { margin: 20 }, Margin.mb_10]}
            >
              Order Summary
            </Text>
            <View style={Styles.divider} />
            <View style={CheckoutStyles.rowContainer}>
              <Image
                style={[CommonStyles.imageCart, CheckoutStyles.imageCart]}
                source={require("../../../assets/Images/Foods/miquang.png")}
              ></Image>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text style={[TypographyStyles.nameFood]}>
                  Mì quảng Hà Nội kkkkk
                </Text>
                <Text style={[TypographyStyles.nameFood, { color: "#1BAC4B" }]}>
                  $12.00
                </Text>
              </View>
              <View
                style={[
                  CheckoutStyles.rowContainer,
                  CheckoutStyles.modifyQuantity,
                ]}
              >
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={CheckoutStyles.buttonQuantity}>-</Text>
                </TouchableOpacity>
                <View style={CheckoutStyles.quantityStyles}>
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
                  <Text style={CheckoutStyles.buttonPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.divider} />
            <View style={CheckoutStyles.rowContainer}>
              <Image
                style={[CommonStyles.imageCart, CheckoutStyles.imageCart]}
                source={require("../../../assets/Images/Foods/miquang.png")}
              ></Image>
              <View style={{ marginLeft: 20 }}>
                <Text style={TypographyStyles.nameFood}>Mì quảng Hà Nội</Text>
                <Text style={[TypographyStyles.nameFood, { color: "#1BAC4B" }]}>
                  $12.00
                </Text>
              </View>
              <View
                style={[
                  CheckoutStyles.rowContainer,
                  CheckoutStyles.modifyQuantity,
                ]}
              >
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={CheckoutStyles.buttonQuantity}>-</Text>
                </TouchableOpacity>
                <View style={CheckoutStyles.quantityStyles}>
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
                  <Text style={CheckoutStyles.buttonPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.divider} />
            <View style={CheckoutStyles.rowContainer}>
              <Image
                style={[CommonStyles.imageCart, CheckoutStyles.imageCart]}
                source={require("../../../assets/Images/Foods/miquang.png")}
              ></Image>
              <View style={{ marginLeft: 20 }}>
                <Text style={TypographyStyles.nameFood}>Mì quảng Hà Nội</Text>
                <Text style={[TypographyStyles.nameFood, { color: "#1BAC4B" }]}>
                  $12.00
                </Text>
              </View>
              <View
                style={[
                  CheckoutStyles.rowContainer,
                  CheckoutStyles.modifyQuantity,
                ]}
              >
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={CheckoutStyles.buttonQuantity}>-</Text>
                </TouchableOpacity>
                <View style={CheckoutStyles.quantityStyles}>
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
                  <Text style={CheckoutStyles.buttonPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={CheckoutStyles.discountStyle}>
            <View style={[CheckoutStyles.rowContainer, { marginTop: 10 }]}>
              <Image
                style={[CommonStyles.iconSize, CheckoutStyles.imageCart]}
                source={require("../../../assets/Icons/vi.png")}
              ></Image>
              <Text style={{ marginLeft: 20 }}>Payment Methods</Text>
              <Image
                style={[
                  CommonStyles.iconSize,
                  CheckoutStyles.imageCart,
                  { marginLeft: 150 },
                ]}
                source={require("../../../assets/Icons/greenArrow.png")}
              ></Image>
            </View>
            <View style={[Styles.divider, { marginTop: 0 }]} />
            <View style={[CheckoutStyles.rowContainer, { marginTop: -20 }]}>
              <Image
                style={[CommonStyles.iconSize, CheckoutStyles.imageCart]}
                source={require("../../../assets/Icons/z.png")}
              ></Image>
              <Text style={{ margin: 20 }}>Get Discounts</Text>
              <Image
                style={[
                  CommonStyles.iconSize,
                  CheckoutStyles.imageCart,
                  { marginLeft: 155 },
                ]}
                source={require("../../../assets/Icons/greenArrow.png")}
              ></Image>
            </View>
          </View>

          <View style={CheckoutStyles.totalStyles}>
            <View style={CheckoutStyles.rowTotal}>
              <Text>Subtotal</Text>
              <Text style={{ marginLeft: 250, fontWeight: "500" }}>$200</Text>
            </View>
            <View style={CheckoutStyles.rowTotal}>
              <Text>Deliver Free</Text>
              <Text style={{ marginLeft: 230, fontWeight: "500" }}>$20</Text>
            </View>
            <View style={Styles.divider} />
            <View style={CheckoutStyles.rowTotal}>
              <Text>Total</Text>
              <Text style={{ marginLeft: 270, fontWeight: "500" }}>$220</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[CheckoutStyles.buttonProduct, { marginRight: 20 }]}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: "#FFFFFF",
                paddingTop: 5,
              }}
            >
              Checkout order
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Checkout;
