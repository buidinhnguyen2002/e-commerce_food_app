import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useState } from 'react'
import { CardOrder, CardOrderActive, CardOrderCancelled } from '../../components/Cards/Cards'
import SeparatorComponent from '../../components/SeparatorComponent'
import { CardOrderCompleted } from '../../components/Cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import ApiUrlConstants from '../../utils/api_constants'
import { loadOrder, updateStatusOrder } from '../../store/actions/userAction'
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const myOrder = useSelector(state => state.userReducer.order);
    const userId = useSelector(state => state.userReducer.id);
    const myOrderActive = myOrder.filter(order => order.status === "active");
    console.log(myOrderActive);
    const myOrderCompleted = myOrder.filter(order => order.status === "completed");
    const myOrderCancelled = myOrder.filter(order => order.status === "cancelled");
    const dispatch = useDispatch();
    useEffect(() => {
        loadMyOrder(userId);
    }, []);
    const TabOrder = ({ title, isActive, onPress }) => {
        return (
            <View style={[Styles.tabOrderItem, CommonStyles.center]}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={[TypographyStyles.normal, { color: isActive ? Colors.primaryColor : Colors.grey_02, fontSize: 22, fontWeight: 600 }]}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const GetBody = () => {
        if (tabIndex == 0) return (
            <FlatList contentContainerStyle={[Padding.pd_vertical_5, { paddingHorizontal: 2 }]} style={[{ paddingHorizontal: 2 }]} data={myOrderActive} renderItem={({ item }) => (<CardOrder onPressCancel={() => onPressCancelOrder(item.id)} totalCost={item.total_amount} title={item.name} isPaid={item.is_paid} quantityItem={item.quantity_item} image={item.image} />)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (<SeparatorComponent height={30} />)} />)
        if (tabIndex == 1) return (
            <FlatList contentContainerStyle={[Padding.pd_vertical_5, { paddingHorizontal: 2 }]} style={[{ paddingHorizontal: 2 }]} data={myOrderCompleted} renderItem={({ item }) => (<CardOrderCompleted totalCost={item.total_amount} title={item.name} isPaid={item.is_paid} quantityItem={item.quantity_item} image={item.image} />)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (<SeparatorComponent height={30} />)} />)
        if (tabIndex == 2) return (
            <FlatList contentContainerStyle={[Padding.pd_vertical_5, { paddingHorizontal: 2 }]} style={[{ paddingHorizontal: 2 }]} data={myOrderCancelled} renderItem={({ item }) => (<CardOrderCancelled totalCost={item.total_amount} title={item.name} isPaid={item.is_paid} quantityItem={item.quantity_item} image={item.image} />)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (<SeparatorComponent height={30} />)} />)
    }

    const loadMyOrder = async (userId) => {
        try {
            const response = await fetch(ApiUrlConstants.order + "?id=" + userId, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Lỗi mạng');
            }
            const data = await response.json();
            if (data['status'] == 'success') {
                const orderObj = data['data'];
                dispatch(loadOrder({ orders: orderObj }));
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onPressCancelOrder = async (orderId) => {
        console.log(orderId);
        try {
            const response = await fetch(ApiUrlConstants.order, {
                method: 'PATCH',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: orderId,
                    status: "cancelled",
                })
            });
            if (!response.ok) {
                throw new Error('Lỗi mạng');
            }
            const data = await response.json();
            console.log(data);
            if (data['status'] == 'success') {
                dispatch(updateStatusOrder({ id: orderId, status: "cancelled" }));
            }
        } catch (error) {
            console.error(error);
        }
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
                        <Image style={Styles.actionTopRight} source={require('../../../assets/Icons/search.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[CommonStyles.horizontal_direction, Styles.tabOrder, Padding.pd_vertical_15, Margin.mt_20]}>
                <TabOrder title={'Active'} isActive={tabIndex == 0} onPress={() => setTabIndex(0)} />
                <TabOrder title={'Completed'} isActive={tabIndex == 1} onPress={() => setTabIndex(1)} />
                <TabOrder title={'Cancelled'} isActive={tabIndex == 2} onPress={() => setTabIndex(2)} />
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