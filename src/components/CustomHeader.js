import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Margin, TypographyStyles } from '../utils/StyleUtil'
import { Colors } from '../utils/Colors'

const CustomHeader = ({ title, imageSource, actionIcon }) => {
    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }]}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[{ fontSize: 24, fontWeight: 600 }, Margin.mr_5]}>{title}</Text>
                <Image source={imageSource} style={{ width: 30, height: 30 }} />
            </View>
        </View>
    )
}


export default CustomHeader