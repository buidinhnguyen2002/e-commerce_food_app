import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const CardMenu = ({ image, name, price, idProduct }) => {
  const [clickedItems, setClickedItems] = useState([]);
  const [clickedMenuItems, setClickedMenuItems] = useState([]);
  const navigation = useNavigation();
  const changePage = ({ idProduct }) => {
    navigation.navigate(Routers.ProductDetail, { idProduct: idProduct });
  };
  const handleItemClick = (itemIndex) => {
    if (clickedItems.includes(itemIndex)) {
      // Nếu item đã được nhấn, hãy bỏ nó khỏi mảng clickedItems
      setClickedItems(clickedItems.filter((index) => index !== itemIndex));
    } else {
      // Nếu item chưa được nhấn, hãy thêm nó vào mảng clickedItems
      setClickedItems([...clickedItems, itemIndex]);
    }

    console.log("clickedItems:", clickedItems); // Kiểm tra giá trị của clickedItems
  };
  return (
    <View>
      <TouchableOpacity
        // key={id}
        style={[
          styles.menuItem, // Sử dụng một kiểu CSS mới cho các thẻ Menu
        ]}
        onPress={() => changePage({ idProduct: idProduct })}
        
      >
        <View style={[Styles.rowContainer, Styles.menuStyle]}>
          <Image style={CommonStyles.imageCart} source={{ uri: image }} />
          <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>
            New
          </Text>
          <View style={{ margin: 30 }}>
            <Text style={TypographyStyles.nameFood}>{name}</Text>
            <Text style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}>
              {price} VNĐ
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    borderWidth: 2,
    borderColor: "transparent", // Màu viền mặc định là trong suốt
  },
  clicked: {
    borderColor: Colors.green, // Màu viền khi ấn
  },
});
export default CardMenu;
