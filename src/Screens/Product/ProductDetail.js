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
import CheckoutStyles from "../Checkout/Checkout.Style";

const ProductDetail = () => {
  const navigation = useNavigation();
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
  const redirectSpecialOffers = () => {
    navigation.navigate(Routers.SpecialOffers);
  };
  const OverViewScreen = () => {
    navigation.navigate(Routers.OverView);
  };
  const RatingAndReview = () => {
    navigation.navigate(Routers.RatingAndReview);
  };
  const OffersAreAvailable = () => {
    navigation.navigate(Routers.OffersAreAvailable);
  };
  const CheckOutScreen = () => {
    navigation.navigate(Routers.CheckOut);
  };
  const [clickedMenuItems, setClickedMenuItems] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView contentContainerStyle={{}}>
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={require("../../../assets/Images/Foods/banhmi.png")}
          />

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
                style={{
                  flexDirection: "column",
                  margin: 20,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                  Big Garden Salad
                </Text>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 20,
                    fontWeight: "bold",

                    paddingTop: 10,
                  }}
                >
                  Price : 50.000 $
                </Text>

                <Text style={{ paddingTop: 10 }}>
                  Bún bò Huế là một món ăn truyền thống của Việt Nam. Với sự kết
                  hợp giữa sợi mì dai dai, lát thịt bò thơm ngon.
                </Text>
                <Text style={{ paddingTop: 10, color: Colors.red }}>
                  Sold out
                </Text>
              </View>
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity onPress={RatingAndReview}>
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
                    style={[
                      Styles.rowContainer,
                      { marginBottom: -5, marginTop: -5 },
                    ]}
                  >
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
                      4.8
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
              <View style={{}}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 10,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.primaryColor,
                      fontSize: 20,
                      fontWeight: "bold",
                      padding: 10,
                    }}
                  >
                    Total: 50.000 $
                  </Text>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                        padding: 10,
                        // marginBottom: 10,
                        // marginLeft: 10,
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
                        source={require("../../../assets/Icons/empty-cart2.png")}
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
