import { ScrollView, View } from "react-native";
import styles from "./Profile.Styles";
import { ButtonBottom } from "./ButtonProfile";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Routers } from "../../utils/Constant";
import { useSelector ,useDispatch } from 'react-redux';
import { addAddress } from "../../store/actions/userAction";
import { useEffect } from 'react';

const AddNewAddress = () => {
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [city, setCity] = useState("");
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handlePress = () => {
        const newAddress = {
            number: number,
            street: street,
            district: district,
            city: city,
          };
          console.log('New Address:', newAddress);
          if(newAddress && newAddress.number && newAddress.street && newAddress.dí
            && newAddress.city) {
                // Dispatch the addAddress action
                dispatch(addAddress(newAddress));
                setSuccessMessage('Address added successfully');
            }
          else{
            console.error('Invalid address data:', newAddress);
          }
      
          // Optionally, you can also navigate to the Address screen
        //   navigation.navigate(Routers.Address);
    };
    
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator ={false}>
            <CustomTextInput
                placeholder={"Number"}
                onChangeText={(text) => {
                    setNumber(text);
                }}
            />
            <CustomTextInput
                placeholder={"Street"}
                onChangeText={(text) => {
                    setStreet(text);
                }}
            />
            <CustomTextInput
                placeholder={"District"}
                onChangeText={(text) => {
                    setDistrict(text);
                }}
            />
            <CustomTextInput
                placeholder={"City"}
                onChangeText={(text) => {
                    setCity(text);
                }}
            />
            
            
        </ScrollView>
        <ButtonBottom
          buttonText="Add"
          onPress={handlePress}
        />
      </View>
    );
  };
  
  export default AddNewAddress;