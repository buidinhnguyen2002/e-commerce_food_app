import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { Colors } from "../../utils/Colors";
import ApiUrlConstants from "../../utils/api_constants";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../../store/actions/productsAction";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native";

const CreateProductsAdmin = () => {
  const navigation = useNavigation();
  const [restaurantId, setRestaurantId] = useState("");
  const [category, setCategory] = useState("");
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [quantityUnit, setQuantityUnit] = useState("");
  const [unit, setUnit] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    restaurantId: "",
    category: "",
    foodName: "",
    description: "",
    price: "",
    imageSource: "",
    quantityUnit: "",
    unit: "",
  });
  const dispatch = useDispatch();

  const handleCreateProduct = async () => {
    // Reset tất cả thông báo lỗi
    setErrorMessages({
      restaurantId: "",
      category: "",
      foodName: "",
      description: "",
      price: "",
      imageSource: "",
      quantityUnit: "",
      unit: "",
    });

    try {
      // Kiểm tra xem có trường nào chưa được điền không
      const errors = {};
      if (!restaurantId) {
        errors.restaurantId = "Please enter into Restaurant ID";
      }
      if (!category) {
        errors.category = "Please enter into category ID";
      }
      if (!foodName) {
        errors.foodName = "Please enter into Food Name";
      }
      if (!description) {
        errors.description = "Please enter into Description";
      }
      if (!price) {
        errors.price = "Please enter into Price";
      }
      if (!imageSource) {
        errors.imageSource = "Please enter into image source";
      }
      if (!quantityUnit) {
        errors.quantityUnit = "Please enter into Quantity Unit";
      }
      if (!unit) {
        errors.unit = "Please enter into Unit";
      }

      if (Object.keys(errors).length > 0) {
        setErrorMessages(errors);
        return;
      }

      // Gửi yêu cầu lên server
      const response = await fetch(ApiUrlConstants.getAllFoods, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: parseInt(restaurantId),
          food_name: foodName,
          description: description,
          price: parseInt(price),
          unit: unit,
          image_source: imageSource,
          quantity_init: parseInt(quantityUnit),
          category_id: parseInt(category),

        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }

      const data = await response.json();

      if (data["status"] === "success") {
        console.log("respo" + data["data"]);
        dispatch(
          addFood({
            restaurant_id: restaurantId,
            food_name: foodName,
            description: description,
            price: price,
            unit: unit,
            image_source: imageSource,
            quantity_init: quantityUnit,
            category_id: category,

          })
        );
        console.log("Food đã được tạo thành công");
        alert("Food added success");
        navigation.navigate("ProductsAdmin");
        setRestaurantId("");
        setCategory("");
        setFoodName("");
        setDescription("");
        setPrice("");
        setImageSource("");
        setQuantityUnit("");
        setUnit("");
      } else {
        console.error("Lỗi từ server:", data.message);
        setErrorMessages({ serverError: "Lỗi từ server: " + data.message });
      }
    } catch (error) {
      console.error(error);
      setErrorMessages({ serverError: "Đã xảy ra lỗi: " + error.message });
    }
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // Kiểm tra nếu người dùng đã chọn ảnh (không hủy bỏ)
    if (!result.canceled) {
      // Sử dụng 'assets' array để truy cập các tài nguyên được chọn
      const selectedAssets = result.assets;
      if (selectedAssets && selectedAssets.length > 0) {
        const firstSelectedAsset = selectedAssets[0];
        const uri = firstSelectedAsset.uri;
        // Tiếp tục xử lý logic của bạn với 'uri'
        setImage(uri);
        setImageSource(uri);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={TypographyStyles.medium}>
            Create Food For Restaurant
          </Text>

          {/* Form input */}
          <TextInput
            style={styles.input}
            placeholder="Restaurant ID"
            value={restaurantId.toString()}
            onChangeText={setRestaurantId}
          />
          <Text style={{ color: "red" }}>{errorMessages.restaurantId}</Text>
          <TextInput
            style={styles.input}
            placeholder="Category ID"
            value={category.toString()}
            onChangeText={setCategory}
          />
          <Text style={{ color: "red" }}>{errorMessages.category}</Text>
          <TextInput
            style={styles.input}
            placeholder="Food Name"
            value={foodName}
            onChangeText={setFoodName}
          />
          <Text style={{ color: "red" }}>{errorMessages.foodName}</Text>

          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Text style={{ color: "red" }}>{errorMessages.description}</Text>

          <TextInput
            style={styles.input}
            placeholder="Price"
            value={price.toString()}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <Text style={{ color: "red" }}>{errorMessages.price}</Text>

          {/* <TextInput
          style={styles.input}
          placeholder="Image Source"
          value={imageSource}
          onChangeText={setImageSource}
        /> */}
          <Button
            title="Pick an image from the camera roll"
            onPress={pickImage}
            style={{ borderColor: "#ddd", borderRadius: 8 }}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, marginTop: 20 }}
            />
          )}
          <Text style={{ color: "red" }}>{errorMessages.imageSource}</Text>

          <TextInput
            style={styles.input}
            placeholder="Quantity Unit"
            value={quantityUnit.toString()}
            onChangeText={setQuantityUnit}
          />
          <Text style={{ color: "red" }}>{errorMessages.quantityUnit}</Text>

          <TextInput
            style={styles.input}
            placeholder="Unit"
            value={unit}
            onChangeText={setUnit}
          />
          <Text style={{ color: "red" }}>{errorMessages.unit}</Text>

          {/* Nút tạo sản phẩm */}
          <TouchableOpacity style={styles.button} onPress={handleCreateProduct}>
            <Text>Add </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
});

export default CreateProductsAdmin;
