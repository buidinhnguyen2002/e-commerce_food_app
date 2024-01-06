import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TypographyStyles } from '../../utils/StyleUtil';


const SalesAdmin = () => {
  const data = [
    { id: '1', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '2', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '3', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
    { id: '4', fullname: 'John Doe', gender: 'Male', total: '123-456-7890' },
  ];

  return (
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Sales</Text>
      </View>
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>ID</Text>
        <Text style={styles.headerCell}>Fullname</Text>
        <Text style={styles.headerCell}>Gender</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>

      {data.map((item) => (
        <View key={item.id} style={styles.dataRow}>
          <Text style={styles.dataCell}>{item.id}</Text>
          <Text style={styles.dataCell}>{item.fullname}</Text>
          <Text style={styles.dataCell}>{item.gender}</Text>
          <Text style={styles.dataCell}>{item.total}</Text>
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
