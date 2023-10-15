import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Product/ProductDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import OverView from "./OverView";
<<<<<<<<< Temporary merge branch 1
import CardProductDetail from "../../components/Cards/CardProductDetail";
import CardMenu from "../../components/Cards/CardMenu";

const ProductDetail = () => {
=========

const ProductDetail = () => {
  // const miQuangData = [
  //   {
  //     id: 0,
  //     name: "Mi quang Ha Noi kkkkkkk",
  //     price: "$12.00",
  //     imageSource: require("../../../assets/Images/Foods/miquang.png"),
  //   },
  //   {
  //     id: 1,
  //     name: "Mi quang Ha Noi",
  //     price: "$12.00",
  //     imageSource: require("../../../assets/Images/Foods/pho2.png"),
  //   },

  //   // Thêm dữ liệu cho các mì quảng khác nếu cần
  // ];
  // const MenuData = [
  //   {
  //     id: 0,
  //     name: "Mi quang Ha Noi kkkkkkk",
  //     price: "$12.00",
  //     imageSource: require("../../../assets/Images/Foods/miquang.png"),
  //   },
  //   {
  //     id: 1,
  //     name: "Mi quang Ha Noi",
  //     price: "$12.00",
  //     imageSource: require("../../../assets/Images/Foods/pho2.png"),
  //   },

  //   // Thêm dữ liệu cho các mì quảng khác nếu cần
  // ];
  // const [hoveredItem, setHoveredItem] = useState(null);
  // const [clickedItems, setClickedItems] = useState([]);

  // const rows = [];
  // for (let i = 0; i < miQuangData.length; i += 2) {
  //   const row = miQuangData.slice(i, i + 2);
  //   rows.push(row);
  // }

  // const handleItemClick = (itemIndex) => {
  //   if (clickedItems.includes(itemIndex)) {
  //     // Nếu item đã được nhấn, hãy bỏ nó khỏi mảng clickedItems
  //     setClickedItems(clickedItems.filter((index) => index !== itemIndex));
  //   } else {
  //     // Nếu item chưa được nhấn, hãy thêm nó vào mảng clickedItems
  //     setClickedItems([...clickedItems, itemIndex]);
  //   }

  //   console.log("clickedItems:", clickedItems); // Kiểm tra giá trị của clickedItems
  // };

>>>>>>>>> Temporary merge branch 2
  const navigation = useNavigation();
  const getHeaderHomeFragment = ({ name, icon, onPress }) => {
    return (
      <View style={[Styles.specialOfferHeader, Margin.mb_30]}>
        <View style={[{ flexDirection: "row" }]}>
          <Text style={[TypographyStyles.medium, Margin.mr_10]}>{name}</Text>
          {icon && (
            <Image source={require("../../../assets/Icons/emoji.png")} />
          )}
        </View>
        <Text
          onPress={onPress}
          style={[
            TypographyStyles.normal,
            { color: Colors.primaryColor, fontWeight: 600 },
          ]}
        >
          See All
        </Text>
      </View>
    );
  };
  const redirectSpecialOffers = () => {
    navigation.navigate(Routers.SpecialOffers);
  };
  const OverViewScreen = () => {
    navigation.navigate(Routers.OverView);
  };
  const RatingAndReview = () => {
    navigation.navigate(Routers.RatingAndReview);
  };
  const OffersAreAvailable = () => {
    navigation.navigate(Routers.OffersAreAvailable);
  };
  const CheckOutScreen = () => {
    navigation.navigate(Routers.CheckOut);
  };
  const [clickedMenuItems, setClickedMenuItems] = useState([]);

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
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 20,
                },
              ]}
            >
              <View style={Styles.rowContainer}>
                <TouchableOpacity onPress={OverViewScreen}>
                  <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                    Big Garden Salad
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    { marginLeft: 70, marginTop: 30 },
                  ]}
                  source={require("../../../assets/Icons/arrownext.png")}
                />
              </View>
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity onPress={RatingAndReview}>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 20,
                    },
                  ]}
                >
                  <View style={Styles.rowContainer}>
                    <Image
                      style={[CommonStyles.iconSize, { marginRight: 20 }]}
                      source={require("../../../assets/Icons/star.png")}
                    />
                    <Text
                      style={[TypographyStyles.medium, { marginRight: 20 }]}
                    >
                      4.8
                    </Text>
                    <Text style={[TypographyStyles.small, Colors.grey]}>
                      (4.8k reviews)
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={[
                        CommonStyles.iconSize,
                        { alignItems: "flex-end", justifyContent: "flex-end" },
                      ]}
                      source={require("../../../assets/Icons/arrownext.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginRight: 20,
                  },
                ]}
              >
                <View style={Styles.rowContainer}>
                  <Image
                    style={[CommonStyles.iconSize, { marginRight: 20 }]}
                    source={require("../../../assets/Icons/locate.png")}
                  />
                  <Text style={TypographyStyles.medium}>2.4 km</Text>
                </View>
                <View>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      {
                        alignItems: "baseline",
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                      },
                    ]}
                    source={require("../../../assets/Icons/arrownext.png")}
                  />
                </View>
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
                <Text style={Margin.ml_20}>|</Text>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    { marginLeft: 20, marginRight: 20 },
                  ]}
                  source={require("../../../assets/Icons/bike.png")}
                />
                <Text style={[TypographyStyles.small, Colors.blackGrey]}>
                  $2.00
                </Text>
              </View>

              <View style={Styles.divider} />
              <TouchableOpacity onPress={OffersAreAvailable}>
                <View
                  style={[
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginRight: 20,
                    },
                  ]}
                >
                  <View style={Styles.rowContainer}>
                    <Image
                      style={[CommonStyles.iconSize, { marginRight: 20 }]}
                      source={require("../../../assets/Icons/z.png")}
                    />
                    <Text style={TypographyStyles.medium}>
                      Offers are available
                    </Text>
                  </View>
                  <View>
                    <Image
                      style={[
                        CommonStyles.iconSize,
                        {
                          alignItems: "baseline",
                          justifyContent: "flex-end",
                          marginLeft: "auto",
                        },
                      ]}
                      source={require("../../../assets/Icons/arrownext.png")}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
            </View>
          </View>
          <View>
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
                      style={[Styles.cardTicker, TypographyStyles.tinySmall]}
                    >
                      Best Seller
                    </Text>
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
          <View>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              Menu
            </Text>
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
                  <Image
                    style={CommonStyles.imageCart}
                    source={item.imageSource}
                  />
                  <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>
                    New
                  </Text>
                  <View style={{ margin: 30 }}>
                    <Text style={TypographyStyles.nameFood}>{item.name}</Text>
                    <Text
                      style={[{ color: "#1BAC4B" }, TypographyStyles.nameFood]}
                    >
                      {item.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

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
              <TouchableOpacity
                onPress={CheckOutScreen}
                style={Styles.buttonProduct}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    paddingTop: 5,
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
  menuItem: {
    borderWidth: 2,
    borderColor: "transparent", // Màu viền mặc định là trong suốt
  },
  clicked: {
    borderColor: Colors.green, // Màu viền khi ấn
  },
});

export default ProductDetail;
