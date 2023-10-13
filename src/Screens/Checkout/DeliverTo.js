import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import VoucherClaim from "../../components/VoucherClaim";
import { Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import AddressDeliver from "../../components/AddressDeliver";

const DeliverTo = () => {
  const dataDiscount = [
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "Home",
      textDetail: "Time Square NYC, Manhattan, 27",
    },
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "My Office",
      textDetail: "5259 Blue Bill Park, PC 4327",
    },
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "My Apartment",
      textDetail: "21883 Clyde Gallagher, PC 4662",
    },
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "Parent's House",
      textDetail: "6993 Meadow Valley Terra, PC 36",
    },
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "My Villa",
      textDetail: "61480 Sunbrook Park, PC 5679",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <View
        style={[
          Styles.specialOfferContainer,
          Padding.pd_horizontal_20,
          Padding.pd_vertical_20,
          { backgroundColor: Colors.background },
        ]}
      >
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            Padding.pd_vertical_5,
            // { paddingHorizontal: 2 },
          ]}
          ItemSeparatorComponent={() => <SeparatorComponent height={20} />}
          data={dataDiscount}
          renderItem={({ item }) => (
            <AddressDeliver
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

export default DeliverTo;
