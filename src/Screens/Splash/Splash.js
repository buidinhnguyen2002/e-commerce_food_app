import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProducts } from '../../store/actions/productsAction';
import { getUserAddress, loadCart, loadOrder, saveUserAddress } from '../../store/actions/userAction'
import ApiUrlConstants from '../../utils/api_constants';
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import { saveAllCategorys } from '../../store/actions/categorysAction'
import { saveAllRestaurant } from "../../store/actions/restaurantAction";
import { StyleSheet } from 'react-native'
const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartId = useSelector(state => state.userReducer.cart.cartId);
  const userId = useSelector(state => state.userReducer.id);
  useEffect(() => {
    getAllProducts();
    getAllCategory();
    loadInitCart(cartId);
    loadMyOrder(userId);
    getAllRestaurant();
    getUserAddress();
    
    const timer = setTimeout(() => {
      navigation.navigate(Routers.Main);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const getAllProducts = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllFoods, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const productsObj = data["data"];
        dispatch(saveAllProducts({ products: productsObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getAllRestaurant = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllRestaurants, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const restaurantsObj = data["data"];
        dispatch(saveAllRestaurant({ restaurant: restaurantsObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadInitCart = async (id) => {
    try {
      const response = await fetch(ApiUrlConstants.cart + "?id=" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const productsObj = data["data"];
        dispatch(loadCart({ products: productsObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getAllCategory = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllCategorys, {
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
        const categoryObj = data['data'];
        dispatch(saveAllCategorys({ categorys: categoryObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadMyOrder = async (userId) => {
    try {
      const response = await fetch(ApiUrlConstants.order + "?id=" + userId, {
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
        const orderObj = data['data'];
        dispatch(loadOrder({ orders: orderObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getUserAddress = async () => {
    try {
      const response = await fetch(ApiUrlConstants.address+"?customer_id="+userId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      console.log("la", "ABCr");
      if (data["status"] == "success") {
        const addressObj = data["data"];
        dispatch(saveUserAddress(addressObj));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={[CommonStyles.center, { flex: 1 }]}>
      <View style={[CommonStyles.horizontal_direction, CommonStyles.center]}>
        <Image source={require("../../../assets/Images/foodu.png")} />
        <Text style={[TypographyStyles.soBig, Margin.ml_10]}>Foodu</Text>
      </View>
      <ActivityIndicator style={Styles.indicator} size={50} color={Colors.primaryColor} />
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: 30,
    left: "50%",
    transform: [{ translateX: -25 }],
  },
});

export default Splash;
