import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsAdmin = () => {
  const data = [
    { id: '1', FoodName: 'Bún bò', Quantity: '100', Price: '12' },
    { id: '2', FoodName: 'John Doe', Quantity: '100', Price: '12' },
    { id: '3', FoodName: 'John Doe', Quantity: '100', Price: '123' },
    { id: '4', FoodName: 'John Doe', Quantity: '100', Price: '123' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>FoodName</Text>
        <Text style={styles.headerCell}>Quantity</Text>
        <Text style={styles.headerCell}>Price</Text>
      </View>

      {data.map((item) => (
        <View key={item.id} style={styles.dataRow}>
          <Text style={styles.dataCell}>{item.id}</Text>
          <Text style={styles.dataCell}>{item.FoodName}</Text>
          <Text style={styles.dataCell}>{item.Quantity}</Text>
          <Text style={styles.dataCell}>{item.Price}</Text>
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

export default ProductsAdmin;
