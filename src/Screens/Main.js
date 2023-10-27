import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import BottomNavigation from "../Navigation/BottomNavigation";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import Home from "./Home/Home";
import Order from "./Order/Order";
import EWallet from "./E-Wallet/EWallet";
import Profile from "./Profile/Profile";
import ProductDetail from "./Product/ProductDetail";
import Checkout from "./Checkout/Checkout";
import ApiUrlConstants from "../utils/api_constants";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProducts } from "../store/actions/productsAction";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const dispath = useDispatch();
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllFoods, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Lỗi mạng');
      }
      const data = await response.json();
      if (data['status'] == 'success') {
        const productsObj = data['data'];
        // const products = [];
        // productsObj.forEach(food => {
        //   products.push(food);
        // });
        dispath(saveAllProducts({ products: productsObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getBody = () => {
    return (
      <>
        {selectedTab == 0 && <Home />}
        {selectedTab == 1 && <Order />}
        {selectedTab == 2 && <ProductDetail />}
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
