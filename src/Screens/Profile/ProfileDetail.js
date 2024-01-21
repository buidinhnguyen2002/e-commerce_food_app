import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Platform } from 'react-native';
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
import * as ImagePicker from "expo-image-picker";
import { loginSuccess, updateUserProfile } from "../../store/actions/userAction";

const ProfileDetail = () => {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [selectedGender, setSelectedGender] = useState('');
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userReducer.id);
    const username = useSelector((state) => state.userReducer.userName);
    const phoneNumber = useSelector((state) => state.userReducer.phoneNumber);
    const dob = useSelector((state) => state.userReducer.dob);
    const role = useSelector((state) => state.userReducer.role);
    const isActive = useSelector((state) => state.userReducer.isActive);
    const cartId = useSelector((state) => state.userReducer.cartId); 
   
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const handlePhoneInputChange = (number) => {
    //   setPhoneNumber(number);
    // };

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
    // const handleUpdateProfile = async () => {
    //   try {
    //     const updateData = {
    //       fullName: fullName,
    //       userName: userName,
    //       dob: date,
    //       gender: selectedGender,
    //       phoneNumber: phoneNumber/* Lấy giá trị số điện thoại từ input */,
    //       // Thêm các trường khác cần cập nhật
    //     };
  
    //     // Gọi action updateUserProfile và truyền dữ liệu cần cập nhật
    //     dispatch(updateUserProfile(updateData));
    //   } catch (error) {
    //     console.error('Error updating profile:', error);
    //   }
    // };
    // const updateAvatarOnAPI = async (imageUri) => {
    //   try {
    //     const formData = new FormData();
    //     formData.append('avatar', {
    //       uri: imageUri,
    //       type:'image/jpeg',
    //       name:'avatar.jpg',
    //     });
    //     const response = await fetch(ApiUrlConstants.getAllCustomers, {
    //       method: 'POST',
    //       body: formData,
    //       headers:{
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     });
    //     if(!response.ok) {
    //       throw new Error('Failed to update avatar');
    //     }
    //     //xử lý phản hồi từ api
    //     const responseData = await response.json();
    //     console.log('Avatar updated', responseData);
    //   }catch(error) {
    //     console.error('Error updating avatar', error);
    //     //xử lý lỗi nếu cần
    //   }
    // }
    const handleUpdateProfile = async () => {
      try {
        const updateData = {
          // id: userId,
          fullName: fullName,
          userName: userName,
          dob: date,
          gender: selectedGender,
          phoneNumber: phoneNumber,
          // Thêm các trường khác cần cập nhật
        };

  
        // Dispatch action updateUserProfile và truyền dữ liệu cần cập nhật
        dispatch(updateUserProfile(updateData));
  
        // Thêm các xử lý logic sau khi dispatch nếu cần
  
      } catch (error) {
        console.error('Error updating profile:', error);
        // Xử lý lỗi nếu cần
      }
    };
    

    useEffect(() => {
      // setPhoneNumber(phoneNumber);
        (async () => {
          if (Platform.OS !== "web") {
            const { status } =
              await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
              alert("Sorry, we need camera roll permissions to make this work!");
            }
          }
        })();
        const fetchData = async () => {
            try {
              // Fetch data from API
              const response = await fetch(ApiUrlConstants.getAllCustomers, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                
              });
        
              if (!response.ok) {
                throw new Error('Network request failed');
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
                cartId: cartId, 
                role: role,
                isActive: isActive,
              }));
        
              // Set loading to false
              setLoading(false);
            } catch (error) {
              console.error(error);
              setLoading(false);
            }
          };
          fetchData();
      }, [dispatch, fullName, userName, date, selectedGender, () => phoneNumber]);
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);

        // Kiểm tra nếu người dùng đã chọn ảnh (không hủy bỏ)
        if (!result.canceled) {
          // Sử dụng 'assets' array để truy cập các tài nguyên được chọn
          const selectedAssets = result.assets;
          if (selectedAssets && selectedAssets.length > 0) {
            const firstSelectedAsset = selectedAssets[0];
            const uri = firstSelectedAsset.uri;
            //gọi hàm để cập nhật ảnh lên api
            // await updateAvatarOnAPI(uri);
            // Tiếp tục xử lý logic của bạn với 'uri'
            setImage(uri);
            // setImageSource(uri);
          }
        }
      };
    
    return (
        
        <View style = {styles.page}>  
            <View style = {styles.content}>
                <View style={[styles.avatarEdit,{flex:15}]}>
                    {/* {image && (
                        <Avatar
                            size={80}
                            rounded
                            source={{ uri: image }}
                        />
                        )} */}
                        {image ? (
                                // Nếu đã chọn hình ảnh từ thư viện
                                <Avatar
                                    size={80}
                                    rounded
                                    source={{ uri: image }}
                                />
                            ) : (
                                // Nếu không có hình ảnh được chọn, hiển thị từ API
                                <Avatar
                                    size={80}
                                    rounded
                                    source={{ uri: avatar }}
                                />
                            )}
                        <View style = {[styles.editbutton,{marginTop: 50,marginLeft:-15,justifyContent:'flex-start'}]}><EditButton onPress={pickImage}/></View>

                </View>
                <View style = {{flex: 80}}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                            <CustomTextInput
                                placeholder={"Full Name"}
                                onChangeText={(text) => {
                                setFullName(text);
                                }}
                            />
                            <CustomTextInput
                                placeholder={"UserName"}
                                onChangeText={(text) => {
                                setUserName(text);
                                }}
                            />
                            <CustomTextInputWithIcon
                                placeholder={"Enter date"}
                                iconSource={require('../../../assets/Icons/lich.png')}
                                onIconPress={openDatePickerSingle}
                                value={date}
                                editable={false}
                            />

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
                                //   dropdownOverlayColor='green'
                                defaultButtonText='Gender'
                                buttonTextStyle = {{
                                    color: Colors.grey_02,
                                    textAlign:'center',
                                    fontSize: 14,
                                    alignSelf:'center'
                                    
                                
                                }}
                                // renderDropdownIcon={isOpened => {
                                //     return <Image source={require('../../../assets/Icons/caret-down.png')} style = {styles.icon}/>
                                // }}
                                renderDropdownIcon={isOpened => {
                                    return <Image source={isOpened ? require('../../../assets/Icons/caret-down.png') : require('../../../assets/Icons/caret-down.png')} style = {styles.icon} />;
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
                             {/* <CustomTextInputWithIcon
                                placeholder={"Email"}
                                iconSource={require('../../../assets/Icons/lich.png')}
                            /> */}
                            <View>
                                <PhoneInputComponent/>
                            </View>
                            
                            
                    </ScrollView>
                </View>    
                        <ButtonBottom
                            buttonText="Update"
                            onPress={handleUpdateProfile}
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
