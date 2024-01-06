import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {
    CommonStyles,
    Margin,
    Padding,
    TypographyStyles,
  } from "../../utils/StyleUtil";
import { Colors } from '../../utils/Colors';
const CreateProductsAdmin = () => {
  const [restaurantId, setRestaurantId] = useState('');
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [quantityUnit, setQuantityUnit] = useState('');
  const [date, setDate] = useState('');
  const [unit, setUnit] = useState('');

  const handleCreateProduct = () => {
    // Thực hiện xử lý khi người dùng nhấn nút tạo sản phẩm
    // Ví dụ: Gửi dữ liệu lên server, lưu vào cơ sở dữ liệu, ...
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={TypographyStyles.medium}>Create Food For Restaurant</Text>

        {/* Form input */}
        <TextInput
          style={styles.input}
          placeholder="Restaurant ID"
          value={restaurantId}
          onChangeText={setRestaurantId}
        />
        <TextInput
          style={styles.input}
          placeholder="Food Name"
          value={foodName}
          onChangeText={setFoodName}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Image Source"
          value={imageSource}
          onChangeText={setImageSource}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity Unit"
          value={quantityUnit}
          onChangeText={setQuantityUnit}
        />
        <TextInput
          style={styles.input}
          placeholder="Date"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Unit"
          value={unit}
          onChangeText={setUnit}
        />

        {/* Nút tạo sản phẩm */}
        <TouchableOpacity style={styles.button} onPress={handleCreateProduct}>
          <Text>Add </Text>
        </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
});

export default CreateProductsAdmin;
