import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList,ActivityIndicator } from 'react-native';
import styles from './Profile.Styles';
import { Colors } from '../../utils/Colors';
import { ButtonBottom, EditButton } from './ButtonProfile';
import { Margin, Padding } from '../../utils/StyleUtil';
import { useNavigateToNotification } from './CustomNavigationHook';
import { useNavigation } from '@react-navigation/native';
import { Routers } from '../../utils/Constant';
import { useRoute } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadAddress } from '../../store/actions/userAction';
import api_constants from '../../utils/api_constants';
import { isLoading } from 'expo-font';
import ApiUrlConstants from "../../utils/api_constants";
import AddressItem from './AddressItem';


    const cardData = [
        { id:'home',title: 'Home', content: 'Times Square NYC, MAnhattan, 27', status:'Defaul' },
        { id:'office',title: 'My Ofice', content: '5259 Blue Bill Park, PC 4627',status:'Defaul' },
        { id:'apartment',title: 'My Apartment', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
        { id:'parent', title: 'Parent House', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
      ];
      



const Address = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addressesReducer.addresses);
  const [isLoading, setLoading] = useState(true);
  
  // const AddressItem = ({item}) => (
  //   {isLoading ? (
  //     <ActivityIndicator size="large" color={Colors.primaryColor} style={styles.loader} />
  //   ) : (
  //   <View style={Margin.mb_20}>
  //     <TouchableOpacity style={styles.buttonContainer}>     
  //         <Image source={require('../../../assets/Icons/locate.png')} style={styles.topLeftLogo} />
  //         <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
  //         <View>
  //             <Text style={[styles.text,{fontWeight:'bold'}]}>{item.number} {item.street}</Text>
  //             {/* {card.status && <Text style={[styles.text, { color: Colors.green, marginEnd: 20 }]}>{card.status}</Text>} */}
  //             <Text style={styles.text}>{item.district} {item.city}</Text>
  //         </View>
  //         <View style = {[styles.editbutton,Padding.pb_10]}>
  //             <EditButton/>
  //         </View>
  //         </View>
  //     </TouchableOpacity>
  //   </View>
  //   )}
  // );

  
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch(ApiUrlConstants.getAllAddresses, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network request failed');
        }
        const data = await response.json();
        dispatch(loadAddress(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [dispatch]);
  // useEffect(() => {
  //   const loadAddress = async () => {
  //     try {
  //       const response = await fetch(ApiUrlConstants.getAllAddresses, {
  //         method:'GET',
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type' : 'application/json',
  //         },
  //       });
  //       if(!response.ok) {
  //         throw new Error('Network request failed');
  //       }
  //       const data = await response.json();
  //       dispatch(loadAddress(data));
  //       setLoading(false);
  //       return data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setLoading(false);
  //     }
  //   };
  //   loadAddress();
  // }, [dispatch]);
  const handlePress = () => {
    navigation.navigate(Routers.AddNewAddress);
  }
  
  return (
    <View style={styles.page}>
       
      <ScrollView showsVerticalScrollIndicator={false}> 
        <View style = {{flex: 80}}>
        {addresses && addresses.map(address => (
          <AddressItem
            key={address.id}
            number={address.number}
            street={address.street}
            district={address.district}
            city={address.city}
          />
         ))} 

             {/* {cardData.map((address) => AddressItem(address))} */}
            {/* newAddress && AddressItem(newAddress) */}
            {/* const AddressItem = ({ item }) => (
    <View style={Margin.mb_20}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.primaryColor} style={styles.loader} />
      ) : (
        <TouchableOpacity style={styles.buttonContainer}>
          <Image source={require('../../../assets/Icons/locate.png')} style={styles.topLeftLogo} />
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
            <View>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>{item.number} {item.street}</Text>
              {/* {card.status && <Text style={[styles.text, { color: Colors.green, marginEnd: 20 }]}>{card.status}</Text>} */}
              {/* <Text style={styles.text}>{item.district} {item.city}</Text>
            </View>
            <View style={[styles.editbutton, Padding.pb_10]}>
              <EditButton />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  ); */} 
            {/* <FlatList
              data = {addresses}
              renderItem ={({item}) => <AddressItem item = {item}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            /> */}
        </View> 
       </ScrollView>
     
      <ButtonBottom
        buttonText="Add New Address"
        onPress={handlePress}
      />
    </View>
  );
};

export default Address;
