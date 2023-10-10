import { View, Text, Image, SafeAreaViewComponent } from 'react-native'
import React from 'react'
import styles from './StylesProfile'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../../components/Inputs/CustomTextInput.style'
import { FontSize } from '../../utils/Constant'
import { Avatar } from '@rneui/themed'
import { Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { EditButton, IconHomeButton, MoreButton, OutlineButton } from '../../components/Buttons/CommonButton'


const Profile = () => {
    return (
      <View style = {styles.page}>      
        <View style = {styles.header}>
            <Image source = {require('../../../assets/Images/foodu.png')} 
                style = {styles.icon}
            />
            <Text style = {{paddingLeft: 20,fontSize: 20, fontWeight: 'bold'}} >Profile</Text>
            <View style = {{flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                <MoreButton/>
            </View>
        </View>
        <View style = {styles.content}>
                <View style={styles.avatar}>
                    <Avatar
                        size={55}
                        rounded
                        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                    />
                    <View style={Margin.ml_25}>
                        <Text style={[TypographyStyles.normal, Margin.mb_5]}>Andrew Ainsley</Text>
                        <Text style={[TypographyStyles.normal, { color: Colors.grey }]}>+1 111 467 378 399</Text>
                    </View>
                    
                    <View style = {{flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf: 'center'}}><EditButton/></View>
                </View>
                <View style = {{flex: 25, borderBottomWidth: 1, borderColor: Colors.grey}}></View>
                <View style = {{flex: 60}}></View>
        </View>
    </View>

    )
}

export default Profile