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
import MyCart from "../Screens/Cart/MyCart";
import Category from "../Screens/Category/Category";
import CategoryDetail from "../Screens/Category/CategoryDetail";
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
import { useSelector } from "react-redux";
import RestaurantDetail from "../Screens/Restaurant/RestaurantDetail";
import ProductDetail from "../Screens/Product/ProductDetail";
import LocationPicker from "../Screens/Checkout/Map";
import QRCodeScannerScreen from "../Screens/Home/ScannerQR";
import AccountAdmin from "../Screens/Admin/AccountAdmin";
import OrderDetailsAdmin from "../Screens/Admin/OrderDetailsAdmin";
import SalesAdmin from "../Screens/Admin/SalesAdmin";
import ProductsAdmin from "../Screens/Admin/ProductsAdmin";
import CreateProductsAdmin from "../Screens/Admin/CreateProductsAdmin";
import Profile from "../Screens/Profile/Profile";
import ProfileDetail from "../Screens/Profile/ProfileDetail";
import MyFavoriteRestaurants from "../Screens/Profile/MyFavoriteRestaurants";
import InviteFriends from "../Screens/Profile/InviteFriends";
import Language from "../Screens/Profile/Language";
import Notification from "../Screens/Profile/Notification";
import Security from "../Screens/Profile/Security";
import PayMethod from "../Screens/Profile/PayMethod";
import Address from "../Screens/Profile/Address";
import HelpCenter from "../Screens/Profile/HelpCenter";
import HomeAdmin from "../Screens/Admin/HomeAdmin";

const Stack = createStackNavigator();
const AppNavigation = () => {
  const isSignedIn = useSelector((state) => state.userReducer.isSignIn);
  return (
       <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name={Routers.Splash}
              component={Splash}
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
              name={Routers.RestaurantDetail}
              component={RestaurantDetail}
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
            <Stack.Screen
                    options={{
                        headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.ProfileDetail}
                    component={ProfileDetail}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.MyFavoriteRestaurants} imageSource={require('../../assets/Icons/search.png')} />)
                     }}
                    name={Routers.MyFavoriteRestaurants}
                    component={MyFavoriteRestaurants}
                />
                 <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.InviteFriends} />)
                     }}
                    name={Routers.InviteFriends}
                    component={InviteFriends}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.Notification}
                    component={Notification}
                />
                 <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.Language} />)
                    }}
                    name={Routers.Language}
                    component={Language}
                />
                 <Stack.Screen
                    options={{
                        headerShown: false, headerTitleStyle: Styles.headerTitleStyle, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    name={Routers.Profile}
                    component={Profile}
                />
                 <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.Security} />)
                    }}
                    name={Routers.Security}
                    component={Security}
                />
                 
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.PayMethod} imageSource={require('../../assets/Icons/scan.png')} />)
                    }}
                    name={Routers.PayMethod}
                    component={PayMethod}
                />
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.Address} />)
                    }}
                    name={Routers.Address}
                    component={Address}
                />
                {/* <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.AddAddress} />)
                    }}
                    name={Routers.AddAddress}
                    component={AddAddress}
                /> */}
                <Stack.Screen
                    options={{
                        headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerTitle: () => (<CustomHeader title={Routers.HelpCenter} />)
                    }}
                    name={Routers.HelpCenter}
                    component={HelpCenter}
            />
             <Stack.Screen
              options={{
                headerShown: true,
                headerTitleStyle: Styles.headerTitleStyle,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              name={Routers.AccountAdmin}
              component={AccountAdmin}
            /> 
             <Stack.Screen
            options={{
              headerShown: true,
              headerTitleStyle: Styles.headerTitleStyle,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            name={Routers.OrderDetailsAdmin}
            component={OrderDetailsAdmin}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitleStyle: Styles.headerTitleStyle,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            name={Routers.ProductsAdmin}
            component={ProductsAdmin}
          />
        
            <Stack.Screen
            options={{
              headerShown: true,
              headerTitleStyle: Styles.headerTitleStyle,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            name={Routers.SalesAdmin}
            component={SalesAdmin}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitleStyle: Styles.headerTitleStyle,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            name={Routers.CreateProductsAdmin}
            component={CreateProductsAdmin}
              />  
            <Stack.Screen
              options={{ headerShown: false }}
              name={Routers.HomeAdmin}
              component={HomeAdmin}
            />
               <Stack.Screen
              options={{
                headerShown: true,
                headerTitleStyle: Styles.headerTitleStyle,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              name={Routers.LocationPicker}
              component={LocationPicker}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitleStyle: Styles.headerTitleStyle,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
              name={Routers.QRCodeScannerScreen}
              component={QRCodeScannerScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name={Routers.Login}
              component={Login}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>  
      );
};
const Styles = StyleSheet.create({
    headerTitleStyle: {
        fontSize: 24,
    }
});

export default AppNavigation;
