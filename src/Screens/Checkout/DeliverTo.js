import React, { useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native";
import VoucherClaim from "../../components/VoucherClaim";
import { Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import AddressDeliver from "../../components/AddressDeliver";
import { saveUserAddress } from "../../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const DeliverTo = () => {
  const address = useSelector(state=> state.userReducer.address);
  console.log("ADD",address);

  
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
          data={address}
          renderItem={({ item }) => (
            <AddressDeliver
              imageUrl={item.imageUrl}
              text={item.city}
              textDetail={` ${item.restaurant_id}, ${item.unit_number} ,${item.street_number} ,${item.district}`}
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
