import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderDetailsAdmin = () => {
  const data = [
    { id: '1', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '2', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },
    { id: '3', customer: 'LyLy', Total: '10000VND',date:"12/12/2024" },

  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Customer</Text>
        <Text style={styles.headerCell}>Total</Text>
        <Text style={styles.headerCell}>Date</Text>
      </View>

      {data.map((item) => (
        <View key={item.id} style={styles.dataRow}>
          <Text style={styles.dataCell}>{item.id}</Text>
          <Text style={styles.dataCell}>{item.customer}</Text>
          <Text style={styles.dataCell}>{item.Total}</Text>
          <Text style={styles.dataCell}>{item.date}</Text>
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

export default OrderDetailsAdmin;
