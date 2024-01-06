import { View, Text, Image, SafeAreaViewComponent, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Profile.Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Styles } from '../../components/Inputs/CustomTextInput.style'
import { Avatar } from '@rneui/themed'
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { ButtonWithIcon, EditButton, MoreButton, ToggleButton} from './ButtonProfile'
import { useNavigation } from '@react-navigation/native'
import { useNavigateToAddress, useNavigateToHelpCenter, useNavigateToInviteFriends, useNavigateToLanguage, useNavigateToMyFavoriteRestaurants, useNavigateToNotification, useNavigateToPayment, useNavigateToProfileDetail, useNavigateToSecurity, useNavigateToSpecialOffer } from './CustomNavigationHook';
import Logout from './Logout'
import LogoutDialog from './Logout'
import { useDispatch, useSelector } from "react-redux";
import ApiUrlConstants from "../../utils/api_constants";
import { loginSuccess } from "../../store/actions/userAction";
import { logout } from "../../store/actions/userAction";

const Profile = () => {
  const buttons = [
    { id: 'myFavRes', iconSource: require('../../../assets/Icons/lich.png'), label: 'My favorite restaurants' },
    { id: 'specOfPro', iconSource: require('../../../assets/Icons/ma.png'), label: 'Special Offer & Promo' },
    { id: 'payMed', iconSource: require('../../../assets/Icons/wallet.png'), label: 'Payment Methods' },
    { id: 'profile', iconSource: require('../../../assets/Icons/user.png'), label: 'Profile' },
    { id: 'address', iconSource: require('../../../assets/Icons/address.png'), label: 'Address' },
    { id: 'noti', iconSource: require('../../../assets/Icons/notification-light_mode.png'), label: 'Notification' },
    { id: 'security', iconSource: require('../../../assets/Icons/secu.png'), label: 'Security' },
    { id: 'language', iconSource: require('../../../assets/Icons/language.png'), label: 'Language' },
    { id: 'darkMode', iconSource: require('../../../assets/Icons/darkmode.png'), label: 'Dark Mode' },
    { id: 'help', iconSource: require('../../../assets/Icons/help.png'), label: 'Help Center' },
    { id: 'invite', iconSource: require('../../../assets/Icons/friend.png'), label: 'Invite Friends' },
    { id: 'logOut', iconSource: require('../../../assets/Icons/logout.png'), label: 'Logout' },
  ];
  const [isLoading, setLoading] = useState(true);

  const { navigate : navigateToMyFavoriteRestaurants} = useNavigateToMyFavoriteRestaurants();
  const { navigate: navigateToSpecialOffer } = useNavigateToSpecialOffer();
  const { navigate: navigateToPayMethod } = useNavigateToPayment();
  const { navigate: navigateToProfileDetail } = useNavigateToProfileDetail();
  const { navigate: navigateToInvitedFriends} = useNavigateToInviteFriends();
  const { navigate: navigateToAddress } = useNavigateToAddress();
  const { navigate: naivigateToNotifications } = useNavigateToNotification();
  const { navigate: navigateToSecurity} = useNavigateToSecurity();
  const { navigate: navigateToHelpCenter } = useNavigateToHelpCenter();
  const { navigate: navigateToLanguage } = useNavigateToLanguage();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const handleLogout = () => {
    // Thực hiện đăng xuất ở đây
    // Sau khi đăng xuất, có thể đóng dialog và overlay
    setShowLogoutDialog(false);
    setShowOverlay(false);
    dispatch(logout());
  };
 
  const openDialog = () => {
    setShowLogoutDialog(true);
    setShowOverlay(true);
  };

  const handleButtonClick = (buttonId) => {
    switch (buttonId) {
      case 'myFavRes':
        // Handle 'My favorite restaurants' button click
        navigateToMyFavoriteRestaurants();
        break;
      case 'specOfPro':
        // Handle 'Special Offer & Promo' button click
        navigateToSpecialOffer();
        break;
      case 'payMed':
        // Handle 'Payment Methods' button click
        navigateToPayMethod();
        break;
      case 'profile':
        // Handle 'Profile' button click
        navigateToProfileDetail();
        break;
      case 'address':
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
        navigateToHelpCenter();     
        break;
      case 'invite':
        // Handle 'Invite Friends' button click
        navigateToInvitedFriends();
        break;
      case 'logOut':
        openDialog();
        break;
      default:
        // Handle default case or unrecognized button
        break;
    }
  };
  const [userData,setUserData] = useState(null);
  const userId = useSelector((state) => state.userReducer.id);
  const username = useSelector((state) => state.userReducer.userName);
  const phoneNumber = useSelector((state) => state.userReducer.phoneNumber);
  const avatar = useSelector((state) => state.userReducer.avatar);
  const address = useSelector((state) => state.userReducer.address);
  const dispatch = useDispatch();

  // Trong hàm useEffect hoặc bất kỳ nơi nào bạn muốn gọi reducer
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await fetch(ApiUrlConstants.user, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ /*... your data */ }),
        });
  
        if (!response.ok) {
          throw new Error('Error');
        }
  
        // Parse the response
        const userData = await response.json();
        console.log('Fetched user data:', userData); // Log the fetched data
        
        // Dispatch the action to update the Redux state
        dispatch(loginSuccess({
          id: userId,
          userName: username,
          phoneNumber: phoneNumber,
          gender: gender, 
          dob: dob,
          avatar: avatar,
          cartId: '', 
        }));
  
        // Set loading to false
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    // Call the fetchData function
    fetchData();
  }, [dispatch]); 

    return (
      <SafeAreaView style = {styles.page}> 
          <View style = {[CommonStyles.horizontal_direction, { justifyContent: 'space-between', alignItems: 'center'}]}>
              <Image source = {require('../../../assets/Images/foodu.png')} 
                  style = {[styles.topLeftLogo,Margin.mr_20]}
              />
              <Text style = {TypographyStyles.big} >Profile</Text>
              <View style = {{flex: 1,flexDirection:'row', justifyContent: 'flex-end', alignSelf:'center'}}>
                  <MoreButton/>
              </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
              {isLoading ? (
                   <ActivityIndicator size="large" color={Colors.primaryColor} style={styles.loader} />
                 ) : (
            // userData && (
            <View  style = {[styles.content, Margin.mt_10,{paddingBottom:80}]}>
                    <View style={[styles.avatar,{borderColor: Colors.grey_01,}]}>
                        <Avatar
                            size={55}
                            rounded
                            source={{ uri: avatar !== '' ? avatar : 'https://randomuser.me/api/portraits/men/36.jpg'}}
                        />
                        <View style={Margin.ml_25}>
                            <Text style={[TypographyStyles.normal, Margin.mb_5]}>{username}</Text>
                            <Text style={[TypographyStyles.normal, Colors.grey_01 ]}>{phoneNumber}</Text>
                        </View>
                        
                        <View style = {styles.editbutton}><EditButton/></View>
                    </View>
                     <View style={[styles.separator]} />
                    <View style = {styles.contentProfileDetail}>
                      {/* <View style = {{flex: 25, borderBottomWidth: 1, borderColor: Colors.grey_01}}> */}
                        {buttons.slice(0, 3).map((button) => (
                        <ButtonWithIcon
                        key={button.id}
                        id={button.id}
                        iconSource={button.iconSource}
                        label={button.label}
                        iconButton={require('../../../assets/Icons/arrownext.png')}
                        onPress={handleButtonClick}
                        />
                        ))}
                        <View style={[styles.separator,{marginTop: -6}]} />
                          {/* </View> */}
                        {/* <View style = {{flex: 60}}> */}
                        {buttons.slice(3).map((button) => (
                        <ButtonWithIcon
                        key={button.id}
                        id={button.id}
                        iconSource={button.iconSource}
                        label={button.label}
                        iconButton={require('../../../assets/Icons/arrownext.png')}
                        onPress={handleButtonClick}
                        />
                        ))}
                    </View>
                    
            </View>
            // )
            )}
        </ScrollView>
        {showOverlay && (
                      <View style={styles.overlay}>
                        <LogoutDialog
                          visible={showLogoutDialog}
                          onCancel={() => {
                            setShowLogoutDialog(false);
                            setShowOverlay(false);
                          }}
                          onLogout={handleLogout}
                        />
                      </View>
                    )}
    </SafeAreaView>

    )
}  

export default Profile;