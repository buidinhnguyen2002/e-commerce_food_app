import { View, Text, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { Center } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'

const Splash = () => {
  return (
    <SafeAreaView style={[CommonStyles.center, { flex: 1 }]}>
      <View style={[CommonStyles.horizontal_direction, CommonStyles.center]}>
        <Image source={require('../../../assets/Images/foodu.png')} />
        <Text style={[TypographyStyles.soBig, Margin.ml_10]}>Foodu</Text>
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  )
}

export default Splash