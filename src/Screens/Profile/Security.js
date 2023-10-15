import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { ChangPass, ChangPin, ToggleButton } from './ButtonProfile';
import styles from './StylesProfile';


const Security = () => {
    const buttons = [
        { id: 'Remenber', label: 'Remember me' },
        { id: 'FaceID', label: 'Face ID' },
        { id: 'BiometricID', label: 'Biometric ID' },
        { id: 'GoogleAuth', label: 'Google Authenticator' },
       ];
     
    const ButtonWithIcon = ({ id, label, onPress }) => (
        <View style={styles.buttonContainer} onPress={() => onPress(id)}>
            {/* Button name */}
            <Text style={styles.label}>
             {label}
             </Text>
            {/* <Text style={styles.label}>{label}</Text> */}
            <View style = {styles.editbutton}>
            {id === 'GoogleAuth' ? (
                <Image source={require('../../../assets/Icons/arrownext.png')} style={styles.profileIconButton} />         
                
                ) : (
            // Default arrow icon for other buttons
            <ToggleButton/>
            )}
            </View>
           
        </View>
      );
  return (
    <View style={[styles.page,{backgroundColor:'white'}]}>
      <View >
        {buttons.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.text}>{item.label}</Text>
            <ToggleButton />
          </View>
        ))}
        <View style = {{paddingTop: 20}}>
            <ChangPin/>
        </View>
        <View style = {{paddingTop: 20}}>
            <ChangPass/>
        </View>
      </View>
      
    </View>
  );
};


export default Security;
