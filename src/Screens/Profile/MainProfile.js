import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function MainProfile() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Định nghĩa các màn hình và tuyến đường điều hướng ở đây */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        {/* Thêm các màn hình khác vào đây nếu cần */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
