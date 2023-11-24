import React, { useEffect, useState } from 'react';
import { StyleSheet } from "react-native";
import { Colors } from '../../utils/Colors';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setFoodByCategory, selectCategory } from '../../store/actions/categorysAction';
import { ListTileCard } from '../../components/Cards/Cards';
import SeparatorComponent from '../../components/SeparatorComponent';
import ChipCustom from '../../components/ChipCustom';  // Thêm import
import { Padding, Margin } from '../../utils/StyleUtil';
import { Routers } from '../../utils/Constant';
import { useNavigation } from "@react-navigation/native";

const ListCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedCategoryId = useSelector(state => state.categorysReducer.selectedCategoryId);
  const foodByCategory = useSelector(state => state.categorysReducer.foodByCategory);
  const categorys = useSelector(state => state.categorysReducer.categorys);  // Thêm dòng này
  const products = useSelector((state) => state.productsReducer.products);
  const [selectCategoryId, setSelectedCategoryId] = useState(1);


  const redirectFoodDetailScreen = (name, { idProduct }) => {
    navigation.navigate(name, { idProduct: idProduct });
  };
  // Hàm để lấy danh sách sản phẩm dựa trên category_id
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
    dispatch(selectCategory(1)); // Chọn category_id số 1
  }, [selectCategoryId]);
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
    
  };
  useEffect(() => {
    if (categorys.length > 0) {
      setSelectedCategoryId(categorys[0].id);
      getFoodByCategory(categorys[0].id);
    }
  }, [categorys]);

  return (
    <View style={Styles.container}>
      <View style={[Padding.pd_horizontal_30, Margin.mb_25]}>
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

      <FlatList
        contentContainerStyle={[Padding.pd_vertical_5, Margin.mb_25, { paddingHorizontal: 30 }]}
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
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingBottom: 50,
  },
});
export default ListCard;