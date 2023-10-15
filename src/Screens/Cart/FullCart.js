import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Colors } from '../../utils/Colors'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { FlatList } from 'react-native'
import SeparatorComponent from '../../components/SeparatorComponent'



 const MyCart = () => {
    return (
        <View style={[Styles.cardContainer]}>
            <View style={[CommonStyles.horizontal_direction,{...Padding.pd_horizontal_10}]}>
                <View style={[Styles.imageStack,{ marginVertical:10}]}>
                    <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                    <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                    <Image source={require('../../../assets/Images/food.png')} style={Styles.foodImage} />
                </View>
                <View style={ {justifyContent: 'space-between', ...Padding.pd_vertical_20, ...Padding.pd_horizontal_30 , marginLeft:80}}>
                    <Text style={TypographyStyles.medium}>Big Garden Salad</Text>
                    <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                        <Text style={{ color: Colors.grey_02, ...TypographyStyles.small }}>3 items</Text>
                        <Text style={{ color: Colors.grey_02, ...TypographyStyles.small, ...Margin.mg_horizontal_10 }}>|</Text>
                        <Text style={{ color: Colors.grey_02, ...TypographyStyles.small }}>2.4km</Text>
                    </View>
                    <View style={[CommonStyles.horizontal_direction, { alignItems: 'center' }]}>
                        <Text style={{ ...TypographyStyles.big, ...Margin.mr_20, color: Colors.primaryColor }}>$21.20</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const FullCart = () => {

    const getBody=()=>{
        return (
          <FlatList contentContainerStyle={[Padding.pd_vertical_5,{paddingHorizontal:2}]} style={[{paddingHorizontal:2}]} data={[1,2,3,4,5,6,7,8,9,10]} renderItem={()=>(<MyCart/>)} showsVerticalScrollIndicator={false} ItemSeparatorComponent={()=>(<SeparatorComponent height={30} />)} /> 
        )
    }

    return (
        <View style={[Styles.container]}>
            <View style={[CommonStyles.horizontal_direction, {justifyContent:'space-between', alignItems:'center'}]}>
                <View style={[CommonStyles.horizontal_direction, Styles.topLeft]}>
                    <TouchableOpacity>
                        <Image style={[Margin.mr_20]} source={require('../../../assets/Icons/backArrow.png')} />
                    </TouchableOpacity>
                    <Text style={TypographyStyles.big}> My Cart</Text>

                </View>
                
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/Icons/3cham.png')}/>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={Margin.mt_20} >
                {getBody()}

            </View>
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        paddingHorizontal:20,
        paddingVertical:40,
        paddingBottom:70
    },
    topLeftLogo:{
        objectFit:'contain',


    },
    topLeft:{
        alignItems:'center',
    },
    topRight:{
        objectFit:'contain',
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    imageStack: {
        flexDirection: 'row',
    },
    foodImage: {
        width: 100,
        height: 100,
        borderRadius:20,
        marginRight: -85, // Để chúng xếp chồng lên nhau
        borderWidth: 3, // Độ rộng của border
        borderColor: Colors.white, // Màu của border
    }

})

export default FullCart