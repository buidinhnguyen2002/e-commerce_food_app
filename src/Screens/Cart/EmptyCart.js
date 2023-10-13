import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil';
import { FontSize, Routers } from '../../utils/Constant';
import { useNavigation } from '@react-navigation/native';

const EmptyCart = () => {

  const navigation = useNavigation();
  const redirectHome=()=>{
    navigation.navigate('Home');
      }

    return (
        <SafeAreaView style={Styles.screenContainer}>
            <View style={[Padding.pd_horizontal_30]}>
                <View style={Styles.topContainer}>
                  <View style={Styles.topLeftContainer}>
                    <Image source={require('../../../assets/Icons/backArrow.png')} style={Styles.iconLeft} onPress={redirectHome} />
                    <Text style={Styles.myCartText}>My Cart</Text>
                  </View>
                  <View style={Styles.topRightContainer}>
                    <Image source={require('../../../assets/Icons/3cham.png')} style={Styles.iconRight}  />
                  </View>
                </View>
                <View style={Styles.emptyCartContainer}>
                    <Image source={require('../../../assets/Images/clipboard.png') }style={Styles.cartImage}  />
                    <Text style={Styles.emptyCartText}>Your cart is empty</Text>
                    <Text style={[TypographyStyles.normal, { color: Colors.black, marginTop: 10 }]}>You do not have any food in your cart this time.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 100,
        backgroundColor: Colors.white
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    topLeftContainer: {
      flexDirection: "row",
      alignItems: 'center',
  },
  topRightContainer: {
      flexDirection: "row",
      alignItems: 'center',
  },
    iconLeft: {
      width: 25,
      height: 20,
     
    },
    iconRight: {
      width: 25,
      height: 25,
   
    },
    emptyCartContainer: {
      alignItems: 'center',
      marginTop: 150,
    },
    cartImage: {
      width: 300,
      height: 300,
  }, 
  myCartText: {
    marginLeft: 15,
    fontSize: FontSize.large,
  },
    emptyCartText: {
        ...TypographyStyles.normal,
        color: Colors.black,
        marginTop: 20,
        fontSize: FontSize.medium,
    },
});

export default EmptyCart;
