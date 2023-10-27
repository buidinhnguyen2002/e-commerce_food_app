import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import { Margin, TypographyStyles, CommonStyles } from "../utils/StyleUtil";

const CategoryItem = ({ source, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.categoryItemContainer}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/Images/sandwich.png")} />
        <Text style={[TypographyStyles.normal, { fontWeight: 700 }]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  categoryItemContainer: {
    margin: 5,
    padding: 5,
    // width: "25%",
  },
});

export default CategoryItem;
