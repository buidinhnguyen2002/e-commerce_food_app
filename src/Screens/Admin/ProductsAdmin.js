import React, { useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { Colors } from "../../utils/Colors";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CommonButton from "../../components/Buttons/CommonButton";
import { Routers } from "../../utils/Constant";
import ApiUrlConstants from "../../utils/api_constants";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProducts } from "../../store/actions/productsAction";
import { deleteProduct } from "../../store/actions/productsAction";
const ProductsAdmin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const CreateProductsAdmin = () => {
    navigation.navigate(Routers.CreateProductsAdmin);
  };
  const deleteProducts = async (id) => {
    try {
      const response = await fetch(ApiUrlConstants.getAllFoods + `/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        dispatch(deleteProduct({ id: id }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const products = useSelector((state) => state.productsReducer.products);
  const categorys = useSelector((state) => state.categorysReducer.categorys);
  const selectedCategoryId = useSelector(state => state.categorysReducer.selectedCategoryId);
  const getCategoryNameById = (categoryId) => {
    const selectedCategory = categorys.find((category) => category.id === categoryId);
    return selectedCategory ? selectedCategory.name : "";
  };
  // console.log(productsWithCategoryName)
  return (
    <ScrollView>
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Food</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.headerRow}>
          {/* <Text style={styles.actionCell}>ID</Text> */}
          <Text style={styles.headerCell}>FoodName</Text>
          <Text style={styles.headerCell}>Category</Text>
          <Text style={styles.headerCell}>Quantity</Text>
          <Text style={styles.headerCell}>Price</Text>
          <Text style={styles.actionCell}>Action</Text>
        </View>

        {products.map((item) => (
          <View key={item.id} style={styles.dataRow}>
            {/* <Text style={styles.actionCell}>{item.id}</Text> */}
            <Text style={styles.dataCell}>{item.food_name}</Text>
            {/* {productsWithCategoryName.map((item) => ( */}
            <Text style={styles.dataCell}>{getCategoryNameById(item.category_id)}</Text>
            <Text style={styles.dataCell}>{item.quantity_init}</Text>
            <Text style={styles.dataCell}>{item.price}</Text>
            <Text style={styles.actionCell}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateProductsAdmin")}
              >
                <Image
                  style={CommonStyles.iconSizeSuperSmall}
                  source={require("../../../assets/Icons/Vector.png")}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteProducts(item.id)}>
              <Image
                style={[CommonStyles.iconSizeSmall]}
                source={require("../../../assets/Icons/trash-alt.png")}
              ></Image>
              </TouchableOpacity>
            </Text>
          </View>
        ))}
        <CommonButton
          bgColor={Colors.primaryColor}
          borderRadius={10}
          height={40}
          textColor={Colors.white}
          title={"Add more "}
          fontWeight={500}
          size={15}
          // margin={20}
          padding={10}
          onPress={CreateProductsAdmin}
        />
        
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
    alignItems: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'space-between', // Căn giữa theo chiều dọc
    color:"#2E8B57",
    fontWeight: 'bold',

  },
});

export default ProductsAdmin;
