import { View, Text } from 'react-native'
import React from 'react'
import { Categorys } from '../../Data/DummyData'
import CategoryItem from '../../components/CategoryItem'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { ScrollView } from 'react-native'

const Category = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: Colors.white }}>
            <View style={[CommonStyles.horizontal_direction, Styles.container, Padding.pd_horizontal_30, Padding.pd_vertical_20]}>
                {Categorys.map((category, index) => (<CategoryItem key={index} name={category.name} />))}
            </View>
        </ScrollView>

    )
}
const Styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        rowGap: 40,
        columnGap: 20,
    }
});

export default Category