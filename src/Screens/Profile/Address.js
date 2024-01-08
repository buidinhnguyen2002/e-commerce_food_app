import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import styles from './Profile.Styles';
import { Colors } from '../../utils/Colors';
import { ButtonBottom, EditButton } from './ButtonProfile';
import { Margin, Padding } from '../../utils/StyleUtil';
import { useNavigateToNotification } from './CustomNavigationHook';
import { useNavigation } from '@react-navigation/native';
import { Routers } from '../../utils/Constant';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadAddress } from '../../store/actions/userAction';

    const cardData = [
        { id:'home',title: 'Home', content: 'Times Square NYC, MAnhattan, 27', status:'Defaul' },
        { id:'office',title: 'My Ofice', content: '5259 Blue Bill Park, PC 4627',status:'Defaul' },
        { id:'apartment',title: 'My Apartment', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
        { id:'parent', title: 'Parent House', content: '21833 Cycle Gallagher, PC 4662',status:'Defaul'},
      ];
      

const AddressItem = (card) => (
  <View style={Margin.mb_20}>
    <TouchableOpacity style={styles.buttonContainer}>     
        <Image source={require('../../../assets/Icons/locate.png')} style={styles.topLeftLogo} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20 }}>
        <View>
            <Text style={[styles.text,{fontWeight:'bold'}]}>{card.title}</Text>
            {/* {card.status && <Text style={[styles.text, { color: Colors.green, marginEnd: 20 }]}>{card.status}</Text>} */}
            <Text style={styles.text}>{card.content}</Text>
        </View>
        <View style = {[styles.editbutton,Padding.pb_10]}>
            <EditButton/>
        </View>
        </View>
    </TouchableOpacity>
  </View>
);

const Address = () => {
  const route = useRoute();
  const {newAddress} = route.params?.newAddress || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.addresses);

  useEffect(() => {
    dispatch(loadAddress());
  }, []);
  const handlePress = () => {
    navigation.navigate(Routers.AddNewAddress);
  }
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {{flex: 80}}>
            {cardData.map((address) => AddressItem(address))}
            {newAddress && AddressItem(newAddress)}
        </View>
      </ScrollView>
      {/* <FlatList
        data={cardData}
        renderItem={AddressItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      /> */}
      {/* <View style={{justifyContent: 'flex-end', marginBottom: 20, marginTop:20}}>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, { color: Colors.white, fontWeight: 'bold' }]}>Add New Address</Text>
        </TouchableOpacity>
      </View> */}
      <ButtonBottom
        buttonText="Add New Address"
        onPress={handlePress}
      />
    </View>
  );
};

export default Address;
