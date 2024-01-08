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
import { Provider } from 'react-redux';
import store from "../store/store";
import AvatarPicker from "./Profile/Avatar";

import LocationPicker from "./Checkout/Map";
import HomeAdmin from "./Admin/HomeAdmin";

const Main = ({ navigation, route }) => {
  const tabIndex = route.params !== undefined ? route.params.selectedTab : null;
  const [selectedTab, setSelectedTab] = useState(
    route.params !== undefined ? route.params.selectedTab : 0
  );
  useEffect(() => {
    if (tabIndex != null) setSelectedTab(tabIndex);
  }, [route]);
  const getBody = () => {
    return (
      <Provider store = {store}>
        {selectedTab == 0 && <Home />}
        {selectedTab == 1 && <Order />}
        {selectedTab == 2 && <Restaurant />}
        {selectedTab == 3 && <HomeAdmin />}
        {selectedTab == 4 && <Profile/>}
      </Provider>
    );
  };
  return (
    <View style={Styles.container}>
      {getBody()}
      <BottomNavigation
        changeBottomNavigationIndex={(index) => setSelectedTab(index)}
        currentIndex={selectedTab}
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
