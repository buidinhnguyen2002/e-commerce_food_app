import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { Colors } from "../../utils/Colors";

import { useNavigation } from "@react-navigation/native";
import CommonButton from "../../components/Buttons/CommonButton";
import { Routers } from "../../utils/Constant";

const ProductsAdmin = () => {
  const navigation = useNavigation();

  const data = [
    { id: "1", FoodName: "Bún bò", Quantity: "100", Price: "12" },
    { id: "2", FoodName: "John Doe", Quantity: "100", Price: "12" },
    { id: "3", FoodName: "John Doe", Quantity: "100", Price: "123" },
    { id: "4", FoodName: "John Doe", Quantity: "100", Price: "123" },
  ];
  const CreateProductsAdmin = () => {
    navigation.navigate(Routers.CreateProductsAdmin);
  };

  return (
    <View>
      <View style={{ alignItems: "center", paddingTop: 16 }}>
        <Text style={TypographyStyles.medium}>List Food</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.actionCell}>ID</Text>
          <Text style={styles.headerCell}>FoodName</Text>
          <Text style={styles.headerCell}>Quantity</Text>
          <Text style={styles.headerCell}>Price</Text>
          <Text style={styles.actionCell}>Action</Text>
        </View>

        {data.map((item) => (
          <View key={item.id} style={styles.dataRow}>
            <Text style={styles.actionCell}>{item.id}</Text>
            <Text style={styles.dataCell}>{item.FoodName}</Text>
            <Text style={styles.dataCell}>{item.Quantity}</Text>
            <Text style={styles.dataCell}>{item.Price}</Text>
            <Text style={styles.actionCell}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateProductsAdmin")}
              >
                <Image
                  style={CommonStyles.iconSizeSuperSmall}
                  source={require("../../../assets/Icons/Vector.png")}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreateProductsAdmin")}
              >
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
