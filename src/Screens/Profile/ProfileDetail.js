import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Profile.Styles'; // Import styles from your existing profile page
import { Avatar, color } from '@rneui/base';
import { ButtonBottom, CustomDropdown, CustomTextInputWithIcon, CustomTextInputWithSelectList, EditButton, EditButton2 } from './ButtonProfile';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import { Colors } from '../../utils/Colors';
import PhoneInputComponent from './PhoneInputComponent';
import DatePicker from 'react-native-neat-date-picker';
import { useNavigateToProfileDetail } from './CustomNavigationHook';
import SelectDropdown from 'react-native-select-dropdown';
import { useDispatch, useSelector } from "react-redux";
import { Padding } from '../../utils/StyleUtil';

const ProfileDetail = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [selectedGender, setSelectedGender] = useState('');
    const handleGenderChange = (itemValue) => {
      setSelectedGender(itemValue);
    };
    const avatar = useSelector((state) => state.userReducer.avatar);
    const handleIconPress = () => {
       
      }
    const gender = ["Male", "Female", "Others"];

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
                             <SelectDropdown
                                data={gender}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                                buttonStyle ={{
                                    width: '100%',
                                    height: 60,
                                    borderRadius: 20,
                                    padding: 15,
                                    marginTop: 20,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: Colors.lightGrey,
                       
                                  }}
                                defaultButtonText='Gender'
                                buttonTextStyle = {{
                                    color: 'green',
                                    textAlign:'center',
                                    fontSize: 14,
                                    backgroundColor: 'red',
                                  
                                }}
                                renderDropdownIcon={isOpened => {
                                    return <Image source={require('../../../assets/Icons/caret-down.png')} style = {styles.icon}/>
                                }}
                                dropdownIconPosition={'right'}
                                dropdownStyle={{
                                    backgroundColor: Colors.lightGrey,
                                    borderBottomLeftRadius:12,
                                    borderBottomRightRadius:12,
                                }}
                                rowStyle={{
                                    backgroundColor: Colors.lightGrey,
                                    borderBottomColor: Colors.grey_01,
                                }}
                                rowTextStyle={{
                                    color: Colors.grey_01,
                                    textAlign:'left',
                                    fontWeight:'bold'
                                }}
                            />
                             <CustomTextInputWithIcon
                                placeholder={"Email"}
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
