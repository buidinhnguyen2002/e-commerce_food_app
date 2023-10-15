import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './StylesProfile';
import { Colors } from '../../utils/Colors';
import { EditButton } from './ButtonProfile';


    const cardData = [
        { title: 'Home', content: 'Times Square NYC, MAnhattan, 27', status:'Defaul' },
        { title: 'My Ofice', content: '5259 Blue Bill Park, PC 4627',status:'Defaul' },
        { title: 'My Apartment', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
        { title: 'Parent House', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
        { title: 'My Villa', content: 'v21833 Cycle Gallagher, PC 4662',status:'Defaul'},
      ];
      

const listAddress = (card) => (
  <View style={[styles.buttonContainer, { backgroundColor: Colors.white, marginVertical: 5, borderRadius: 30 }]}>
        <Image source={require('../../../assets/Icons/locate.png')} style={[styles.topLeftLogo, { marginLeft: 20 }]} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
        <View>
            <Text style={[styles.text,{fontWeight:'bold'}]}>{card.title}</Text>
            {/* {card.status && <Text style={[styles.text, { color: Colors.green, marginEnd: 20 }]}>{card.status}</Text>} */}
            <Text style={styles.text}>{card.content}</Text>
        </View>
        <View style = {[styles.editbutton,{paddingEnd:10}]}>
            <EditButton/>
        </View>
        </View>
  </View>
);

const Address = () => {
  return (
    <View style={styles.page}>
      <View style={{ height: '50%' }}>
        {cardData.map((card) => listAddress(card))}
      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 20 }}>
        <TouchableOpacity style={[styles.button, { marginTop: 16 }]}>
          <Text style={[styles.text, { color: Colors.white, fontWeight: 'bold' }]}>Add New Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;
