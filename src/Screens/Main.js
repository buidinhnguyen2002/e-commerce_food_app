import { View, Text } from "react-native";
import React, { useState } from "react";
import BottomNavigation from "../Navigation/BottomNavigation";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import Home from "./Home/Home";
import Order from "./Order/Order";
import EWallet from "./E-Wallet/E-Wallet";
import Profile from "./Profile/Profile";
import ProductDetail from "./Product/ProductDetail";
import Checkout from "./Checkout/Checkout";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const getBody = () => {
    return (
      <>
        {selectedTab == 0 && <Home />}
        {selectedTab == 1 && <Checkout />}
        {selectedTab == 2 && <ProductDetail />}
        {selectedTab == 3 && <Profile />}
      </>
    );
  };
  return (
    <View style={Styles.container}>
      {getBody()}
      <BottomNavigation
        changeBottomNavigationIndex={(index) => setSelectedTab(index)}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
export default Main;
