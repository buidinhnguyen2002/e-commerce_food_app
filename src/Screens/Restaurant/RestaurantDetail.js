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
import { useDispatch, useSelector } from "react-redux";
import { saveAllReviewRestaurant } from "../../store/actions/reviewRestaurant";
import { useEffect } from "react";
import QRCode from "react-native-qrcode-svg";

const RestaurantDetail = ({ navigation, route }) => {
  // const navigation = useNavigation();
  const restaurantId = route.params.idRestaurant;
  const dispatch = useDispatch();
  console.log(restaurantId);
  const restaurants = useSelector((state) =>
    state.restaurantsReducer.restaurant.find(
      (restaurants) => restaurants.id == restaurantId
    )
  );
  const products = useSelector((state) => state.productsReducer.products);
  const productInRestaurants = products.filter(
    (product) => product.restaurant_id === restaurantId
  );
  console.log(productInRestaurants);
  // const reviews = useSelector((state) => state.reviewRestaurantReducer.reviews);
  // console.log(reviews);
  // const reviewRes = reviews.filter(
  //   (review) => review.restaurant_id === restaurantId
  // );
  // console.log(reviewRes);
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: restaurant.name,
  //   });
  // }, [restaurantId]);
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
  const OverViewScreen = ({ idRestaurant }) => {
    navigation.navigate(Routers.OverView, { idRestaurant: idRestaurant });
  };
  const RatingAndReview = ({ idRestaurant }) => {
    navigation.navigate(Routers.RatingAndReview, {
      idRestaurant: idRestaurant,
    });
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
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={{ uri: restaurants.image }}
          />

          <View>
            <TouchableOpacity
              key={restaurants.id}
              onPress={() => OverViewScreen({ idRestaurant: restaurants.id })}
            >
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
                  <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                    {restaurants.name}
                  </Text>
                </View>
                <View>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      { marginLeft: 70, marginTop: 30 },
                    ]}
                    source={require("../../../assets/Icons/arrownext.png")}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity
                key={restaurants.id}
                onPress={() =>
                  RatingAndReview({ idRestaurant: restaurants.id })
                }
              >
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
                      style={[CommonStyles.iconSize, { marginRight: 20 }]}
                      source={require("../../../assets/Icons/star.png")}
                    />
                    <Text
                      style={[TypographyStyles.medium, { marginRight: 20 }]}
                    >
                      {restaurants.rate}
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
                    style={[CommonStyles.iconSize, { marginRight: 20 }]}
                    source={require("../../../assets/Icons/locate.png")}
                  />
                  <Text style={TypographyStyles.medium}>2.4 km</Text>
                </View>
                <View>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      {
                        alignItems: "baseline",
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                      },
                    ]}
                    source={require("../../../assets/Icons/arrownext.png")}
                  />
                </View>
              </View>
              <View style={Styles.rowContainer}>
                <Text
                  style={[
                    Margin.mR_20,
                    { marginLeft: 50 },
                    TypographyStyles.small,
                    Colors.blackGrey,
                  ]}
                >
                  Delivery now
                </Text>
                <Text style={Margin.ml_20}>|</Text>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    { marginLeft: 20, marginRight: 20 },
                  ]}
                  source={require("../../../assets/Icons/bike.png")}
                />
                <Text style={[TypographyStyles.small, Colors.blackGrey]}>
                  $2.00
                </Text>
              </View>

              <View style={Styles.divider} />
              <TouchableOpacity onPress={OffersAreAvailable}>
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
                      style={[CommonStyles.iconSize, { marginRight: 20 }]}
                      source={require("../../../assets/Icons/z.png")}
                    />
                    <Text style={TypographyStyles.medium}>
                      Offers are available
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={[
                        CommonStyles.iconSize,
                        {
                          alignItems: "baseline",
                          justifyContent: "flex-end",
                          marginLeft: "auto",
                        },
                      ]}
                      source={require("../../../assets/Icons/arrownext.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
            </View>
          </View>
          <View>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              For you
            </Text>
            <View style={[CommonStyles.horizontal_direction]}>
              {productInRestaurants.map((item) => (
                <CardProductDetail
                  image={item.image_source}
                  name={item.food_name}
                  price={item.price}
                  idProduct={item.id}
                  key={item.id}
                />
              ))}
            </View>
          </View>
          <View>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              Menu
            </Text>
            {productInRestaurants.map((item) => (
              <CardMenu
                image={item.image_source}
                name={item.food_name}
                price={item.price}
                idProduct={item.id}
                key={item.id}
              />
            ))}
            <View style={[Styles.rowContainer, { marginTop: 20 }]}>
              <TouchableOpacity
                style={[Styles.buttonProduct, { marginRight: 20 }]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetail;
