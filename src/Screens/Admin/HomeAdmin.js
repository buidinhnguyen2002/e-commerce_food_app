import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import { Avatar, Badge } from "@rneui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CommonButton, {
  OutlineButton,
} from "../../components/Buttons/CommonButton";

import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Colors } from "../../utils/Colors";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import { useSelector, useDispatch } from "react-redux";
import ApiUrlConstants from "../../utils/api_constants";
import { logout } from "../../store/actions/userAction";
const HomeAdmin = () => {
  const navigation = useNavigation();
  const username = useSelector(state => state.userReducer.userName);
  const avatar = useSelector(state => state.userReducer.avatar);
  const dispatch = useDispatch();
  const data = [
    { key: '1', color: '#FA8072', text: 'Số đơn hàng', route: 'OrderDetailsAdmin' },
    { key: '2', color: '#F0E68C', text: 'Số lượng sản phẩm', route: 'ProductsAdmin' },
    { key: '3', color: '#7FFFD4', text: 'Doanh số', route: 'SalesAdmin' },
    { key: '4', color: '#00FF7F', text: 'Số lượng khách hàng', route: 'AccountAdmin' },
  ];

  const renderSquare = ({ item }) => (
    <TouchableOpacity
      style={[Styles.square, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.route)}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );


  const handleLogout = () => {
    // Hiển thị hộp thoại xác nhận đăng xuất
    Alert.alert(
      "Đăng xuất",
      "Bạn có chắc muốn đăng xuất khỏi tài khoản?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Đăng xuất",
          onPress: () => {
            // Thực hiện đăng xuất ở đây
            // dispatch một action đăng xuất hoặc xóa dữ liệu đăng nhập từ Redux
            // navigation.navigate(Routers.Auth); // Chuyển hướng đến màn hình đăng nhập nếu cần
            dispatch(logout());
          },
        },
      ],
      { cancelable: false }
    );
  };
 
  
  return (
    <SafeAreaView style={Styles.screenContainer}>
      <View style={[Padding.pd_horizontal_30]}>
        <View style={[Styles.topContainer, Margin.mb_15]}>
          <View style={Styles.topLeftContainer}>
            <Avatar
              size={55}
              rounded
              source={{ uri: avatar !== '' ? avatar : 'https://randomuser.me/api/portraits/men/36.jpg' }}
            />
            <View style={Margin.ml_25}>
              <Text
                style={[
                  TypographyStyles.normal,
                  { color: Colors.grey },
                  Margin.mb_5,
                ]}
              >
                Welcome, Admin
              </Text>
              <Text style={[TypographyStyles.normal]}>{username}</Text>
            </View>
          </View>
          <View style={Styles.topRightContainer}>
          <View>
                <TouchableOpacity onPress={handleLogout}>
                  <Image
                    style={CommonStyles.iconSize}
                    source={require("../../../assets/exit.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={renderSquare}
          numColumns={2}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 100,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  specialOfferHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recommendContainer: {
    flex: 1,
    height: 700,
  },
  square: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default HomeAdmin;
