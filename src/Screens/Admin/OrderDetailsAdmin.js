import React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native';
import { CommonStyles, TypographyStyles } from '../../utils/StyleUtil';
import ApiUrlConstants from "../../utils/api_constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation} from "@react-navigation/native";

const OrderDetailsAdmin = () => {
  const data = [
    { id: '1', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '2', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '3', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },

  ];const navigation = useNavigation();
  const orders = useSelector(
    (state) => state.userReducer.order
  );
  const dispatch = useDispatch();

 
  return (
    <View>
         <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Order</Text>
      </View>
      <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.actionCell}>ID</Text>
        <Text style={styles.headerCell}>Customer</Text>
        <Text style={styles.headerCell}>Total</Text>
        <Text style={styles.headerCell}>Date</Text>
        <Text style={styles.actionCell}>Action</Text>

      </View>

      {orders.map((item,index) => (
        <View key={index} style={styles.dataRow}>
          <Text style={styles.actionCell}>{item.id}</Text>
          <Text style={styles.dataCell}>{item.name}</Text>
          <Text style={styles.dataCell}>{item.total_amount}</Text>
          <Text style={styles.dataCell}>{item.order_datetime}</Text>
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
