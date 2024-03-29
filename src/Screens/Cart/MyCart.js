import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Colors";
import { StyleSheet } from "react-native";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { FlatList } from "react-native";
import SeparatorComponent from "../../components/SeparatorComponent";
import { DummyCart } from "../../Data/DummyData";
import { FontSize, Routers } from "../../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { Swipeable } from "react-native-gesture-handler";
import { deleteProductInCart } from "../../store/actions/userAction";
import ApiUrlConstants from "../../utils/api_constants";
import CommonButton from "../../components/Buttons/CommonButton";
import CheckoutStyles from "../Checkout/Checkout.Style";
import { useEffect } from "react";
import { updateCart } from "../../store/actions/userAction";

const CartItem = ({ foodName, quantity, price, id, image,onUpdateQuantity }) => {
  const dispatch = useDispatch();
  const cartId = useSelector((state) => state.userReducer.cart.cartId);
  const rightSwipe = () => {
    return (
      <View style={[Styles.swipe, CommonStyles.center]}>
        <TouchableOpacity onPress={() => deleteProduct(id)}>
          <Image source={require("../../../assets/Icons/delete.png")} />
        </TouchableOpacity>
      </View>
    );
  };
  // const [quantity1, setQuantity] = useState(1);
  // const [quantity, setQuantity] = useState(1);
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [localTotalPrice, setLocalTotalPrice] = useState(quantity * price);
  const updateQuantity = (newQuantity) => {
    if (newQuantity >= 1) {
      setLocalQuantity(newQuantity);
    }
  };
  const updateQuantityInCart = (newQuantity) => {
    if (newQuantity >= 1) {
      const newTotalPrice = newQuantity * price;
      setLocalQuantity(newQuantity);
      setLocalTotalPrice(newTotalPrice);
      onUpdateQuantity(id, newQuantity, newTotalPrice);
    }
  };
 
  // const calculateTotalPrice = (quantity) => {
  //   return product.price * quantity;
  // };
  // const totalPrice = calculateTotalPrice(quantity);
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(ApiUrlConstants.cart, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_id: id,
          cart_id: cartId,
        }),
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        dispatch(deleteProductInCart({ id: id }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Update the quantity in the cart when 'localQuantity' changes
    updateQuantityInCart(localQuantity);
  }, [localQuantity]);
  return (
    <>
      <Swipeable
        containerStyle={{
          paddingTop: 2,
          paddingLeft: 2,
          paddingBottom: 2,
          marginRight: 1,
        }}
        renderRightActions={rightSwipe}
        friction={2}
      >
        <View style={[Styles.cardContainer]}>
          <View
            style={[
              CommonStyles.horizontal_direction,
              { ...Padding.pd_horizontal_10 },
            ]}
          >
            <View style={[Styles.imageStack, { marginVertical: 10 }]}>
              <Image source={{ uri: image }} style={Styles.foodImage} />
              <Image source={{ uri: image }} style={Styles.foodImage} />
              <Image source={{ uri: image }} style={Styles.foodImage} />
            </View>
            <View
              style={{
                justifyContent: "space-between",
                ...Padding.pd_vertical_20,
                ...Padding.pd_horizontal_30,
                marginLeft: 70,
                flexDirection: "row",
              }}
            >
              <View style={{}}>
                <Text style={TypographyStyles.medium}>{foodName}</Text>
                <View
                  style={[
                    CommonStyles.horizontal_direction,
                    { alignItems: "center" },
                  ]}
                >
                  <Image
                    style={[CommonStyles.iconSize, { marginRight: 20 }]}
                    source={require("../../../assets/Icons/bike.png")}
                  ></Image>
                  <Text
                    style={{
                      color: Colors.grey_02,
                      ...TypographyStyles.small,
                    }}
                  >
                    2.4km
                  </Text>
                </View>
                <View
                  style={[
                    CommonStyles.horizontal_direction,
                    { alignItems: "center" },
                  ]}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      ...Margin.mr_20,
                      color: Colors.primaryColor,
                    }}
                  >
                    {localTotalPrice} Đ
                  </Text>
                </View>
              </View>
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    // padding: 10,
                    paddingLeft: 10,
                    // paddingRight: 10,
                  },
                ]}
              >
                <TouchableOpacity onPress={() => updateQuantity(localQuantity - 1)}>
                  <Text
                    style={[
                      CheckoutStyles.buttonQuantity,
                      CheckoutStyles.quantityStyles,
                      {
                        fontWeight: "bold",
                        fontSize: 20,
                        textAlign: "center",
                      },
                    ]}
                  >
                    -
                  </Text>
                </TouchableOpacity>
                <View>
                  <TextInput
                    style={[
                      {
                        fontWeight: "500",
                        fontSize: 16,
                        textAlign: "center",
                        // width: 30,
                      },
                    ]}
                    value={localQuantity.toString()}
              onChangeText={(text) => {
                const parsedQuantity = parseInt(text, 10);
                if (!isNaN(parsedQuantity)) {
                  setLocalQuantity(parsedQuantity);
                }
              }}
              />
                </View>
                <TouchableOpacity onPress={() => updateQuantity(localQuantity + 1)}>
                  <Text
                    style={[
                      CheckoutStyles.buttonPlus,
                      CheckoutStyles.quantityStyles,
                      {
                        fontWeight: "700",
                        fontSize: 16,
                        textAlign: "center",
                      },
                    ]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
      <View style={[Styles.cardHolder]}></View>
    </>
  );
};
const EmptyCart = () => {
  return (
    <View style={[Styles.container, CommonStyles.center]}>
      <View style={[CommonStyles.center]}>
        <Image
          source={require("../../../assets/Images/clipboard.png")}
          style={Styles.cartImage}
        />
        <Text style={[TypographyStyles.medium, Margin.mt_30]}>
          Your cart is empty
        </Text>
        <Text style={[TypographyStyles.small, Margin.mt_10]}>
          You do not have any food in your cart.
        </Text>
      </View>
    </View>
  );
};

const MyCart = ({ navigation, route }) => {
  const myCart = useSelector((state) => state.userReducer.cart.products);
  const dispatch = useDispatch();
  const totalCost = myCart.reduce(
    (total, product) => total + product.localTotalPrice,
    0
  );
  const updateCartItem = (productId, newQuantity, newTotalPrice) => {
    // Cập nhật mảng myCart với giá trị mới
    const updatedCart = myCart.map(item =>
      item.id === productId
        ? { ...item, quantity: newQuantity, localTotalPrice: newTotalPrice }
        : item
    );

    // Dispatch action để cập nhật giỏ hàng trong Redux
    dispatch(updateCart(updatedCart));
  };
  const checkOut = () => {
    navigation.navigate(Routers.CheckOut, {
      products: myCart,
      totalCost: totalCost,
    });
  };
  const getBody = () => {
    if (myCart.length == 0) return <EmptyCart />;
    return (
      <>
        <FlatList
          contentContainerStyle={[Padding.pd_horizontal_20]}
          data={myCart}
          renderItem={({ item }) => (
            <CartItem
              image={item.image_source}
              foodName={item.food_name}
              quantity={item.quantity}
              price={item.price}
              id={item.id}
              onUpdateQuantity={updateCartItem}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <SeparatorComponent height={30} />}
        />
        <View
          style={{
            shadowColor: "black",
            shadowOffset: { width: 0.5, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 10,
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 20,
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              paddingBottom: 0,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {totalCost} VND
            </Text>
          </View>
          <CommonButton
            onPress={checkOut}
            bgColor={Colors.primaryColor}
            borderRadius={40}
            height={60}
            textColor={Colors.white}
            title={"Check out"}
            fontWeight={700}
            size={20}
            margin={20}
          />
        </View>
      </>
    );
  };
  return <View style={[Styles.container, Padding.pb]}>{getBody()}</View>;
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingBottom: 20,
    height: "100%",
  },
  emptyCartContainer: {
    alignItems: "center",
  },
  cartImage: {
    width: 300,
    height: 300,
    objectFit: "contain",
  },
  emptyCartText: {
    ...TypographyStyles.normal,
    color: Colors.black,
    marginTop: 20,
    fontSize: FontSize.medium,
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  imageStack: {
    flexDirection: "row",
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: -85, // Để chúng xếp chồng lên nhau
    borderWidth: 3, // Độ rộng của border
    borderColor: Colors.white, // Màu của border
  },
  cardHolder: {
    backgroundColor: Colors.red,
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: 120,
    borderRadius: 24,
    left: 2,
    top: 2,
  },
  swipe: {
    width: 100,
  },
});

export default MyCart;
