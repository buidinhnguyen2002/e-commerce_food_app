import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding } from '../utils/StyleUtil'
import { TypographyStyles } from '../utils/StyleUtil'
import { Colors } from '../utils/Colors'

const ChipCustom = ({ source, text, onPress, isChoose }) => {
    return (
        <TouchableHighlight underlayColor={isChoose ? '#1BAC4BAA' : '#1BAC4B34'} style={[Styles.chipContainer, isChoose ? Styles.chipChoose : {}]} onPress={onPress}>
            <View style={[CommonStyles.horizontal_direction, Padding.pd_horizontal_20, Padding.pd_vertical_10]}>
                <Image style={[Styles.chipImage, Margin.mr_10]} source={require('../../assets/Images/sandwich.png')} />
                <Text style={[TypographyStyles.normal, { color: isChoose ? Colors.white : Colors.primaryColor, fontWeight: 700 }]}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}
const Styles = StyleSheet.create({
    chipContainer: {
        borderRadius: 30,
        borderColor: Colors.primaryColor,
        borderWidth: 2,
    },
    chipImage: {
        width: 25,
        height: 25,
        objectFit: 'cover',
    },
    chipChoose: {
        backgroundColor: Colors.primaryColor,
    }
});

export default ChipCustom