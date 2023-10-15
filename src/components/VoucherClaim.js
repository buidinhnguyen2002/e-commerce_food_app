import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CommonStyles, Margin, TypographyStyles } from "../utils/StyleUtil";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

const VoucherClaim = ({ imageUrl, text, textDetail }) => {
  return (
    <View style={[Styles.specialOfferBanner]}>
      <View
        style={[
          {
            backgroundColor: Colors.primaryColor,
            width: 70,
            height: 70,
            borderRadius: 50,
            alignItems: "center", // Căn giữa hình ảnh theo chiều dọc và ngang
            justifyContent: "center",
          },
        ]}
      >
        <Image
          style={[CommonStyles.iconSize, { alignItems: "center" }]} // Tuỳ chỉnh kích thước của hình ảnh
          source={imageUrl} // Truyền đường dẫn hình ảnh vào đây
        />
      </View>
      <View style={[{ alignItems: "center", justifyContent: "space-between" }]}>
        <Text style={[{ fontSize: 19, fontWeight: 700 }]}>{text}</Text>
        <Text style={[{ color: "grey" }]}>{textDetail}</Text>
      </View>
      <TouchableOpacity
        style={[
          {
            width: 80,
            height: 40,
            borderRadius: 30,
            backgroundColor: Colors.primaryColor,
            marginRight: 10,
          },
        ]}
      >
        <Text
          style={[
            {
              color: Colors.white,
              textAlign: "center",
              marginTop: 10,
            },
          ]}
        >
          Claim
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  specialOfferBanner: {
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: 30,
    flexDirection: "row", // Để hình ảnh và văn bản được hiển thị cạnh nhau
    alignItems: "center", // Để canh giữa theo chiều dọc
    justifyContent: "space-between", // Để các phần tử hiển thị cách đều nhau
    paddingHorizontal: 10, // Khoảng cách ngang giữa các phần tử
  },
});

export default VoucherClaim;
