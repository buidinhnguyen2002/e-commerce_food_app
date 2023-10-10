import { View, Text } from 'react-native'
import React from 'react'
import { Margin } from '../utils/StyleUtil'
import { StyleSheet } from 'react-native'
import { Colors } from '../utils/Colors'

const SpecialOfferItem = () => {
    return (
        <View style={[Styles.specialOfferBanner]}>
        </View>
    )
}
const Styles = StyleSheet.create({
    specialOfferBanner: {
        height: 250,
        backgroundColor: Colors.primaryColor,
        borderRadius: 60,
    },
});

export default SpecialOfferItem