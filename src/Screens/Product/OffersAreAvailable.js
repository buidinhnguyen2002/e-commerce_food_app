import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import VoucherClaim from "../../components/VoucherClaim";
import { Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";

const OffersAreAvailable = () => {
  const dataDiscount = [
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Promo New User",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Free Delivery",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Extra 20% OFF",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Extra 20% OFF",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Extra 20% OFF",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Extra 20% OFF",
      textDetail: "Valid for new users",
    },
    {
      imageUrl: require("../../../assets/Icons/discount.png"),
      text: "Extra 20% OFF",
      textDetail: "Valid for new users",
    },
    // Thêm nhiều mục khác nếu cần
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <View
        style={[
          Styles.specialOfferContainer,
          Padding.pd_horizontal_30,
          Padding.pd_vertical_20,
          { backgroundColor: Colors.background },
        ]}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            Padding.pd_vertical_5,
            { paddingHorizontal: 2 },
          ]}
          ItemSeparatorComponent={() => <SeparatorComponent height={25} />}
          data={dataDiscount}
          renderItem={({ item }) => (
            <VoucherClaim
              imageUrl={item.imageUrl}
              text={item.text}
              textDetail={item.textDetail}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  specialOfferContainer: {
    backgroundColor: Colors.white,
  },
});

export default OffersAreAvailable;
