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
import LocationPicker from "./Map";

const DeliverTo = ({ route }) => {
  const { selectedAddress } = route.params;
  const dataDiscount = [
    {
      imageUrl: require("../../../assets/Icons/locate.png"),
      text: "Home",
      textDetail: selectedAddress,
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
