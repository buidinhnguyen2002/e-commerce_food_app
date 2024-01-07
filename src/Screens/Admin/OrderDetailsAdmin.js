import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api_constants from '../../utils/api_constants';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderDetails } from '../../store/actions/orderDetailsAction';

const OrderDetailsAdmin = () => {
  const data = useSelector((state) => state.orderDetailsReducer.data);
  const dispatch = useDispatch(data);

  useEffect(() => {
    const apiUrl = api_constants.addressCutomer;
    console.log("API URL:", apiUrl);
  
    fetch(apiUrl)
      .then((response) => {
        console.log("Response Status:", response.status);
        return response.json();
      })
      .then((result) => {
        console.log("API Result:", result);
        dispatch(setOrderDetails({ data: result.data }));
      })
      .catch((error) => console.error('Lỗi khi tải dữ liệu:', error.message, error));
  }, [dispatch]);
    console.log("Data:", data);
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Number</Text>
        <Text style={styles.headerCell}>Street</Text>
        <Text style={styles.headerCell}>District</Text>
        <Text style={styles.headerCell}>City</Text>
      </View>

      {data && Array.isArray(data) && data.map((item) => (
  <View key={item.id} style={styles.dataRow}>
    <Text style={styles.dataCell}>{item.restaurant_id || 'N/A'}</Text>
    <Text style={styles.dataCell}>{item.unit_number || 'N/A'}</Text>
    <Text style={styles.dataCell}>{item.street_number || 'N/A'}</Text>
    <Text style={styles.dataCell}>{item.district || 'N/A'}</Text>
    <Text style={styles.dataCell}>{item.city || 'N/A'}</Text>
  </View>
))}
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
    paddingVertical: 6,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    color:"#2E8B57"
  },
  dataCell: {
    flex: 1,
  },
});

export default OrderDetailsAdmin;