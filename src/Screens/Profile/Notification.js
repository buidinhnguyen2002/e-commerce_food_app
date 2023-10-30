import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ToggleButton } from './ButtonProfile';
import styles from './Profile.Styles';

const noti = [
  { title: 'General Notification' },
  { title: 'Sound' },
  { title: 'Vibrate' },
  { title: 'Special Offers' },
  { title: 'Promo & Discount' },
  { title: 'Payments' },
  { title: 'Cashback' },
  { title: 'App Updates' },
  { title: 'New Service Available' },
  { title: 'New Tips Available' },
  
];
const Notification = () => {
  return (
    <View style={[styles.page,{backgroundColor:'white'}]}>
      <ScrollView >
        {noti.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.text}>{item.title}</Text>
            <ToggleButton />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};



export default Notification;
