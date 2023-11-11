import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { ToggleButton } from './ButtonProfile';
import styles from './Profile.Styles';
import { Margin } from '../../utils/StyleUtil';

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
    <View style={[styles.page]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {noti.map((item, index) => (
            <TouchableOpacity style={styles.item} key={index}>
              <Text style={styles.text}>{item.title}</Text>
              <ToggleButton />
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};



export default Notification;
