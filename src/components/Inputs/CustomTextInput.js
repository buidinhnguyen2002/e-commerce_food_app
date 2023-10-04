import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './CustomTextInput.style'

const CustomTextInput = ({ placeholder, type, value, onChangeText }) => {
    const [text, setText] = useState(value);
    return (
        <View style={Styles.container}>
            <TextInput placeholder={placeholder} secureTextEntry={type == 'password' ? true : false} value={value} onChangeText={(text) => {
                onChangeText(text);
            }} />
        </View>
    )
}

export default CustomTextInput