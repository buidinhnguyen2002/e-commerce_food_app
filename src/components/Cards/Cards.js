import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Styles } from './Cards.style'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { FontSize } from '../../utils/Constant'
import { Colors } from '../../utils/Colors'

export const CardDiscount = () => {
    return (
        <View style={[Styles.cardContainer, Styles.cardDiscount]}>
            <View>
                <Image style={Styles.image} source={require('../../../assets/Images/food.png')} />
                <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>Promo</Text>
            </View>
            <Text style={[TypographyStyles.medium, Margin.mb_15, Margin.mt_15]}>Mixed Salad Bonb</Text>
            <View style={[{ flexDirection: 'row', alignItems: 'center' }, Margin.mb_15]}>
                <Text style={[TypographyStyles.verySmall, { color: Colors.grey_02 }]}>1.5 km</Text>
                <Text style={[TypographyStyles.verySmall, { color: Colors.grey_02 }, Margin.ml_5]}>|</Text>
                <View style={[{ flexDirection: 'row', alignItems: 'center' }, Margin.ml_5]}>
                    <Icon style={[Margin.mr_10, { color: Colors.yellow }]} name='star' size={20} />
                    <Text style={[TypographyStyles.verySmall, { color: Colors.grey_02 }]}>4.8 (1.2k)</Text>
                </View>
            </View>
            <View style={[CommonStyles.horizontal_direction, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                    <Text style={[TypographyStyles.medium, { color: Colors.primaryColor }]}>$6.00</Text>
                    <Text style={[TypographyStyles.verySmall, { color: Colors.grey_02 }, Margin.ml_10]}>|</Text>
                    <View style={[CommonStyles.horizontal_direction, Margin.ml_10, { alignItems: 'center' }]}>
                        <Image style={[Styles.imageBike, Margin.mr_10]} source={require('../../../assets/Images/bike.png')} />
                        <Text style={[TypographyStyles.verySmall, { color: Colors.grey_02 }]}>$2.00</Text>
                    </View>
                </View>
                <Image style={[Styles.imageHeart]} source={require('../../../assets/Icons/heart_outline.png')} />
            </View>
        </View>
    )
}
export const ListTileCard = ({ isDiscount }) => {
    return (
        <View style={[Styles.cardContainer, CommonStyles.horizontal_direction, Margin.mb_20, Margin.mg_horizontal_1]}>
            <View style={[{ width: '35%' }, Margin.mr_25]}>
                <Image style={[Styles.imageListTile]} source={require('../../../assets/Images/food.png')} />
                {isDiscount && <Text style={[Styles.cardTicker, TypographyStyles.tinySmall]}>Promo</Text>}
            </View>
            <View style={[Padding.pd_vertical_10, { justifyContent: 'space-between', flex: 1 }]}>
                <Text style={TypographyStyles.medium}>Vegetarian Noodles</Text>
                <View style={CommonStyles.horizontal_direction}>
                    <Text style={[TypographyStyles.normal, { color: Colors.grey_02 }]}>800 m</Text>
                    <Text style={[TypographyStyles.normal, { color: Colors.grey_02 }, Margin.ml_5]}>|</Text>
                    <View style={[{ flexDirection: 'row', alignItems: 'center' }, Margin.ml_5]}>
                        <Icon style={[Margin.mr_10, { color: Colors.yellow }]} name='star' size={20} />
                        <Text style={[TypographyStyles.normal, { color: Colors.grey_02 }]}>4.8 (1.2k)</Text>
                    </View>
                </View>
                <View style={[CommonStyles.horizontal_direction, { alignItems: 'center', justifyContent: 'space-between' }]}>
                    <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                        <Image style={[Styles.imageBike, Margin.mr_10]} source={require('../../../assets/Images/bike.png')} />
                        <Text style={[TypographyStyles.normal, { color: Colors.grey_02 }]}>$2.00</Text>
                    </View>
                    <Image style={[Styles.imageHeart]} source={require('../../../assets/Icons/heart_outline.png')} />
                </View>
            </View>
        </View>
    )
}

export default CardDiscount