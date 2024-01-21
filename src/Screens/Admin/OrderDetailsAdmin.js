import React, { useEffect, useState } from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native';
import { CommonStyles, TypographyStyles } from '../../utils/StyleUtil';
import ApiUrlConstants from "../../utils/api_constants";
import { useNavigation } from "@react-navigation/native";
const OrderDetailsAdmin = () => {
  const data = [
    { id: '1', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '2', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '3', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },

  ];
  const navigation = useNavigation();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getAllOrder();
  },[]);
  const getAllOrder = async() => {
    try{
      const response = await fetch(ApiUrlConstants.getAllOrderAdmin);
      const data = await response.json();

      if(data.status === 'success') {
        setOrder(data.data);
      }else{
        console.error('Failed to fetch orders:', data.message);
      }
    }catch (error) {
      console.error('Error fetching orders:', error.message);
    }
  };
  return (
    <View>
         <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Order</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.actionCell}>ID</Text>
        <Text style={styles.headerCell}>Order DateTime</Text>
        <Text style={styles.headerCell}>Delivery fee</Text>
        <Text style={styles.headerCell}>Total amount</Text>
        <Text style={styles.actionCell}>Action</Text>

      </View>

      {order.map((order) => (
        <View key={order.id} style={styles.dataRow}>
          <Text style={styles.actionCell}>{order.id}</Text>
          <Text style={styles.dataCell}>{order.order_datetime}</Text>
          <Text style={styles.dataCell}>{order.delivery_fee}</Text>
          <Text style={styles.dataCell}>{order.total_amount}</Text>
          <Text style={styles.actionCell}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateProductsAdmin")}
                style={{alignContent:"space-between"}}
              >
                <Image
                  style={[CommonStyles.iconSizeSmall,{marginLeft:10}]}
                  source={require("../../../assets/Icons/trash-alt.png")}
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
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 16,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    
    color:"#2E8B57"
  },
  dataCell: {
    flex: 1,
  },
  actionCell: {
    flex: 0.5,
    alignItems: 'flex-end', // Căn giữa theo chiều ngang
    justifyContent: 'space-between', // Căn giữa theo chiều dọc
    color:"#2E8B57",
    fontWeight: 'bold',

  },
  
});

export default OrderDetailsAdmin;
