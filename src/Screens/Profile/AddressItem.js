// AddressItem.js

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Margin, Padding } from '../../utils/StyleUtil';
import { EditButton } from './ButtonProfile';
import { Colors } from '../../utils/Colors';
import styles from './Profile.Styles';

const AddressItem = ({ number, street, district, city}) => (
  <View style={Margin.mb_20}>
    <TouchableOpacity style={styles.buttonContainer}>
      <Image source={require('../../../assets/Icons/locate.png')} style={styles.topLeftLogo} />
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
        <View>
          <Text style={[styles.text, { fontWeight: 'bold' }]}>{number} {street}</Text>
          <Text style={styles.text}>{district} {city}</Text>
        </View>
        <View style={[styles.editbutton, Padding.pb_10]}>
          <EditButton />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default AddressItem;
