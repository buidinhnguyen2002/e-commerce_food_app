import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Routers } from "../utils/Constant";
import Splash from "../Screens/Splash/Splash";
import Login from "../Screens/Login/Login";
import Home from "../Screens/Home/Home";
import Main from "../Screens/Main";
import SpecialOffers from "../Screens/SpecialOffers/SpecialOffers";
import { StyleSheet } from "react-native";
import ListCard from "../Screens/ListCard/ListCard";
import CustomHeader from "../components/CustomHeader";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import Category from "../Screens/Category/Category";
import CategoryDetail from "../Screens/Category/CategoryDetail";

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
                    options={{ headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
                    name={Routers.SpecialOffers}
                    component={SpecialOffers}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.Recommended} imageSource={require('../../assets/Icons/emoji.png')} />)
                    }}
                    name={Routers.Recommended}
                    component={ListCard}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.DiscountGuaranteed} imageSource={require('../../assets/Icons/emoji.png')} />)
                    }}
                    name={Routers.DiscountGuaranteed}
                    component={ListCard}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.MyFavorite}
                    component={ListCard}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.MoreCategory}
                    component={Category}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.CategoryDetail}
                    component={CategoryDetail}
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
