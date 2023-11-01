import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationButton } from "../components/Buttons/CommonButton";
import { Colors } from "../utils/Colors";
const iconSources = [
  require("../../assets/Icons/home-alt.png"),
  require("../../assets/Icons/order2.png"),
  require("../../assets/Icons/store2.png"),
  require("../../assets/Icons/wallet1.png"),
  require("../../assets/Icons/profile1.png"),
];
const Tab = createBottomTabNavigator();

export default function BottomNavigation({ changeBottomNavigationIndex }) {
  return (
    <View style={Styles.container}>
      <NavigationButton
        onPress={changeBottomNavigationIndex}
        image={iconSources[0]}
        index={0}
      />
      <NavigationButton
        onPress={changeBottomNavigationIndex}
        image={iconSources[1]}
        index={1}
      />
      <NavigationButton
        onPress={changeBottomNavigationIndex}
        image={iconSources[2]}
        index={2}
      />
      <NavigationButton
        onPress={changeBottomNavigationIndex}
        image={iconSources[3]}
        index={3}
      />
      <NavigationButton
        onPress={changeBottomNavigationIndex}
        image={iconSources[4]}
        index={4}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#ffffff",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: Colors.lightGrey,
    shadowColor: "black",
    shadowOffset: { width: 0.5, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
});
