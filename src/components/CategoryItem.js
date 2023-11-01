import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../utils/Colors";
import { Margin, TypographyStyles, CommonStyles } from "../utils/StyleUtil";

const CategoryItem = ({ source, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.categoryItemContainer}>
      <View style={{ alignItems: "center" }}>
        <Image style={Styles.image1} source={{uri: source}} />
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
  image1:{
    width: 110, 
    height: 110, 
    borderRadius: 15, // Bo góc ít hơn
    resizeMode: "cover", // Để hình ảnh bám sát vào kích thước đã đặt
  }

});

export default CategoryItem;
