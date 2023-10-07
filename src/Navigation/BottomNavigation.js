import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationButton } from '../components/Buttons/CommonButton';
import { Colors } from '../utils/Colors';

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ changeBottomNavigationIndex }) {
    return (
        <View style={Styles.container}>
            <NavigationButton onPress={changeBottomNavigationIndex} index={0} />
            <NavigationButton onPress={changeBottomNavigationIndex} index={1} />
            <NavigationButton onPress={changeBottomNavigationIndex} index={2} />
            <NavigationButton onPress={changeBottomNavigationIndex} index={3} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: Colors.grey,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderColor: Colors.lightGrey,
    }
});