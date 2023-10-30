// const PayMethod = () => {
//     const buttons = [
//       { id: 'paypal', , label: 'Paypal' },
//       { id: 'googlePay', label: 'Google Pay' },
//       { id: 'apple', label: 'Apple Pay' },
//       { id: 'masterCard', label: 'Special Offer & Promo' },
//       { id: 'payMed', iconSource: require('../../../assets/Icons/wallet.png'), label: 'Payment Methods' },
//       { id: 'profile', iconSource: require('../../../assets/Icons/user.png'), label: 'Profile' },
//       { id: 'adress', iconSource: require('../../../assets/Icons/address.png'), label: 'Address' },
//       { id: 'noti', iconSource: require('../../../assets/Icons/notification-light_mode.png'), label: 'Notification' },
//       { id: 'security', iconSource: require('../../../assets/Icons/secu.png'), label: 'Security' },
//       { id: 'language', iconSource: require('../../../assets/Icons/language.png'), label: 'Language' },
//       { id: 'help', iconSource: require('../../../assets/Icons/help.png'), label: 'Help Center' },
//       { id: 'logOut', iconSource: require('../../../assets/Icons/logout.png'), label: 'Logout' },
//     ];
// }  
import React from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import styles from './Profile.Styles';
import { Colors } from '../../utils/Colors';
import { color } from '@rneui/base';

const cardData = [
  { title: 'PayPal', status: 'Connected',icon: require('../../../assets/Icons/paypal.png') },
  { title: 'Google Pay', status: 'Connected', icon: require('../../../assets/Icons/google.png') },
  { title: 'Apple', status: 'Connected', icon: require('../../../assets/Icons/Apple.png') },
  { title: '*** *** ***123 ', status: 'Connected', icon: require('../../../assets/Icons/mastercard.png') },
  { title: '*** *** ***456', status: 'Connected', icon: require('../../../assets/Icons/mastercard.png') },
];
const renderCard = (card) => (
        <View style={[styles.buttonContainer,{backgroundColor: Colors.white, marginVertical:5, borderRadius:20}]} key={card.title}>
            <Image source={card.icon} style={[styles.topLeftLogo,{marginLeft:20}]} />
            <View style={{flex: 1,flexDirection:'row', justifyContent:'space-between', paddingLeft:20}}>
                <Text style={styles.text}>{card.title}</Text>
                <Text style={[styles.text,{color: Colors.green, marginEnd:20}]}>{card.status}</Text>
            </View>
        </View>
  );

const PayMethod = () => {
    return (
        <View style={styles.page}>
            <View style = {{height: '50%'}}> 
                {cardData.map((card) => renderCard(card))}
            </View>
          <View style = {{flex: 1, flexDirection: 'column', justifyContent:'flex-end', paddingBottom:20}}>
            <TouchableOpacity style={[styles.button,{marginTop:16}]}>
                <Text style={[styles.text,{color: Colors.white, fontWeight:'bold'}]}>Add New Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      );s
    };
    

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     padding: 16,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   icon: {
//     width: 32,
//     height: 32,
//     marginRight: 10,
//   },
//   cardContent: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   status: {
//     color: 'green',
//   },
//   addButton: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   addButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

export default PayMethod;
