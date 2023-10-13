import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Routers } from "../utils/Constant";
import Splash from "../Screens/Splash/Splash";
import Login from "../Screens/Login/Login";
import Home from "../Screens/Home/Home";
import Main from "../Screens/Main";
import SpecialOffers from "../Screens/SpecialOffers/SpecialOffers";
import OverView from "../Screens/Product/OverView";
import { StyleSheet } from "react-native";
import RatingAndReview from "../Screens/Product/RatingAReviews";
import OffersAreAvailable from "../Screens/Product/OffersAreAvailable";
import DeliverTo from "../Screens/Checkout/DeliverTo";
import Payment from "../Screens/Checkout/Payment";
import TransactionHistory from "../Screens/E-Wallet/TransactionHistory";
import TopUp from "../Screens/E-Wallet/TopUp";

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Main}
          component={Main}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={Routers.Login}
          component={Login}
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
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.SpecialOffers}
          component={SpecialOffers}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.OverView}
          component={OverView}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.RatingAndReview}
          component={RatingAndReview}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.OffersAreAvailable}
          component={OffersAreAvailable}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
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
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.TransactionHistory}
          component={TransactionHistory}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleStyle: Styles.specialOffersTitle,
          }}
          name={Routers.TopUp}
          component={TopUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Styles = StyleSheet.create({
  specialOffersTitle: {
    fontSize: 24,
  },
});

export default AppNavigation;
