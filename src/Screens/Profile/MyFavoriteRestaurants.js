import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Styles } from '../../components/Cards/Cards.style';
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil';
import { Text } from 'react-native';
import { Colors } from '../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

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
                    <Image style={[Styles.imageHeart]} source={require('../../../assets/Icons/heart2.png')} />
                </View>
            </View>
        </View>
    )
}
const MyFavoriteRestaurants = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
        <ListTileCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingTop:20
  },
  
});

export default MyFavoriteRestaurants;
