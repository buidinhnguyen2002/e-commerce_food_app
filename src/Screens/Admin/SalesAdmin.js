import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TypographyStyles } from '../../utils/StyleUtil';
import ApiUrlConstants from "../../utils/api_constants";

const SalesAdmin = () => {
  const data = [
    { id: '1', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '2', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '3', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '4', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
  ];

  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = async() => {
    try {
      const response = await fetch(ApiUrlConstants.getAllRestaurants);
      const data = await response.json();

      if(data.status === 'success') {
        setRestaurants(data.data);
      } else {
        console.error('Failed to fetch restaurants:', data.message);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error.message);
    }
  };
  return (
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>Doanh số của Nhà hàng</Text>
      </View>
    <View style={styles.container}>
          <View style={styles.headerRow}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Orders</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>


      {restaurants.map((restaurant) => ( 
        <View key={restaurant.id} style={styles.dataRow}>
          <Text style={styles.dataCell}>{restaurant.id}</Text>
          <Text style={styles.dataCell}>{restaurant.name}</Text>
          <Text style={styles.dataCell}>{restaurant.totalOrders}</Text>
          <Text style={styles.dataCell}>{restaurant.totalRevenue}</Text>
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
});

export default SalesAdmin;
