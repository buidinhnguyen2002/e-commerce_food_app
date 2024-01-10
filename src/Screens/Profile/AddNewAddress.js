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
import ApiUrlConstants from "../../utils/api_constants";

const AddNewAddress = () => {
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [city, setCity] = useState("");
    const customerId = useSelector((state) => state.userReducer.id);
    const [errorMessages, setErrorMessages] = useState({
        number: "",
        street: "",
        district: "",
        city: "",
    });
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handlePress = async () => {
        setErrorMessages({
            number: "",
            street: "",
            district: "",
            city: "",
        });
        try {
            const errors = {};
            if(!number) {
                errors.number = "Please enter into Number";
            }
            if(!street) {
                errors.street = "Please enter into street";
            }
            if(!district) {
                errors.district = "Please enter into district";
            }
            if(!city) {
                errors.city = "Please enter into city";
            }
            if (Object.keys(errors).length > 0) {
                setErrorMessages(errors);
                return;
            }
    
            const response = await fetch(ApiUrlConstants.getAllAddresses, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    customer_id: customerId,
                    number: parseInt(number),
                    street: street,
                    district: district,
                    city: city,
                }),
            });
            console.log("Response Status:", response.status);
            const data = await response.json();
            console.log("Response Data:", data);
            if (!response.ok) {
                throw new Error("Lỗi mạng");
            }
            if(data["status"] === "success") {
            
                dispatch(
                    addAddress({
                        number: number,
                        street: street,
                        district: district,
                        city: city,
                    })
                );
                // console.log("Address được tạo thành công");
                console.log("New Address:" + data["data"]);
            
                alert("Address added success");
                // navigation.navigate(Routers.Address);
                setNumber("");
                setStreet("");
                setDistrict("");
                setCity("");
            } else {
                console.error("Lỗi từ server:", data.message);
                setErrorMessages({ serverError: "Lỗi từ Server: " + data.message });
            }
        } catch (error) {
            console.error(error);
            setErrorMessages({ serverError: "Đã xảy ra lỗi: " + error.message });
        }
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