import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import BottomNavigation from "../Navigation/BottomNavigation";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import Home from "./Home/Home";
import Order from "./Order/Order";
import EWallet from "./E-Wallet/EWallet";
import Profile from "./Profile/Profile";
import Checkout from "./Checkout/Checkout";
import ApiUrlConstants from "../utils/api_constants";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProducts } from "../store/actions/productsAction";
import Restaurant from "./Restaurant/Restaurant";
import FAQ from "./Profile/FAQ";
import HelpCenter from "./Profile/HelpCenter";



const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const getBody = () => {
    return (
      <>
        {selectedTab == 0 && <Home />}
        {selectedTab == 1 && <Order />}
        {selectedTab == 2 && <Restaurant />}
        {selectedTab == 3 && <EWallet />}
        {selectedTab == 4 && <HelpCenter/>}
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
