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
export const NavigationButton = ({ onPress, index }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(index)}
      style={ButtonStyles.navigationButton}
    >
      <Image source={require("../../../assets/Icons/home-filled.png")}></Image>
    </TouchableOpacity>
  );
};
export const OutlineButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ButtonStyles.outlineButton, CommonStyles.center]}
    >
      <Image
        source={require("../../../assets/Icons/notification-light_mode.png")}
        style={[CommonStyles.iconSize]}
      ></Image>
    </TouchableOpacity>
  );
};
export default CommonButton;
