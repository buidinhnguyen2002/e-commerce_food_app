import { View, Text, Image } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useState } from 'react'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
const HelpCenter = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const TabHelpCenter = ({ title, isActive, onPress }) => {
        return (
            <View style={[Styles.tabHelpCenterItem, CommonStyles.center]}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={[TypographyStyles.normal, { color: isActive ? Colors.primaryColor : Colors.grey_02, fontSize: 22, fontWeight: 600 }]}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const GetBody = () => {
        if (tabIndex == 0) return (
                <FAQ/>
            )
        if (tabIndex == 1) return( 
            <ContactUs/>
          )
        }
    return (
        <View style={[Styles.container, Padding.pd_horizontal_30, Padding.pd_vertical_20, { marginBottom: 240 }]} >
            <View style={[CommonStyles.horizontal_direction, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <View style={[CommonStyles.horizontal_direction, Styles.topLeft]}>
                    <Image style={[Styles.topLeftLogo, Margin.mr_20]} source={require('../../../assets/Images/foodu.png')} />
                    <Text style={TypographyStyles.big}>Orders</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={Styles.actionTopRight} source={require('../../../assets/Icons/search.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[CommonStyles.horizontal_direction, Styles.tabOrder, Padding.pd_vertical_15, Margin.mt_20]}>
                <HelpCenter title={'FAQ'} isActive={tabIndex == 0} onPress={()=>setTabIndex(0)}/>
                <HelpCenter title={'Contact Us'} isActive={tabIndex == 1} onPress={()=>setTabIndex(1)}/>  
            </View>
            <View style={[Padding.pd_vertical_20]}>
                {GetBody()}
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingBottom: 100,
    },
    topLeft: {
        alignItems: 'center',
    },
    topLeftLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    actionTopRight: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    tabOrder: {
        borderColor: Colors.paleGray,
        borderBottomWidth: 2,
        justifyContent: 'space-between',
    },
    tabOrderItem: {
        width: '33%',

    }
});

export default HelpCenter;