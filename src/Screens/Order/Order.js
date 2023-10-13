import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useState } from 'react'
import { CardOrder } from '../../components/Cards/Cards'
import SeparatorComponent from '../../components/SeparatorComponent'

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const TabOrder = ({ title, isActive }) => {
        return (
            <View style={[Styles.tabOrderItem, CommonStyles.center]}>
                <TouchableOpacity >
                    <Text style={[TypographyStyles.normal, { color: isActive ? Colors.primaryColor : Colors.grey_02, fontSize: 22, fontWeight: 600 }]}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const GetBody = () => {
        if (tabIndex == 0) return (
            <FlatList contentContainerStyle={[Padding.pd_vertical_5, { paddingHorizontal: 2 }]} style={[{ paddingHorizontal: 2 }]} data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} renderItem={() => (<CardOrder />)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (<SeparatorComponent height={30} />)} />
        )
        if (tabIndex == 1) return <View></View>
        if (tabIndex == 2) return <View></View>
    }
    return (
        <View style={[Styles.container, Padding.pd_horizontal_30, Padding.pd_vertical_20, { marginBottom: 240 }]} >
            <View style={[CommonStyles.horizontal_direction, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <View style={[CommonStyles.horizontal_direction, Styles.topLeft]}>
                    <Image style={[Styles.topLeftLogo, Margin.mr_20]} source={require('../../../assets/Images/foodu.png')} />
                    <Text style={TypographyStyles.big}>Orders</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={Styles.actionTopRight} source={require('../../../assets/Icons/cart.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[CommonStyles.horizontal_direction, Styles.tabOrder, Padding.pd_vertical_15, Margin.mt_20]}>
                <TabOrder title={'Active'} isActive={tabIndex == 0} />
                <TabOrder title={'Completed'} isActive={tabIndex == 1} />
                <TabOrder title={'Cancelled'} isActive={tabIndex == 2} />
            </View>
            <View style={[Padding.pd_vertical_20]}>
                {GetBody()}
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 100,
    },
    topLeft: {
        alignItems: 'center',
    },
    topLeftLogo: {
        width: 40,
        height: 40,
        objectFit: 'contain',
    },
    actionTopRight: {
        width: 25,
        height: 25,
        objectFit: 'contain',
    },
    tabOrder: {
        borderColor: Colors.paleGray,
        borderBottomWidth: 2,
        justifyContent: 'space-between',
    },
    tabOrderItem: {
        width: '33%',

    }
});

export default Order