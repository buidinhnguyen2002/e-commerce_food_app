import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import Icon from "react-native-vector-icons/MaterialIcons";
import restaurantsReducer from "../../store/reducers/restaurantReducer";
import { useSelector } from "react-redux";

const Restaurant = () => {
  const restaurants = useSelector(
    (state) => state.restaurantsReducer.restaurant
  );
  const navigation = useNavigation();
  const changePage = ({ idRestaurant }) => {
    navigation.navigate(Routers.RestaurantDetail, {
      idRestaurant: idRestaurant,
    });
    // console.log(id);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 100 }}
      >
        <View>
          <View style={{ margin: 20 }}>
            <View
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 20,
                },
              ]}
            >
              <Image
                style={[
                  { width: 35, height: 35, resizeMode: "contain" },
                  Margin.mr_25,
                ]}
                source={require("../../../assets/Icons/logo.png")}
              ></Image>
              <Text style={[{ marginRight: "auto" }, TypographyStyles.big]}>
                Restaurant
              </Text>
              <Image
                style={[CommonStyles.iconSize, Margin.mr_25]}
                source={require("../../../assets/Icons/search.png")}
              ></Image>
              <Image
                style={CommonStyles.iconSize}
                source={require("../../../assets/Icons/3cham.png")}
              ></Image>
            </View>
            {restaurants.map((restaurant) => (
              <TouchableOpacity
                key={restaurant.id}
                onPress={() => changePage({ idRestaurant: restaurant.id })}
              >
                <View style={styles.restaurantContainer} key={restaurant.id}>
                  <Image
                    style={styles.restaurantImage}
                    source={{ uri: restaurant.image }}
                  />
                  <View style={styles.restaurantDetails}>
                    <Text style={styles.restaurantName}>{restaurant.name}</Text>
                    <View style={styles.restaurantInfo}>
                      <Image
                        style={[CommonStyles.iconSizeSmall, { marginRight: 5 }]}
                        source={require("../../../assets/Images/bike.png")}
                      />
                      <Text style={styles.restaurantDistance}>
                        {/* {restaurant.distance} */}
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
                          {restaurant.rate}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.restaurantPriceContainer}>
                      <Text style={styles.restaurantPrice}>
                        {restaurant.join_day}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
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
    marginTop: 10,
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
