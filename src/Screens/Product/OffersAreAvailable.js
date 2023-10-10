import { View, Text, FlatList } from "react-native";
import React from "react";
import SpecialOfferItem from "../../components/SpecialOfferItem";
import { Margin, Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const OffersAreAvailable = () => {
  return (
    <View
      style={[
        Styles.specialOfferContainer,
        Padding.pd_horizontal_30,
        Padding.pd_vertical_20,
      ]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          Padding.pd_vertical_5,
          { paddingHorizontal: 2 },
        ]}
        ItemSeparatorComponent={SeparatorComponent({ height: 25 })}
        data={[1, 1, 1, 1, 1]}
        renderItem={({ item }) => <SpecialOfferItem />}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  specialOfferContainer: {
    backgroundColor: Colors.white,
  },
});
export default OffersAreAvailable;
