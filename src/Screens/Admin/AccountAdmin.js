import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TypographyStyles, CommonStyles } from "../../utils/StyleUtil";
import { useNavigation } from "@react-navigation/native";
import customerReducer from "../../store/reducers/customerReducer";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomerStatus } from "../../store/actions/customerAction";
import ApiUrlConstants from "../../utils/api_constants";
import axios from 'axios';

const AccountAdmin = ({ customer }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch(); 
  const customers = useSelector((state) => state.customerReducer.customers);
  console.log(customers); 
  const handleImageClick = async (customerId, isActive) => {
    const newStatus = isActive === 1 ? 0 : 1;
    console.log(customerId, isActive, newStatus);
    try {
      const response = await fetch(ApiUrlConstants.getAllCustomers, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id:customerId,
          isActive: newStatus,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // The request was successful, you can dispatch the Redux action if needed
        dispatch(updateCustomerStatus(customerId, newStatus));
      } else {
        console.error('Error updating customer status:', response.status);
        // Handle error
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const getImageSource = (isActive) => {
    return isActive === 0
    ? require("../../../assets/Icons/block_user.png") // Image source for isActive 1
      : require("../../../assets/Icons/bx-user-x.png"); // Image source for isActive 0
  };

  return (
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Account</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.actionCell}>ID</Text>
          <Text style={styles.headerCell}>Full Name</Text>
          <Text style={styles.headerCell}>Gender</Text>
          <Text style={styles.headerCell}>Phone </Text>
          <Text style={styles.actionCell}>Action</Text>
        </View>

        {customers.map((customer) => (
    <View key={customer.id} style={styles.dataRow}>
      <Text style={styles.actionCell}>{customer.id}</Text>
      <Text style={styles.dataCell}>{customer.full_name}</Text>
      <Text style={styles.dataCell}>{customer.gender}</Text>
      <Text style={styles.dataCell}>{customer.phone_number}</Text>
      <Text style={styles.actionCell}>
        <TouchableOpacity
          onPress={() => handleImageClick(customer.id, customer.isActive)}
        >
          <Image
            style={[CommonStyles.iconSizeSmall, { marginLeft: 10 }]}
            source={getImageSource(customer.isActive)}
          ></Image>
        </TouchableOpacity>
      </Text>
    </View>
  ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    margin: 16,
  },
  headerRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  dataRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    color: "#2E8B57",
  },
  dataCell: {
    flex: 1,
  },
  actionCell: {
    flex: 0.5,
    alignItems: "center", // Căn giữa theo chiều ngang
    justifyContent: "space-between", // Căn giữa theo chiều dọc
    color: "#2E8B57",
    fontWeight: "bold",
  },
});

export default AccountAdmin;
