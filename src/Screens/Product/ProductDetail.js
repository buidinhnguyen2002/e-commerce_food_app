import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Product/ProductDetail.Style";

const ProductDetail = () => {
  const miQuangData = [
    {
      name: "Mi quang Ha Noi kkkkkkk",
      price: "$12.00",
      imageSource: require("../../../assets/Images/Foods/miquang.png"),
    },
    {
      name: "Mi quang Ha Noi",
      price: "$12.00",
      imageSource: require("../../../assets/Images/Foods/pho2.png"),
    },

    // Thêm dữ liệu cho các mì quảng khác nếu cần
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItems, setClickedItems] = useState([]);

  const rows = [];
  for (let i = 0; i < miQuangData.length; i += 2) {
    const row = miQuangData.slice(i, i + 2);
    rows.push(row);
  }

  const handleItemClick = (itemIndex) => {
    if (clickedItems.includes(itemIndex)) {
      // Nếu item đã được nhấn, hãy bỏ nó khỏi mảng clickedItems
      setClickedItems(clickedItems.filter((index) => index !== itemIndex));
    } else {
      // Nếu item chưa được nhấn, hãy thêm nó vào mảng clickedItems
      setClickedItems([...clickedItems, itemIndex]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 130 }}
      >
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={require("../../../assets/Images/Foods/banhmi.png")}
          />
          <View style={Styles.iconsLeft}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon, Colors.white]}
              source={require("../../../assets/Icons/arrow.png")}
            />
          </View>
          <View style={Styles.iconContainer}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/heart.png")}
            />
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/share.png")}
            />
          </View>

          <View>
            <View style={Styles.rowContainer}>
              <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                Big Garden Salad
              </Text>
              <Image
                style={[
                  CommonStyles.iconSize,
                  { marginLeft: 70, marginTop: 30 },
                ]}
                source={require("../../../assets/Icons/arrownext.png")}
              />
            </View>
            <View>
              <View style={Styles.divider} />
              <View style={Styles.rowContainer}>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 20 }]}
                  source={require("../../../assets/Icons/star.png")}
                />
                <Text style={[TypographyStyles.medium, { marginRight: 20 }]}>
                  4.8
                </Text>
                <Text style={[TypographyStyles.small, Colors.grey]}>
                  (4.8k reviews)
                </Text>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    { marginRight: 20 },
                    { marginLeft: 150 },
                  ]}
                  source={require("../../../assets/Icons/arrownext.png")}
                />
              </View>
              <View style={Styles.divider} />
              <View style={Styles.rowContainer}>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 20 }]}
                  source={require("../../../assets/Icons/locate.png")}
                />
                <Text style={TypographyStyles.medium}>2.4 km</Text>
                <Image
                  style={[CommonStyles.iconSize, { marginLeft: 230 }]}
                  source={require("../../../assets/Icons/arrownext.png")}
                />
              </View>
              <View style={Styles.rowContainer}>
                <Text
                  style={[
                    Margin.mR_20,
                    { marginLeft: 50 },
                    TypographyStyles.small,
                    Colors.blackGrey,
                  ]}
                >
                  Delivery now
                </Text>
                <Text style={[Margin.mR_20]}>|</Text>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 20 }]}
                  source={require("../../../assets/Icons/bike.png")}
                />
                <Text style={[TypographyStyles.small, Colors.blackGrey]}>
                  $2.00
                </Text>
              </View>
              <View style={Styles.divider} />
              <View style={Styles.rowContainer}>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 20 }]}
                  source={require("../../../assets/Icons/z.png")}
                />
                <Text style={TypographyStyles.medium}>
                  Offers are available
                </Text>
                <Image
                  style={[CommonStyles.iconSize, { marginLeft: 100 }]}
                  source={require("../../../assets/Icons/arrownext.png")}
                />
              </View>
              <View style={Styles.divider} />
            </View>
          </View>
          <View style={{ backgroundColor: "#E5E5E5" }}>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              For you
            </Text>
            {rows.map((row, rowIndex) => (
              <View key={rowIndex} style={[Styles.rowTagForYou]}>
                {row.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={[
                      Styles.Container,
                      clickedItems.includes(itemIndex) && styles.clicked,
                    ]}
                    onPress={() => handleItemClick(itemIndex)}
                    onMouseEnter={() => {
                      setHoveredItem(itemIndex);
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null);
                    }}
                  >
                    <Image
                      style={Styles.imageForYou}
                      source={item.imageSource}
                    />
                    <Text
                      style={[TypographyStyles.nameFood, { paddingLeft: 20 }]}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        TypographyStyles.nameFood,
                        { color: "#1BAC4B", marginLeft: 20 },
                      ]}
                    >
                      {item.price}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
          <View style={{ backgroundColor: Colors.background }}>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              Menu
            </Text>
            <View style={[Styles.rowContainer, Styles.menuStyle]}>
              <Image
                style={CommonStyles.imageCart}
                source={require("../../../assets/Images/Foods/banhmi.png")}
              />
              <View style={{ margin: 30 }}>
                <Text style={TypographyStyles.nameFood}>
                  Bánh mì thịt nguội
                </Text>
                <Text style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}>
                  $12.000
                </Text>
              </View>
            </View>
            <View style={[Styles.rowContainer, Styles.menuStyle]}>
              <Image
                style={CommonStyles.imageCart}
                source={require("../../../assets/Images/Foods/banhmi.png")}
              />
              <View style={{ margin: 30 }}>
                <Text style={TypographyStyles.nameFood}>
                  Bánh mì thịt nguội
                </Text>
                <Text style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}>
                  $12.000
                </Text>
              </View>
            </View>
            <View style={[Styles.rowContainer, Styles.menuStyle]}>
              <Image
                style={CommonStyles.imageCart}
                source={require("../../../assets/Images/Foods/banhmi.png")}
              />
              <View style={{ margin: 30 }}>
                <Text style={TypographyStyles.nameFood}>
                  Bánh mì thịt nguội
                </Text>
                <Text style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}>
                  $12.000
                </Text>
              </View>
            </View>
            <View style={[Styles.rowContainer, { marginTop: 20 }]}>
              <TouchableOpacity
                style={[Styles.buttonProduct, { marginRight: 20 }]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    paddingTop: 5,
                  }}
                >
                  Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.buttonProduct}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    paddingTop: 10,
                  }}
                >
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clicked: {
    borderColor: Colors.green,
    borderWidth: 2,
  },
});

export default ProductDetail;
