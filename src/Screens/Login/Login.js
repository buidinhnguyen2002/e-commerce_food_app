import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../../components/Inputs/CustomTextInput'
import { Styles } from './Login.style'
import { Margin, TypographyStyles } from '../../utils/StyleUtil';
import CommonButton from '../../components/Buttons/CommonButton';
import { Colors } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { Routers } from '../../utils/Constant';

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const validate = () => {
        let validate = true;
        if (username == '') return false;
        if (password == '') return false;
    }
    const login = () => {
        navigation.navigate(Routers.Main);
    }
    return (
        <View style={Styles.container}>
            <Image source={require('../../../assets/Images/foodu.png')} style={[Styles.logo, Margin.mb_15]} />
            <Text style={[TypographyStyles.big, Margin.mb_10]}>Login to Your Account</Text>
            <CustomTextInput placeholder={'Enter Username'} onChangeText={(text) => {
                setUsername(text);
            }} />
            <CustomTextInput placeholder={'Enter Password'} type={'password'} onChangeText={(password) => {
                setPassword(password);
            }} />
            <CommonButton title={'Sign in'} bgColor={Colors.primaryColor} textColor={Colors.white} onPress={login} />
        </View>
    )
}

export default Login