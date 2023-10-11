import { Image, TouchableOpacity } from 'react-native'
import styles from './StylesProfile'

export const EditButton = ({onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} >
        <Image source={require('../../../assets/Icons/pen.png')} style = {[styles.profileIconButton]}></Image>
      </TouchableOpacity>
    )
  }
export const MoreButton = ({onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../../assets/Icons/more.png')} style = {[styles.profileIconButton]}></Image>
      </TouchableOpacity>
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
        <Text style={styles.label}>{label}</Text>
        <View style = {styles.editbutton}>
        <Image source={require('../../../assets/Icons/arrownext.png')} style={styles.icon} />
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
  
