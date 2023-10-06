import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Styles } from './CustomTextInput.style'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Padding } from '../../utils/StyleUtil';

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

export const SearchInput = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={Styles.searchContainer}>
            <TextInput style={Padding.pl_30} placeholder={placeholder} value={value} onChangeText={(text) => {
                onChangeText(text);
            }} />
            <Icon name='search' size={30} style={Styles.iconSearch} />
        </View>
    )
}

export default CustomTextInput