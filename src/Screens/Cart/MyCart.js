import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../../utils/Colors'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { FlatList } from 'react-native'
import SeparatorComponent from '../../components/SeparatorComponent'
import { DummyCart } from '../../Data/DummyData'
import { FontSize } from '../../utils/Constant'
import { useSelector } from 'react-redux'
import { Swipeable } from 'react-native-gesture-handler'



const CartItem = ({ foodName, quantity, price }) => {
    const rightSwipe = () => {
        return (
            <View style={[Styles.swipe, CommonStyles.center]}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/Icons/delete.png')} />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <>
            <Swipeable containerStyle={{ paddingTop: 2, paddingLeft: 2, paddingBottom: 2, marginRight: 1 }} renderRightActions={rightSwipe} friction={2}>
                <View style={[Styles.cardContainer]}>
                    <View style={[CommonStyles.horizontal_direction, { ...Padding.pd_horizontal_10 }]}>
                        <View style={[Styles.imageStack, { marginVertical: 10 }]}>
                            <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                            <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                            <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                        </View>
                        <View style={{ justifyContent: 'space-between', ...Padding.pd_vertical_20, ...Padding.pd_horizontal_30, marginLeft: 80 }}>
                            <Text style={TypographyStyles.medium}>{foodName}</Text>
                            <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                                <Text style={{ color: Colors.grey_02, ...TypographyStyles.small }}>{quantity} items</Text>
                                <Text style={{ color: Colors.grey_02, ...TypographyStyles.small, ...Margin.mg_horizontal_10 }}>|</Text>
                                <Text style={{ color: Colors.grey_02, ...TypographyStyles.small }}>2.4km</Text>
                            </View>
                            <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                                <Text style={{ ...TypographyStyles.big, ...Margin.mr_20, color: Colors.primaryColor }}>{quantity * price} VNĐ</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeable>
            <View style={[Styles.cardHolder]}></View>
        </>

    )
}
const EmptyCart = () => {
    return (
        <View style={[Styles.container, CommonStyles.center]}>
            <View style={[CommonStyles.center]}>
                <Image source={require('../../../assets/Images/clipboard.png')} style={Styles.cartImage} />
                <Text style={[TypographyStyles.medium, Margin.mt_30]}>Your cart is empty</Text>
                <Text style={[TypographyStyles.small, Margin.mt_10]}>You do not have any food in your cart.</Text>
            </View>
        </View>
    )
}

const MyCart = () => {
    const myCart = useSelector(state => state.userReducer.cart.products);
    console.log(myCart);
    const getBody = () => {
        if (myCart.length == 0) return (<EmptyCart />)
        return (
            <FlatList contentContainerStyle={[{ paddingRight: 2 }]} data={myCart}
                renderItem={({ item }) => (<CartItem foodName={item.food_name} quantity={item.quantity} price={item.price} />)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={() => (<SeparatorComponent height={30} />)} />
        )
    }
    return (
        <View style={[Styles.container, Padding.pd_horizontal_20, Padding.pb]}>
            {getBody()}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        paddingBottom: 20,
        height: '100%'
    },
    emptyCartContainer: {
        alignItems: 'center',

    },
    cartImage: {
        width: 300,
        height: 300,
        objectFit: 'contain',
    },
    emptyCartText: {
        ...TypographyStyles.normal,
        color: Colors.black,
        marginTop: 20,
        fontSize: FontSize.medium,
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    imageStack: {
        flexDirection: 'row',
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginRight: -85, // Để chúng xếp chồng lên nhau
        borderWidth: 3, // Độ rộng của border
        borderColor: Colors.white, // Màu của border
    },
    cardHolder: {
        backgroundColor: Colors.red,
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: 123.5,
        borderRadius: 24,
        left: 2,
        top: 2,
    },
    swipe: {
        width: 100,
    }
})

export default MyCart