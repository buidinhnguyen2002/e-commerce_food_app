import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Profile.Styles'; // Import styles from your existing profile page
import { Avatar } from '@rneui/base';
import { EditButton, EditButton2 } from './ButtonProfile';

const ProfileDetail = (navigation) => {
    return (
      <View style = {styles.page}>      
        {/* <View style = {styles.header}>
            <TouchableOpacity style = {styles.icon}>
            <Image source = {require('../../../assets/Icons/arrowBack.png')} />
            </TouchableOpacity>
            <Text style = {{paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}} >Profile</Text>
        </View> */}
        <View style = {styles.content}>
               <View style={styles.avatarEdit}>
                    <Avatar
                        size={80}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                    <View style = {[styles.editbutton,{marginTop: 50,marginLeft:-15,justifyContent:'flex-start'}]}><EditButton/></View>
                </View>
                <View style = {{flex: 80}}>
                    
                </View>
                 {/* <View style = {{flex: 25, borderBottomWidth: 1, borderColor: Colors.grey_01}}>
                    {buttons.slice(0, 3).map((button) => (
                    <ButtonWithIcon
                    key={button.id}
                    id={button.id}
                    iconSource={button.iconSource}
                    label={button.label}
                    onPress={handleButtonClick}
                    />
                     ))}
                </View>
                <View style = {{flex: 60}}>
                    {buttons.slice(3).map((button) => (
                    <ButtonWithIcon
                    key={button.id}
                    id={button.id}
                    iconSource={button.iconSource}
                    label={button.label}
                    onPress={handleButtonClick}
                    />
                     ))}
                </View> */}
        </View>
    </View>

    )
}
export default ProfileDetail;
