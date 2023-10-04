import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react';
import { Avatar, Badge } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { OutlineButton } from '../../components/Buttons/CommonButton';
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { Margin, TypographyStyles } from '../../utils/StyleUtil';
import { SearchBar } from '@rneui/base';

const Home = () => {
    return (
        <SafeAreaView style={Styles.screenContainer}>
            <View style={[Styles.topContainer, Margin.mb_15]}>
                <View style={Styles.topLeftContainer}>
                    <Avatar
                        size={55}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                    <View style={Margin.ml_25}>
                        <Text style={[TypographyStyles.normal, { color: Colors.grey }, Margin.mb_5]}>Deliver to</Text>
                        <Text style={[TypographyStyles.medium]}>Ho Chi Minh City</Text>
                    </View>
                </View>
                <View style={Styles.topRightContainer}>
                    <View><OutlineButton /></View>
                    <View style={Margin.ml_15}><OutlineButton /></View>
                </View>
            </View>
            <View>
                <SearchBar placeholder='What are you craving' />
            </View>
        </SafeAreaView>
    )
}
const Styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    topLeftContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    topRightContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
});

export default Home