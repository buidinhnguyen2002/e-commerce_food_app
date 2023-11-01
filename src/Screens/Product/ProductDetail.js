import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
<<<<<<< HEAD
import OverView from "./OverView";
<<<<<<<<< Temporary merge branch 1
=======
>>>>>>> d8f6aa182206c8ae4d4da6bf4d471c14bd72baaa
import CardProductDetail from "../../components/Cards/CardProductDetail";
import CardMenu from "../../components/Cards/CardMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/userAction";
import ApiUrlConstants from "../../utils/api_constants";

<<<<<<< HEAD
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
=======
const ProductDetail = ({ navigation, route }) => {
  const productId = route.params.idProduct;
  const product = useSelector(state => state.productsReducer.products.find(product => product.id == productId));
  const cartId = useSelector(state => state.userReducer.cart.cartId);
  const productsInCart = useSelector(state => state.userReducer.cart.products);
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      title: product.food_name,
    });
  }, [productId]);
>>>>>>> d8f6aa182206c8ae4d4da6bf4d471c14bd72baaa
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
  const CheckOutScreen = () => {
    navigation.navigate(Routers.CheckOut);
  };
  const addProductToCart = async ({ quantity }) => {
    product.quantity = quantity ?? 1;
    const productInCart = productsInCart.find((product) => product.id == productId);
    const method = productInCart ? "PUT" : "POST";
    const quantityUpdateDb = productInCart != null ? quantity + productInCart.quantity : quantity;
    try {
      const response = await fetch(ApiUrlConstants.cart, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          food_id: productId,
          cart_id: cartId,
          quantity: quantityUpdateDb,
        })
      });
      if (!response.ok) {
        throw new Error('Lỗi mạng');
      }
      const data = await response.json();
      if (data['status'] == 'success') {
        dispatch(addToCart({ product: product }));
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={{ uri: product.image_source }}
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
              <View
                style={{ flexDirection: "column", margin: 20, marginTop: 0 }}
              >
                <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                  {product.food_name}
                </Text>
                <Text
                  style={{
                    color: Colors.primaryColor,
                    fontSize: 20,
                    fontWeight: "bold",

                    paddingTop: 10,
                  }}
                >
                  Price : {product.price} VNĐ
                </Text>
                <Text style={{ paddingTop: 10 }}>
                  {product.description}
                </Text>
              </View>
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity >
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
                      style={[
                        CommonStyles.iconSize,
                        { marginRight: 20, backgroundColor: Colors.white },
                      ]}
                      source={require("../../../assets/Icons/star.png")}
                    />
                    <Text
                      style={[TypographyStyles.medium, { marginRight: 20 }]}
                    >
                      {product.rate}
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
              <View style={[Styles.rowContainer, { marginTop: 20 }]}>
                <TouchableOpacity onPress={() => addProductToCart({ quantity: 1 })}
                  style={[Styles.buttonProduct, { marginRight: 20 }]}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 500,
                      color: "#FFFFFF",
                      //   paddingTop: 5,
                    }}
                  >
                    <Image
                      style={[CommonStyles.iconSize, { padding: 10 }]}
                      source={require("../../../assets/Icons/empty-cart.png")}
                    />
<<<<<<< HEAD
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
=======
                    Cart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={CheckOutScreen}
                  style={Styles.buttonProduct}
>>>>>>> d8f6aa182206c8ae4d4da6bf4d471c14bd72baaa
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
