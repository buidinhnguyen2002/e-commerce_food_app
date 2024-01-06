import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CommonStyles, Margin, TypographyStyles } from "../utils/StyleUtil";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { useEffect } from "react";
import { Routers } from "../utils/Constant";
import { useNavigation } from "@react-navigation/native";
import Checkout from "../Screens/Checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";

const AddressDeliver = ({ imageUrl, text, textDetail }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigation = useNavigation();
  const myCart = useSelector((state) => state.userReducer.cart.products);
  const totalCost = myCart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const handleSelectAddress = () => {
    setIsSelected(!isSelected);
    changPage();
  };
  const changPage = () => {
    navigation.navigate(Routers.CheckOut, {
      products: myCart,
      totalCost: totalCost,
      textDetail: textDetail,
    });
  };
  return (
    <View style={[Styles.specialOfferBanner]}>
      <View
        style={[
          {
            backgroundColor: Colors.lightGrey,
            width: 40,
            height: 40,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Image
          style={[CommonStyles.iconSize, { alignItems: "center" }]}
          source={imageUrl}
        />
      </View>
      <View style={[{ alignItems: "center", justifyContent: "space-between" }]}>
        <Text style={[{ color: "grey",width:300 }]}>{textDetail}</Text>
      </View>
      <TouchableOpacity
        style={[
          {
            width: 30,
            height: 30,
            borderRadius: 30,
            borderColor: Colors.primaryColor,
            borderWidth: 2,
            marginRight: 10,
          },
          isSelected && { backgroundColor: Colors.primaryColor },
        ]}
        onPress={handleSelectAddress}
      ></TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  specialOfferBanner: {
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default AddressDeliver;
