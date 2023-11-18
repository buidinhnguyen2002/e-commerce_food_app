import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Colors } from '../../utils/Colors';

const PhoneInputComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidNumber, setIsValidNumber] = useState(false);
  const phoneInputRef = React.useRef(null);

  const handlePhoneInputChange = (number) => {
    setPhoneNumber(number);
  };

  const handlePhoneInputEndEditing = () => {
    // Kiểm tra số điện thoại có hợp lệ hay không
    const isValid = phoneInputRef.current?.isValidNumber(phoneNumber);
    setIsValidNumber(isValid);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInputRef}
        defaultValue={phoneNumber}
        defaultCode="VN"
        layout="first"
        onChangeText={handlePhoneInputChange}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        // withDarkTheme
        // withShadow
        autoFocus
        flagButtonStyle={{ height: 60, width: 60, alignSelf:'center', backgroundColor: Colors.lightGrey}}
       // textInputStyle={styles.input}
        // textContainerStyle={styles.textContainer}
        onEndEditing={handlePhoneInputEndEditing}
      />
      {/* <Text style={styles.text}>
        Phone Number: {isValidNumber ? 'Valid' : 'Invalid'}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: 60,
    borderRadius: 20,
    // padding: 15,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.lightGrey
  },
  input: {
    flex:1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginTop: 10,

  },
  // textContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center', // Đảm bảo lá cờ và input cùng nằm trên một dòng
  // },
  text: {
    marginTop: 10,
  },
});

export default PhoneInputComponent;
