import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import CardProductDetail from "../../components/Cards/CardProductDetail";
import CardMenu from "../../components/Cards/CardMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/userAction";
import ApiUrlConstants from "../../utils/api_constants";
import CheckoutStyles from "../Checkout/Checkout.Style";

const ProductDetail = ({ navigation, route }) => {
  const productId = route.params.idProduct;
  const product = useSelector((state) =>
    state.productsReducer.products.find((product) => product.id == productId)
  );
  const cartId = useSelector((state) => state.userReducer.cart.cartId);
  const productsInCart = useSelector(
    (state) => state.userReducer.cart.products
  );
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [quantityText, setQuantityText] = useState("1"); // Use state for TextInput value

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setQuantityText((quantity - 1).toString());
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setQuantityText((quantity + 1).toString());
  };
  useEffect(() => {
    navigation.setOptions({
      title: product.food_name,
    });
  }, [productId]);
  const getHeaderHomeFragment = ({ name, icon, onPress }) => {
    return (
      <View style={[Styles.specialOfferHeader, Margin.mb_30]}>
        <View style={[{ flexDirection: "row" }]}>
          <Text style={[TypographyStyles.medium, Margin.mr_10]}>{name}</Text>
          {icon && (
            <Image source={require("../../../assets/Icons/emoji.png")} />
          )}
        </View>
        <Text
          onPress={onPress}
          style={[
            TypographyStyles.normal,
            { color: Colors.primaryColor, fontWeight: 600 },
          ]}
        >
          See All
        </Text>
      </View>
    );
  };
  const CheckOutScreen = () => {
    navigation.navigate(Routers.CheckOut);
  };
  const addProductToCart = async ({ quantity }) => {
    product.quantity = quantity ?? 1;
    const productInCart = productsInCart.find(
      (product) => product.id == productId
    );
    const method = productInCart ? "PUT" : "POST";
    const quantityUpdateDb =
      productInCart != null ? quantity + productInCart.quantity : quantity;

    console.log(productId, cartId);
    try {
      const response = await fetch(ApiUrlConstants.cart, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_id: productId,
          cart_id: cartId,
          quantity: quantityUpdateDb,
        }),
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        dispatch(addToCart({ product: product }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView>
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={{ uri: product.image_source }}
          />

          <View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 20,
                  marginBottom: -10,
                },
              ]}
            >
              <View
                style={{ flexDirection: "column", margin: 20, marginTop: 0 }}
              >
                <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                  {product.food_name}
                </Text>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingTop: 10,
                  }}
                >
                  Price : {product.price} VNĐ
                </Text>
                <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
                  {product.description}
                </Text>
                <Text style={{ color: Colors.red }}>Sold out</Text>
              </View>
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 20,
                      marginTop: -10,
                      marginBottom: -10,
                    },
                  ]}
                >
                  <View style={Styles.rowContainer}>
                    <Image
                      style={[
                        CommonStyles.iconSize,
                        { marginRight: 20, backgroundColor: Colors.white },
                      ]}
                      source={require("../../../assets/Icons/star.png")}
                    />
                    <Text
                      style={[TypographyStyles.medium, { marginRight: 20 }]}
                    >
                      {product.rate}
                    </Text>
                    <Text style={[TypographyStyles.small, Colors.grey]}>
                      (4.8k reviews)
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={[
                        CommonStyles.iconSize,
                        { alignItems: "flex-end", justifyContent: "flex-end" },
                      ]}
                      source={require("../../../assets/Icons/arrownext.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              <View style={Styles.divider} />
              <View
                style={{
                  shadowColor: "black",
                  shadowOffset: { width: 0.5, height: 8 },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  elevation: 10,
                  backgroundColor: "#ffffff",
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 10,
                    padding: 10,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Total: 15.000$
                  </Text>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                      },
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
                      <TextInput
                        style={[
                          {
                            fontWeight: "500",
                            fontSize: 16,
                            textAlign: "center",
                            // width: 30,
                          },
                        ]}
                        value={quantityText}
                        onChangeText={(text) => {
                          setQuantityText(text);
                          const parsedQuantity = parseInt(text, 10);
                          if (!isNaN(parsedQuantity)) {
                            setQuantity(parsedQuantity);
                          }
                        }}
                      />
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
                <View style={[Styles.rowContainer]}>
                  <TouchableOpacity
                    onPress={() => addProductToCart({ quantity: 1 })}
                    style={[Styles.buttonProduct, { marginRight: 20 }]}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#FFFFFF",
                        //   paddingTop: 5,
                      }}
                    >
                      <Image
                        style={[CommonStyles.iconSize, { padding: 10 }]}
                        source={require("../../../assets/Icons/empty-cart.png")}
                      />
                      Cart
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={CheckOutScreen}
                    style={Styles.buttonProduct}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#FFFFFF",
                        paddingTop: 5,
                      }}
                    >
                      Buy Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
