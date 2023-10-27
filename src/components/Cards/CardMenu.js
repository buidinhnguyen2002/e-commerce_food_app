import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const MenuData = [
  {
    id: 0,
    name: "Mi quang Ha Noi kkkk",
    price: "$12.00",
    imageSource: require("../../../assets/Images/Foods/miquang.png"),
  },
  {
    id: 1,
    name: "Mi quang Ha Noi",
    price: "$12.00",
    imageSource: require("../../../assets/Images/Foods/pho2.png"),
  },

  // Thêm dữ liệu cho các mì quảng khác nếu cần
];
const CardMenu = () => {
  const [clickedItems, setClickedItems] = useState([]);
  const [clickedMenuItems, setClickedMenuItems] = useState([]);

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
      {MenuData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.menuItem, // Sử dụng một kiểu CSS mới cho các thẻ Menu
            clickedMenuItems.includes(item.id) && styles.clicked, // Kiểm tra trạng thái ấn
          ]}
          onPress={() => handleItemClick(item.id)}
          onMouseEnter={() => {
            setHoveredItem(item.id);
          }}
          onMouseLeave={() => {
            setHoveredItem(null);
          }}
        >
          <View style={[Styles.rowContainer, Styles.menuStyle]}>
            <Image style={CommonStyles.imageCart} source={item.imageSource} />
            <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>
              New
            </Text>
            <View style={{ margin: 30 }}>
              <Text style={TypographyStyles.nameFood}>{item.name}</Text>
              <Text style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}>
                {item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
