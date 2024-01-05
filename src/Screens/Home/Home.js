import { View, Text, Image, ScrollView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar, Badge } from "@rneui/themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommonButton, {
  OutlineButton,
} from "../../components/Buttons/CommonButton";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Colors";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { Chip, SearchBar, color } from "@rneui/base";
import { SearchInput } from "../../components/Inputs/CustomTextInput";
import CategoryItem from "../../components/CategoryItem";
import CardDiscount, { ListTileCard } from "../../components/Cards/Cards";
import { LinearGradient } from "expo-linear-gradient";
import ChipCustom from "../../components/ChipCustom";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import SpecialOfferItem from "../../components/SpecialOfferItem";
import SeparatorComponent from "../../components/SeparatorComponent";
import MyCart from "../Cart/MyCart";
import { useSelector, useDispatch } from "react-redux";
import { Center } from "native-base";
import { setFoodByCategory, selectCategory } from '../../store/actions/categorysAction';
import unorm from 'unorm';

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [chip, setChip] = useState(1);
  const navigation = useNavigation();
  const products = useSelector((state) => state.productsReducer.products);
  const categorys = useSelector((state) => state.categorysReducer.categorys);
  const cart = useSelector((state) => state.userReducer.cart.products);
  const quantityProductsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [showAllCategories, setShowAllCategories] = useState(false);
  const dispatch = useDispatch();
  const selectedCategoryId = useSelector(state => state.categorysReducer.selectedCategoryId);
  const foodByCategory = useSelector(state => state.categorysReducer.foodByCategory);

  const filterProductsByKeyword = () => {
    const normalizedKeyword = unorm.nfc(searchKeyword.toLowerCase());
    return products.filter((product) =>
      unorm.nfc(product.food_name.toLowerCase()).includes(normalizedKeyword)
    );
  };
  
  const getFoodByCategory = async (categoryId) => {
    try {
      const response = await fetch(ApiUrlConstants.getFoodOfCategory + "?id=" + categoryId, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Lỗi mạng');
      }

      const data = await response.json();

      if (data['status'] === 'success') {
        const foc = data['data'];
        dispatch(setFoodByCategory({ foodByCategory: foc }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    dispatch(selectCategory(1));
    setChip(1); // Chọn category_id số 1
  }, [searchKeyword]);
  // Khi người dùng chọn một danh mục, sử dụng useEffect để gọi hàm getFoodByCategory
  useEffect(() => {
    if (selectedCategoryId) {
      getFoodByCategory(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  // Khi người dùng chọn một danh mục
  const handleCategorySelect = categoryId => {
    dispatch(selectCategory(categoryId));
    getFoodByCategory(categoryId);
    setChip(categoryId);
  };

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

  const renderFoodList = () => {
    // Nếu không có từ khóa tìm kiếm, hiển thị danh sách theo danh mục
    if (!searchKeyword ) {
      return (
        <FlatList
          contentContainerStyle={[Padding.pd_vertical_5, Margin.mb_25, { paddingHorizontal: 2 }]}
          ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
          showsVerticalScrollIndicator={false}
          data={foodByCategory}
          renderItem={({ item, index }) => (
            <ListTileCard
              key={item.id}
              foodName={item.food_name}
              image={item.image_source}
              price={item.price}
              rate={item.rate}
              isDiscount={item.isDiscount}
              onPress={() => redirectFoodDetailScreen(Routers.ProductDetail, { idProduct: item.id })}
            />
          )}
        />
      );
    } else {
      // Nếu có từ khóa tìm kiếm, hiển thị danh sách lọc theo từ khóa
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          style={{ paddingHorizontal: 2 }}
        >
          {filterProductsByKeyword().map((food) => (
            <ListTileCard
              onPress={() =>
                redirectFoodDetailScreen(Routers.ProductDetail, {
                  idProduct: food.id,
                })
              }
              key={food.id}
              foodName={food.food_name}
              image={food.image_source}
              price={food.price}
              rate={food.rate}
            />
          ))}
        </ScrollView>
      );
    }
  };

  const redirectSpecialOffers = () => {
    navigation.navigate(Routers.SpecialOffers);
  };
  const redirectListCardScreen = (name) => {
    navigation.navigate(name);
  };
  const redirectScreens = (name) => {
    navigation.navigate(name);
  };
  const redirectCategoryDetail = (name, titleHeader) => {
    navigation.navigate(name, { titleHeader: titleHeader });
  };
  const redirectFoodDetailScreen = (name, { idProduct }) => {
    navigation.navigate(name, { idProduct: idProduct });
  };
  const changePage = () => {
    navigation.navigate(Routers.QRCodeScannerScreen);
  };
  return (
    <SafeAreaView style={Styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Padding.pd_horizontal_30]}>
          <View style={[Styles.topContainer, Margin.mb_15]}>
            <View style={Styles.topLeftContainer}>
              <Avatar
                size={55}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <View style={Margin.ml_25}>
                <Text
                  style={[
                    TypographyStyles.normal,
                    { color: Colors.grey },
                    Margin.mb_5,
                  ]}
                >
                  Deliver to
                </Text>
                <Text style={[TypographyStyles.normal]}>Ho Chi Minh City</Text>
              </View>
            </View>
            <View style={Styles.topRightContainer}>
              <View>
                <TouchableOpacity onPress={() => changePage()}>
                  <Image
                    style={CommonStyles.iconSize}
                    source={require("../../../assets/Icons/SearchQR.webp")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={Margin.ml_15}>
                <OutlineButton
                  image={require("../../../assets/Icons/empty-cart.png")}
                  onPress={() => redirectScreens(Routers.Cart)}
                  quantity={quantityProductsInCart}
                />
              </View>
            </View>
          </View>
          <View style={Margin.mb_25}>
            <SearchInput
              value={searchKeyword}
              onChangeText={(text) => {
                setSearchKeyword(text);
              }}
              placeholder={"What are you craving?"}
            />
          </View>
          <View style={[Margin.mb_30]}>
            {getHeaderHomeFragment({
              name: "Special Offers",
              onPress: redirectSpecialOffers,
            })}
            <SpecialOfferItem />
            <View style={[Styles.categoryContainer, Margin.mt_15]}>
              {showAllCategories
                ? categorys.map((category) => (
                    <CategoryItem
                      onPress={() =>
                        redirectCategoryDetail(Routers.CategoryDetail, {
                          idCategory: category.id,
                        })
                      }
                      key={category.id}
                      source={category.image_category}
                      name={category.name}
                    />
                  ))
                : categorys.slice(0, 6).map((category) => (
                    <CategoryItem
                      onPress={() =>
                        redirectCategoryDetail(Routers.CategoryDetail, {
                          idCategory: category.id,
                        })
                      }
                      key={category.id}
                      source={category.image_category}
                      name={category.name}
                    />
                  ))}

              {!showAllCategories && (
                <Text
                  style={[
                    TypographyStyles.normal,
                    Margin.ml_15,
                    { fontWeight: 500 },
                    { color: Colors.green },
                  ]}
                  onPress={() => redirectScreens(Routers.MoreCategory)}
                >
                  More
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={[Padding.pd_horizontal_30, Margin.mb_30]}>
          {getHeaderHomeFragment({
            name: "Discount Guaranteed!",
            icon: "abc",
            onPress: () => redirectListCardScreen(Routers.DiscountGuaranteed),
          })}
          <FlatList
            contentContainerStyle={[
              Padding.pd_vertical_5,
              { paddingHorizontal: 2 },
            ]}
            ItemSeparatorComponent={SeparatorComponent({ width: 25 })}
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1, 1]}
            horizontal={true}
            renderItem={({ item }) => <CardDiscount />}
          />
        </View>
        <View style={[Padding.pd_horizontal_30, Margin.mb_30]}>
          {getHeaderHomeFragment({
            name: "Recommended For You",
            icon: "abc",
            onPress: () => redirectListCardScreen(Routers.Recommended),
          })}
          <View style={[ Margin.mb_25]}>
        <FlatList
          contentContainerStyle={[Padding.pd_vertical_5, { height: 60 }]}
          ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
          showsHorizontalScrollIndicator={false}
          data={categorys.map(category => category.name)}
          horizontal={true}
          renderItem={({ item, index }) => (
            <ChipCustom
            text={item}
            isChoose={selectedCategoryId === categorys[index].id}
            onPress={() => handleCategorySelect(categorys[index].id)}
            
            />
          )}
        />
      </View>
      {renderFoodList()}
      
</View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 100,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  specialOfferHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  recommendContainer: {
    flex: 1,
    height: 700,
  },
});

export default Home;