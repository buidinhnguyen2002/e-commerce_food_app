import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Routers } from "../utils/Constant";
import Splash from "../Screens/Splash/Splash";
import Login from "../Screens/Login/Login";
import Home from "../Screens/Home/Home";
import Main from "../Screens/Main";
import SpecialOffers from "../Screens/SpecialOffers/SpecialOffers";
import OverView from "../Screens/Product/OverView";
import { StyleSheet } from "react-native";
import ListCard from "../Screens/ListCard/ListCard";
import CustomHeader from "../components/CustomHeader";
import Category from "../Screens/Category/Category";
import CategoryDetail from "../Screens/Category/CategoryDetail";
import MyCart from "../Screens/Cart/MyCart";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import RatingAndReview from "../Screens/Product/RatingAReviews";
import OffersAreAvailable from "../Screens/Product/OffersAreAvailable";
import DeliverTo from "../Screens/Checkout/DeliverTo";
import Payment from "../Screens/Checkout/Payment";
import TransactionHistory from "../Screens/E-Wallet/TransactionHistory";
import TopUp from "../Screens/E-Wallet/TopUp";
import EnterYourPin from "../Screens/E-Wallet/EnterYourPin";
import Checkout from "../Screens/Checkout/Checkout";
import ProductDetail from "../Screens/Product/ProductDetail";
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Login}
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Main}
          component={Main}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Home}
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Splash}
          component={Splash}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.SpecialOffers}
          component={SpecialOffers}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitle: () => (
              <CustomHeader
                title={Routers.Recommended}
                imageSource={require("../../assets/Icons/emoji.png")}
              />
            ),
          }}
          name={Routers.Recommended}
          component={ListCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitle: () => (
              <CustomHeader
                title={Routers.DiscountGuaranteed}
                imageSource={require("../../assets/Icons/emoji.png")}
              />
            ),
          }}
          name={Routers.DiscountGuaranteed}
          component={ListCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.MyFavorite}
          component={ListCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.MoreCategory}
          component={Category}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.CategoryDetail}
          component={CategoryDetail}
        />
        <Stack.Screen
          options={{
            headerRight: () => (
              <TouchableOpacity>
                <Image source={require("../../assets/Icons/3cham.png")} />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: { marginRight: 20 },
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.Cart}
          component={MyCart}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.OverView}
          component={OverView}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.RatingAndReview}
          component={RatingAndReview}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.OffersAreAvailable}
          component={OffersAreAvailable}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.DeliverTo}
          component={DeliverTo}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.Payment}
          component={Payment}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.TransactionHistory}
          component={TransactionHistory}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.TopUp}
          component={TopUp}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.EnterYourPin}
          component={EnterYourPin}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.CheckOut}
          component={Checkout}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.headerTitleStyle,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          name={Routers.ProductDetail}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 24,
  },
});

export default AppNavigation;
