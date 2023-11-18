import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Profile.Styles'; // Import styles from your existing profile page
import { Avatar, color } from '@rneui/base';
import { ButtonBottom, CustomDropdown, CustomTextInputWithIcon, CustomTextInputWithSelectList, EditButton, EditButton2 } from './ButtonProfile';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import { Colors } from '../../utils/Colors';
import PhoneInputComponent from './PhoneInputComponent';
import DatePicker from 'react-native-neat-date-picker';
  

const ProfileDetail = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectedGender, setSelectedGender] = useState('');
    const handleGenderChange = (itemValue) => {
      setSelectedGender(itemValue);
    };
    const handleIconPress = () => {
        // Xử lý sự kiện khi icon được nhấn
      }
    const genderItems = [
       {id:'male', label: 'Male', value: 'male' },
       {id:'female', label: 'Female', value: 'female' },
    ];  
    const [showDatePickerSingle, setShowDatePickerSingle] = useState(false);
    const [date, setDate] = useState('');
    const openDatePickerSingle = () => setShowDatePickerSingle(true);
    const onCancelSingle = () => {
      setShowDatePickerSingle(false)
    }
    const onConfirmSingle = (output) => {
      setShowDatePickerSingle(false)
      console.log(output)
      setDate(output.dateString)
    }
    const colorOptions = {
      headerColor: Colors.green,
      backgroundColor:Colors.white,
      selectedDateBackgroundColor: Colors.green,
      changeYearModalColor: Colors.green,
      weekDaysColor: Colors.green,
      confirmButtonColor: Colors.green
    }
    return (
        <View style = {styles.page}>      
            <View style = {styles.content}>
                <View style={[styles.avatarEdit,{flex:15}]}>
                        <Avatar
                            size={80}
                            rounded
                            source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                        />
                        <View style = {[styles.editbutton,{marginTop: 50,marginLeft:-15,justifyContent:'flex-start'}]}><EditButton/></View>
                </View>
                <View style = {{flex: 80}}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                            <CustomTextInput
                                placeholder={"FirstName"}
                                onChangeText={(text) => {
                                setFirstName(text);
                                }}
                            />
                            <CustomTextInput
                                placeholder={"LastName"}
                                onChangeText={(text) => {
                                setLastName(text);
                                }}
                            />
                            <CustomTextInputWithIcon
                                placeholder={"Enter date"}
                                iconSource={require('../../../assets/Icons/lich.png')}
                                onIconPress={openDatePickerSingle}
                                value={date}
                                editable={false}
                            />
                            {/* <CustomDropdown
                                selectedValue={selectedGender}
                                onValueChange={handleGenderChange}
                                items={genderItems}
                            /> */}
                             <CustomTextInputWithIcon
                                placeholder={"Male"}
                                iconSource={require('../../../assets/Icons/caret-down.png')}
                            />
                             <CustomTextInputWithIcon
                                placeholder={"Email"}
                                iconSource={require('../../../assets/Icons/lich.png')}
                            />
                             <CustomTextInputWithSelectList
                                placeholder={null}
                                iconSource={require('../../../assets/Icons/lich.png')}
                            />
                            <View>
                                <PhoneInputComponent/>
                            </View>

                    </ScrollView>
                </View>    
                        <ButtonBottom
                            buttonText="Update"
                        />
                </View> 
                <DatePicker
                                isVisible={showDatePickerSingle}
                                mode={'single'}
                                onCancel={onCancelSingle}
                                onConfirm={onConfirmSingle}
                                colorOptions={colorOptions}
                                
                            />
        </View>
        )
}
export default ProfileDetail;
