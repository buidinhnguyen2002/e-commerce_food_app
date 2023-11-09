import { View, Text, Image, test1,test2,test3, TouchableOpacity } from "react-native";
import React from "react";
import { CommonStyles, Margin, TypographyStyles } from "../utils/StyleUtil";
import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

const AddressDeliver = ({ imageUrl, text,test1,test2,test3, textDetail }) => {
  return (
    <View style={[Styles.specialOfferBanner]}>
      <View
        style={[
          {
            backgroundColor: Colors.lightGrey,
            width: 40,
            height: 40,
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
        <Text style={[{ fontSize: 18, fontWeight: 700 }]}>{text}</Text>
        <Text style={[{ color: "grey" }]}>{textDetail}</Text>
      </View>
      <TouchableOpacity
        style={[
          {
            width: 30,
            height: 30,
            borderRadius: 30,
            // backgroundColor: Colors.primaryColor,
            borderColor: Colors.primaryColor,
            borderWidth: 2,
            marginRight: 10,
          },
        ]}
      >
        {/* <Text
          style={[
            {
              color: Colors.white,
              textAlign: "center",
              marginTop: 10,
            },
          ]}
        >
          Claim
        </Text> */}
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

export default AddressDeliver;
