import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Product/ProductDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import Icon from "react-native-vector-icons/MaterialIcons";

const restaurantsData = [
  {
    id: 1,
    image: require("../../../assets/Images/Foods/banhmi.png"),
    name: "Tiệm nhà dâu - Tôn Đức Thắng",
    rating: "4.5 (800)",
    distance: "1.5 km",
    openingHours: "Open 8:00 - 22:00",
  },
  {
    id: 2,
    image: require("../../../assets/Images/food.png"),
    name: "Hamburger - Ăn là mê",
    rating: "4.2 (950)",
    distance: "2.0 km",
    openingHours: "Open 9:00 - 23:00",
  },
  {
    id: 3,
    image: require("../../../assets/Images/food.png"),
    name: "Restaurant 2",
    rating: "4.2 (950)",
    distance: "2.0 km",
    openingHours: "Open 9:00 - 23:00",
  },
  {
    id: 4,
    image: require("../../../assets/Images/food.png"),
    name: "Restaurant 2",
    rating: "4.2 (950)",
    distance: "2.0 km",
    openingHours: "Open 9:00 - 23:00",
  },
];

const Restaurant = () => {
  const navigation = useNavigation();
  const changePage = () => {
    navigation.navigate(Routers.ProductDetail);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 130 }}
      >
        <View>
          <TouchableOpacity onPress={changePage}>
            <View style={{ margin: 20 }}>
              <Text style={[TypographyStyles.big, { marginBottom: 10 }]}>
                Restaurant List
              </Text>
              {restaurantsData.map((restaurant) => (
                <View style={styles.restaurantContainer} key={restaurant.id}>
                  <Image
                    style={styles.restaurantImage}
                    source={restaurant.image}
                  />
                  <View style={styles.restaurantDetails}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <View style={styles.restaurantInfo}>
                      <Image
                        style={[CommonStyles.iconSizeSmall, { marginRight: 5 }]}
                        source={require("../../../assets/Images/bike.png")}
                      />
                      <Text style={styles.restaurantDistance}>
                        {restaurant.distance}
                      </Text>
                      <Text style={styles.restaurantSeparator}>|</Text>
                      <View style={styles.restaurantRatingContainer}>
                        <Icon
                          style={styles.starIcon}
                          name="star"
                          size={20}
                          color={Colors.yellow}
                        />
                        <Text style={styles.restaurantRating}>
                          {restaurant.rating}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.restaurantPriceContainer}>
                      <Text style={styles.restaurantPrice}>
                        {restaurant.openingHours}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
  },
  restaurantImage: {
    width: "50%",
    height: 160,
    borderRadius: 30,
  },
  restaurantDetails: {
    marginLeft: 20,
    alignItems: "center",
    width: "50%",
  },
  restaurantName: {
    ...TypographyStyles.medium,
    ...Margin.mb_15,
    ...Margin.mt_15,
  },
  restaurantInfo: {
    flexDirection: "row",
    alignItems: "center",
    ...Margin.mb_15,
  },
  restaurantDistance: {
    ...TypographyStyles.verySmall,
    color: Colors.grey_02,
  },
  restaurantSeparator: {
    ...TypographyStyles.verySmall,
    color: Colors.grey_02,
    ...Margin.ml_5,
    marginRight: 5,
  },
  restaurantRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    ...Margin.mr_5,
    color: Colors.yellow,
  },
  restaurantRating: {
    ...TypographyStyles.verySmall,
    color: Colors.grey_02,
  },
  restaurantPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantPrice: {
    ...TypographyStyles.small,
    color: Colors.primaryColor,
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    ...Margin.ml_10,
  },
  bikeIcon: {
    ...Margin.mr_10,
  },
  deliveryPrice: {
    ...TypographyStyles.verySmall,
    color: Colors.grey_02,
  },
});

export default Restaurant;
