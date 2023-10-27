import { View, Text } from "react-native";
import React, { useState } from "react";
import BottomNavigation from "../Navigation/BottomNavigation";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import Home from "./Home/Home";
import Order from "./Order/Order";
import EWallet from "./E-Wallet/EWallet";
import Profile from "./Profile/Profile";
import Checkout from "./Checkout/Checkout";
import Restaurant from "./Restaurant/Restaurant";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const getBody = () => {
    return (
      <>
        {selectedTab == 0 && <Home />}
        {selectedTab == 1 && <Order />}
        {selectedTab == 2 && <Restaurant />}
        {selectedTab == 3 && <EWallet />}
        {selectedTab == 4 && <Profile />}
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
