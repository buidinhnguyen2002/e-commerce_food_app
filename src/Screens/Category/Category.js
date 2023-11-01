import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { CommonStyles, Margin, Padding } from '../../utils/StyleUtil';
import { Colors } from '../../utils/Colors';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import { Routers } from '../../utils/Constant'; // Import Routers from the correct path

const Category = () => {
    const categorys = useSelector((state) => state.categorysReducer.categorys);

    // Define the redirectCategoryDetail function or import it from the appropriate source
    const redirectCategoryDetail = (name, titleHeader) => {
        navigation.navigate(name, { titleHeader: titleHeader });
      };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={[CommonStyles.horizontal_direction, Styles.container, Padding.pd_horizontal_20, Padding.pd_vertical_20]}>
                {categorys.map(category => (
                    <CategoryItem
                        key={category.id}
                        source={category.image_category}
                        name={category.name}
                        onPress={() => redirectCategoryDetail(Routers.CategoryDetail, { idCategory: category.id })}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const Styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        rowGap: 10,
        columnGap: 10,
    }
});

export default Category;
