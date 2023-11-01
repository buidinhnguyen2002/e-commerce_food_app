import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { Center } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProducts } from '../../store/actions/productsAction';
import { loadCart, loadOrder } from '../../store/actions/userAction'
import ApiUrlConstants from '../../utils/api_constants';
import { useNavigation } from "@react-navigation/native";
import { Routers } from '../../utils/Constant'

const Splash = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartId = useSelector(state => state.userReducer.cart.cartId);
  const userId = useSelector(state => state.userReducer.id);
  useEffect(() => {
    getAllProducts();
    loadInitCart(cartId);
    loadMyOrder(userId);
    const timer = setTimeout(() => {
      navigation.navigate(Routers.Main);
    }, 1000);
    return () => clearTimeout(timer);
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
        dispatch(saveAllProducts({ products: productsObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const loadInitCart = async (id) => {
    try {
      const response = await fetch(ApiUrlConstants.cart + "?id=" + id, {
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
        dispatch(loadCart({ products: productsObj }));
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
  return (
    <SafeAreaView style={[CommonStyles.center, { flex: 1 }]}>
      <View style={[CommonStyles.horizontal_direction, CommonStyles.center]}>
        <Image source={require('../../../assets/Images/foodu.png')} />
        <Text style={[TypographyStyles.soBig, Margin.ml_10]}>Foodu</Text>
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  )
}

export default Splash