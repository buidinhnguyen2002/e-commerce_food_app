import { View, Text, Image, SafeAreaViewComponent, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './StylesProfile'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../../components/Inputs/CustomTextInput.style'
import { FontSize } from '../../utils/Constant'
import { Avatar } from '@rneui/themed'
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { EditButton, MoreButton, ToggleButton} from './ButtonProfile'
import { useNavigation } from '@react-navigation/native'
import { useNavigateToAddress, useNavigateToInviteFriends, useNavigateToLanguage, useNavigateToMyFavoriteRestaurants, useNavigateToNotification, useNavigateToPayment, useNavigateToProfileDetail, useNavigateToSecurity } from './CustomNavigationHook';
import Logout from './Logout'



const Profile = () => {
  const buttons = [
    { id: 'logOut', iconSource: require('../../../assets/Icons/logout.png'), label: 'Logout' },
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

           <ToggleButton/>
      ) : (
        // Default arrow icon for other buttons
        <Image source={require('../../../assets/Icons/arrownext.png')} style={styles.profileIconButton} />
      )}
       
        </View>
       
    </TouchableOpacity>
  );
  const { navigate : navigateToMyFavoriteRestaurants} = useNavigateToMyFavoriteRestaurants();
  // const { navigate: useNavigateToSpecialOffer } = useNavigateToSpecialOffer();
  const { navigate: navigateToPayMethod } = useNavigateToPayment();
  const { navigate: navigateToProfileDetail } = useNavigateToProfileDetail();
  const { navigate: navigateToInvitedFriends} = useNavigateToInviteFriends();
  const { navigate: navigateToAddress } = useNavigateToAddress();
  const { navigate: naivigateToNotifications } = useNavigateToNotification();
  const { navigate: navigateToSecurity} = useNavigateToSecurity();
  // const { navigate: useNavigateToHelpCenter } = useNavigateToHelpCenter();
  const { navigate: navigateToLanguage } = useNavigateToLanguage();
  const handleLogout = () => {
    setShowLogoutDialog(false);
  };
  const handleButtonClick = (buttonId) => {
    switch (buttonId) {
      case 'myFavRes':
        // Handle 'My favorite restaurants' button click
        navigateToMyFavoriteRestaurants();
        break;
      case 'specOfPro':
        // Handle 'Special Offer & Promo' button click
        break;
      case 'payMed':
        // Handle 'Payment Methods' button click
        navigateToPayMethod();
        break;
      case 'profile':
        // Handle 'Profile' button click
        navigateToProfileDetail();
        break;
      case 'adress':
        // Handle 'Address' button click
        navigateToAddress();
        break;
      case 'noti':
        // Handle 'Notification' button click
        naivigateToNotifications();
        break;
      case 'security':
        // Handle 'Security' button click
        navigateToSecurity();
        break;
      case 'language':
        // Handle 'Language' button click
        navigateToLanguage();
        break;
      case 'darkMode':
        // Handle 'Dark Mode' button click
        break;
      case 'help':
        // Handle 'Help Center' button click
        break;
      case 'invite':
        // Handle 'Invite Friends' button click
        navigateToInvitedFriends();
        break;
      case 'logOut':
        Logout.handleLogout();
        break;
      default:
        // Handle default case or unrecognized button
        break;
    }
  };
  
  
    return (
      <View style = {styles.page}>      
        <View style = {[CommonStyles.horizontal_direction, { justifyContent: 'space-between', alignItems: 'center' }]}>
            <Image source = {require('../../../assets/Images/foodu.png')} 
                style = {[styles.topLeftLogo,Margin.mr_20]}
            />
            <Text style = {TypographyStyles.big} >Profile</Text>
            <View style = {{flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                <MoreButton/>
            </View>
        </View>
        <View style = {styles.content}>
                <View style={[styles.avatar,{borderColor: Colors.grey_01,}]}>
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
                <View style = {styles.contentProfileDetail}>
                   {/* <View style = {{flex: 25, borderBottomWidth: 1, borderColor: Colors.grey_01}}> */}
                    {buttons.slice(0, 3).map((button) => (
                    <ButtonWithIcon
                    key={button.id}
                    id={button.id}
                    iconSource={button.iconSource}
                    label={button.label}
                    onPress={handleButtonClick}
                    />
                     ))}
                    <View style={styles.separator} />
                      {/* </View> */}
                    {/* <View style = {{flex: 60}}> */}
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
  
export default Profile