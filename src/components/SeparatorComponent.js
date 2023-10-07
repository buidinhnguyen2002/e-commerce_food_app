import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const SeparatorComponent = ({ width, height }) => {
    return (
        <View style={{ width: width, height: height }}></View>
    )
}

export default SeparatorComponent