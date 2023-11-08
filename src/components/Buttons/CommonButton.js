import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonStyles } from "./Buttons.style";
import { CommonStyles, TypographyStyles } from "../../utils/StyleUtil";
import { Image } from "react-native";
import { Colors } from "../../utils/Colors";

const CommonButton = ({
  title,
  onPress,
  width,
  bgColor,
  textColor,
  height,
  size,
  fontWeight,
  borderWidth,
  borderRadius,
  padding,
  margin,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[
        ButtonStyles.primaryButton,
        {
          width: width,
          backgroundColor: bgColor,
          height: height,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          padding: padding,
          margin: margin,
        },
      ]}
    >
      <Text
        style={[
          TypographyStyles.normal,
          { color: textColor, fontWeight: fontWeight, fontSize: size },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export const NavigationButton = ({ onPress, index, image, currentIndex }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={ButtonStyles.navigationButton}
    >
      <Image
        style={{ height: 35, width: 35, objectFit: "contain" }}
        source={image}
      ></Image>
      {index === currentIndex && <View style={{ width: 35, height: 3, backgroundColor: Colors.primaryColor, borderRadius: 4, marginTop: 3 }}></View>}
    </TouchableOpacity>
  );
};

export const OutlineButton = ({ onPress, image, quantity }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.outlineButton, CommonStyles.center]}
    >
      <Image source={image} style={[CommonStyles.iconSize]}></Image>
      {quantity != 0 && <View style={[CommonStyles.center, { position: "absolute", backgroundColor: Colors.red, padding: 2, borderRadius: 50, width: 20, height: 20, top: -5, right: 0 }]}>
        <Text style={{ fontSize: 11, color: Colors.white }}>{quantity}</Text>
      </View>}
    </TouchableOpacity>
  );
};
export default CommonButton;
