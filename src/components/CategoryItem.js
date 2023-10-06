import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../utils/Colors'
import { Margin, TypographyStyles } from '../utils/StyleUtil'

const CategoryItem = ({ source, name }) => {
    return (
        <View style={Styles.categoryItemContainer}>
            <Image style={Margin.mb_15} source={require('../../assets/Images/sandwich.png')} />
            <Text style={[TypographyStyles.normal, { fontWeight: 700 }]}>{name}</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    categoryItemContainer: {
        width: '22%',
        alignItems: 'center',
    }
});

export default CategoryItem