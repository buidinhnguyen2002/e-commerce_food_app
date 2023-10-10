import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { CommonStyles, Margin, Padding } from "../utils/StyleUtil";
import { TypographyStyles } from "../utils/StyleUtil";
import { Colors } from "../utils/Colors";

const StarSort = ({ source, text, onPress, isChoose }) => {
  // Xác định đường dẫn hình ảnh dựa trên giá trị source
  const starImageSource =
    source === "../../assets/Icons/z.png"
      ? require("../../assets/Icons/z.png")
      : require("../../assets/Icons/star.png");

  return (
    <TouchableHighlight
      underlayColor={isChoose ? "#1BAC4BAA" : "#1BAC4B34"}
      style={[Styles.chipContainer, isChoose ? Styles.chipChoose : {}]}
      onPress={onPress}
    >
      <View
        style={[
          CommonStyles.horizontal_direction,
          Padding.pd_horizontal_20,
          Padding.pd_vertical_5,
        ]}
      >
        <Image
          style={[
            CommonStyles.iconSizeSuperSmall,
            Margin.mr_10,
            { marginTop: 5 },
          ]}
          source={starImageSource}
        />

        <Text
          style={[
            TypographyStyles.normal,
            {
              color: isChoose ? Colors.white : Colors.primaryColor,
              fontWeight: 700,
            },
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const Styles = StyleSheet.create({
  chipContainer: {
    borderRadius: 30,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
  },

  chipChoose: {
    backgroundColor: Colors.primaryColor,
  },
});

export default StarSort;
