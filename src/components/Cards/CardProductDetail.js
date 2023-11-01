import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const CardProductDetail = ({ image, name, price, idProduct }) => {
  console.log(idProduct + "IDĐ");
  const [clickedItems, setClickedItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
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
  const navigation = useNavigation();
  const changePage = ({ idProduct }) => {
    navigation.navigate(Routers.ProductDetail, { idProduct: idProduct });
  };

  return (
    <View style={[Styles.rowTagForYou]}>
      <TouchableOpacity
        onPress={() => changePage({ idProduct: idProduct })}
        style={[Styles.Container]}
      >
        <View style={{ margin: 10 }}>
          <Image style={Styles.imageForYou} source={{ uri: image }} />
        </View>
        <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>
          Best Seller
        </Text>
        <Text style={[TypographyStyles.nameFood, { paddingLeft: 20 }]}>
          {name}
        </Text>
        <Text
          style={[
            TypographyStyles.nameFood,
            { color: "#1BAC4B", marginLeft: 20 },
          ]}
        >
          {price} VNĐ
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CardProductDetail;
