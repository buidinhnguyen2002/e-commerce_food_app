import React from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import styles from './Profile.Styles';
import { Colors } from '../../utils/Colors';
import { color } from '@rneui/base';
import { ButtonBottom } from './ButtonProfile';

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
          {/* <View style = {{flex: 1, flexDirection: 'column', justifyContent:'flex-end', paddingBottom:20}}>
            <TouchableOpacity style={[styles.button,{marginTop:16}]}>
                <Text style={[styles.text,{color: Colors.white, fontWeight:'bold'}]}>Add New Card</Text>
            </TouchableOpacity>
          </View> */}
          <ButtonBottom
            buttonText="Add New Card"
          />
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
