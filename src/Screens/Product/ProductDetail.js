import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
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

const ProductDetail = ({ navigation, route }) => {
  const productId = route.params.idProduct;
  const product = useSelector(state => state.productsReducer.products.find(product => product.id == productId));
  const cartId = useSelector(state => state.userReducer.cart.cartId);
  const productsInCart = useSelector(state => state.userReducer.cart.products);
  const dispatch = useDispatch();
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
    const productInCart = productsInCart.find((product) => product.id == productId);
    const method = productInCart ? "PUT" : "POST";
    const quantityUpdateDb = productInCart != null ? quantity + productInCart.quantity : quantity;
    try {
      const response = await fetch(ApiUrlConstants.cart, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          food_id: productId,
          cart_id: cartId,
          quantity: quantityUpdateDb,
        })
      });
      if (!response.ok) {
        throw new Error('Lỗi mạng');
      }
      const data = await response.json();
      if (data['status'] == 'success') {
        dispatch(addToCart({ product: product }));
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={{ uri: product.image_source }}
          />
          <View style={Styles.iconsLeft}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon, Colors.white]}
              source={require("../../../assets/Icons/arrow.png")}
            />
          </View>
          <View style={Styles.iconContainer}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/heart.png")}
            />
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/share.png")}
            />
          </View>

          <View>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 20,
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
                <Text style={{ paddingTop: 10 }}>
                  {product.description}
                </Text>
              </View>
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity >
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 20,
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
              <View style={[Styles.rowContainer, { marginTop: 20 }]}>
                <TouchableOpacity onPress={() => addProductToCart({ quantity: 1 })}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
