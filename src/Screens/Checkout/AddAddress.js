import React from "react";
import { View, TextInput, Button, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../../utils/Colors";
import { CommonStyles, Margin, Padding } from "../../utils/StyleUtil";
import SeparatorComponent from "../../components/SeparatorComponent";
import AddressDeliver from "../../components/AddressDeliver";
import { saveUserAddress } from "../../store/actions/userAction";
import CommonButton from "../../components/Buttons/CommonButton";
import { Routers } from "../../utils/Constant";
import { text } from "@fortawesome/fontawesome-svg-core";
import { DeleteIcon } from "native-base";
import DeliverTo from "./DeliverTo";
import { color } from "@rneui/base";


const AddAddress = ({ navigation }) => {
  const address = useSelector((state) => state.userReducer.address);
  //console.log("ADD", address);
  const [value, onChangeTextValue] = React.useState('');
  const [value1, onChangeTextValue1] = React.useState('');
  const [value2, onChangeTextValue2] = React.useState('');
  const [value3, onChangeTextValue3] = React.useState('');
  const [value4, onChangeTextValue4] = React.useState('');
  // const handleAddAddress = () => {
  //   console.log('New Restaurant ID:');
  // };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <View style={[
        Styles.specialOfferContainer,
        Padding.pd_horizontal_20,
        Padding.pd_vertical_20,
        { backgroundColor: Colors.background },
      ]} >
        <View style={[{Styles:Styles.rowContainer, justifyContent: "space-between"}, CommonStyles.horizontal_direction] }>
          <Text style={Styles.textStyle} >ID Nhà hàng: </Text>
          <TextInput 
        style= {Styles.styleTextInput}
        onChangeText={text => onChangeTextValue(text)}
        value={value}
      /> 
        </View>
        <View style={[{Styles:Styles.rowContainer, justifyContent: "space-between"}, CommonStyles.horizontal_direction]}>
          <Text style={Styles.textStyle}>Số nhà: </Text>
          <TextInput
          style= {Styles.styleTextInput}
        onChangeText={text => onChangeTextValue1(text)}
        value={value1}
      /> 
        </View>
        <View style={[{Styles:Styles.rowContainer, justifyContent: "space-between"}, CommonStyles.horizontal_direction]}>
          <Text style={Styles.textStyle}>Tên đường: </Text>
          <TextInput
        style= {Styles.styleTextInput}
        onChangeText={text => onChangeTextValue2(text)}
        value={value2}
      /> 
        </View>
        <View style={[{Styles:Styles.rowContainer, justifyContent: "space-between"}, CommonStyles.horizontal_direction]}>
          <Text style={Styles.textStyle}>Quận/Huyện: </Text>
          <TextInput
        style= {Styles.styleTextInput}
        onChangeText={text => onChangeTextValue3(text)}
        value={value3}
      /> 
        </View>
        <View style={[{Styles:Styles.rowContainer, justifyContent: "space-between"}, CommonStyles.horizontal_direction]}>
          <Text style={Styles.textStyle}>Tỉnh/Thành phố: </Text>
          <TextInput
        style= {Styles.styleTextInput} 
        onChangeText={text => onChangeTextValue4(text)}
        value={value4}
      /> 
        </View>
      </View>
      <CommonButton
        title={"Save Address"}
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize:18,
    color: Colors.black,
    marginBottom: 10,
    marginHorizontal: 10
  },
  styleTextInput: {
    Padding: 5,
    backgroundColor: Colors.white,
    width: 250,
    borderWidth:1,
    numberOfLines:1,
       maxLength:40 ,
    //borderColor: Colors.green,
  }
});
export default AddAddress;