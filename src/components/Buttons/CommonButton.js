import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonStyles } from "./Buttons.style";
import { CommonStyles, TypographyStyles } from "../../utils/StyleUtil";
import { Image } from "react-native";

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

export const NavigationButton = ({ onPress, index, image }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={ButtonStyles.navigationButton}
    >
      <Image
        style={{ height: 35, width: 35, objectFit: "contain" }}
        source={image}
      ></Image>
    </TouchableOpacity>
  );
};

export const OutlineButton = ({ onPress, image }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.outlineButton, CommonStyles.center]}
    >
      <Image source={image} style={[CommonStyles.iconSize]}></Image>
    </TouchableOpacity>
  );
};
export default CommonButton;
