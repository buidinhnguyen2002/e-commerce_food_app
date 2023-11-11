import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Profile.Styles'; // Import styles from your existing profile page
import { Avatar, color } from '@rneui/base';
import { ButtonBottom, CustomDropdown, CustomTextInputWithIcon, CustomTextInputWithSelectList, EditButton, EditButton2 } from './ButtonProfile';
import CustomTextInput from '../../components/Inputs/CustomTextInput';
import { Colors } from '../../utils/Colors';

  

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
                                placeholder={null}
                                iconSource={require('../../../assets/Icons/lich.png')}
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
                             <CustomTextInputWithIcon
                                placeholder={"Country"}
                                iconSource={require('../../../assets/Icons/caret-down.png')}
                            />
                    </ScrollView>
                </View>    
                        
                        {/* <View style={{justifyContent: 'flex-end', marginBottom: 20, marginTop:20}}>
                            <TouchableOpacity style={styles.button}>
                            <Text style={[styles.text, { color: Colors.white, fontWeight: 'bold' }]}>Add New Address</Text>
                            </TouchableOpacity>
                        </View> */}
                        <ButtonBottom
                            buttonText="Update"
                        />
                </View> 
        </View>
        )
}
export default ProfileDetail;
