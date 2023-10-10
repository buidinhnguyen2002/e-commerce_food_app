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
