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
// const buttons = [
//     { id: 'myFavRes', iconSource: require('../../../assets/Icons/lich.png'), label: 'My favorite restaurants' },
//     { id: 'specOfPro', iconSource: require('../../../assets/Icons/ma.png'), label: 'Special Offer & Promo' },
//     { id: 'payMed', iconSource: require('../../../assets/Icons/wallet.png'), label: 'Payment Methods' },
//     { id: 'profile', iconSource: require('../../../assets/Icons/user.png'), label: 'Profile' },
//     { id: 'adress', iconSource: require('../../../assets/Icons/address.png'), label: 'Address' },
//     { id: 'noti', iconSource: require('../../../assets/Icons/notification-light_mode.png'), label: 'Notification' },
//     { id: 'security', iconSource: require('../../../assets/Icons/secu.png'), label: 'Security' },
//     { id: 'language', iconSource: require('../../../assets/Icons/language.png'), label: 'Language' },
//     { id: 'darkMode', iconSource: require('../../../assets/Icons/darkmode.png'), label: 'Dark Mode' },
//     { id: 'help', iconSource: require('../../../assets/Icons/help.png'), label: 'Help Center' },
//     { id: 'invite', iconSource: require('../../../assets/Icons/friend.png'), label: 'Invite Friends' },
//     { id: 'logOut', iconSource: require('../../../assets/Icons/logout.png'), label: 'Logout' },
//   ];
//   const ButtonWithIcon = ({ id, iconSource, label, onPress }) => (
//     <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress(id)}>
//       {/* Clickable Image */}
//       <Image source={iconSource} style={styles.icon} />
//       {/* Button name */}
//       <Text style={styles.label}>{label}</Text>
//     </TouchableOpacity>
//   );
export default Profile