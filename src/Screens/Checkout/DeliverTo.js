import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../utils/Colors";
import { Margin, Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
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
      <CommonButton 
        title={'Add New Address'} 
        size={18}
        onPress={() => navigation.navigate(Routers.AddAddress)}
        textColor={Colors.green}
        bgColor={Colors.lightGreen}
        height={40}
        fontWeight = {700}
        borderRadius= {50}
        borderWidth={0}
      /> 
      </View>  
      <CommonButton 
        title={'Apply'} 
        size={18}
        onPress={() => navigation.navigate()}
        textColor={Colors.white}
        bgColor={Colors.green}
        margin={20}
        height={40}
        fontWeight = {700}
        borderRadius= {45}
        borderWidth={0}
      /> 
    </SafeAreaView>
  );
};
 
const Styles = StyleSheet.create({

  specialOfferContainer: {
    backgroundColor: Colors.white,
  },
  
});

export default DeliverTo;
