import { View, Text, Image, SafeAreaViewComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './StylesProfile'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../../components/Inputs/CustomTextInput.style'
import { FontSize } from '../../utils/Constant'
import { Avatar } from '@rneui/themed'
import { Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { EditButton, MoreButton } from './ButtonProfile'


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
                        <Text style={[TypographyStyles.normal, { color: Colors.grey_01 }]}>+1 111 467 378 399</Text>
                    </View>
                    
                    <View style = {styles.editbutton}><EditButton/></View>
                </View>
                <View style = {{flex: 25, borderBottomWidth: 1, borderColor: Colors.grey_01}}>
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
                </View>
        </View>
    </View>

    )
}
const buttons = [
    { id: 'myFavRes', iconSource: require('../../../assets/Icons/lich.png'), label: 'My favorite restaurants' },
    { id: 'specOfPro', iconSource: require('../../../assets/Icons/ma.png'), label: 'Special Offer & Promo' },
    { id: 'payMed', iconSource: require('../../../assets/Icons/wallet.png'), label: 'Payment Methods' },
    { id: 'profile', iconSource: require('../../../assets/Icons/user.png'), label: 'Profile' },
    { id: 'adress', iconSource: require('../../../assets/Icons/address.png'), label: 'Address' },
    { id: 'noti', iconSource: require('../../../assets/Icons/notification-light_mode.png'), label: 'Notification' },
    { id: 'security', iconSource: require('../../../assets/Icons/secu.png'), label: 'Security' },
    { id: 'language', iconSource: require('../../../assets/Icons/language.png'), label: 'Language' },
    { id: 'darkMode', iconSource: require('../../../assets/Icons/darkmode.png'), label: 'Dark Mode' },
    { id: 'help', iconSource: require('../../../assets/Icons/help.png'), label: 'Help Center' },
    { id: 'invite', iconSource: require('../../../assets/Icons/friend.png'), label: 'Invite Friends' },
    { id: 'logOut', iconSource: require('../../../assets/Icons/logout.png'), label: 'Logout' },
  ];
  const ButtonWithIcon = ({ id, iconSource, label, onPress }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={() => onPress(id)}>
        {/* Icon */}
        <Image source={iconSource} style={styles.icon} />
        {/* Button name */}
        <Text style={[styles.label, id === 'logOut' ? { color: 'red' } : null]}>
         {label}
         </Text>
        {/* <Text style={styles.label}>{label}</Text> */}
        <View style = {styles.editbutton}>
        {id === 'language' && (
          // Add text to show current language (e.g., "English")
          <Text style={[styles.label,{paddingRight:10}]}>English(US)</Text>
        )}
        {id === 'darkMode' ? (
        // Special icon for 'Dark Mode' button
        <Image
          source={require('../../../assets/Icons/off-button.png')}
          style={{size: 30}}
        />
      ) : (
        // Default arrow icon for other buttons
        <Image source={require('../../../assets/Icons/arrownext.png')} style={styles.profileIconButton} />
      )}
       
        </View>
       
    </TouchableOpacity>
  );
  const handleButtonClick = (buttonId) => {
    switch (buttonId) {
      case 'myFavRes':
        // Handle 'My favorite restaurants' button click
        break;
      case 'specOfPro':
        // Handle 'Special Offer & Promo' button click
        break;
      case 'payMed':
        // Handle 'Payment Methods' button click
        break;
      case 'profile':
        // Handle 'Profile' button click
        break;
      case 'adress':
        // Handle 'Address' button click
        break;
      case 'noti':
        // Handle 'Notification' button click
        break;
      case 'security':
        // Handle 'Security' button click
        break;
      case 'language':
        // Handle 'Language' button click
        break;
      case 'darkMode':
        // Handle 'Dark Mode' button click
        break;
      case 'help':
        // Handle 'Help Center' button click
        break;
      case 'invite':
        // Handle 'Invite Friends' button click
        break;
      case 'logOut':
        // Handle 'Logout' button click
        break;
      default:
        // Handle default case or unrecognized button
        break;
    }
  };
  
  
export default Profile