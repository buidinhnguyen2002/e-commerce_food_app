import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { Colors } from '../../utils/Colors'
import { useState } from 'react'
import FAQ from './FAQ'
import ContactUs from './ContactUs'
import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'react-native'
import { Animated } from 'react-native'

const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    
    return (
      <View style={styles.tabbar}>
        {props.navigationState.routes.map((route, i) => {
        const isRouteActive = i === props.navigationState.index;
        const textColor = isRouteActive ? Colors.green : Colors.grey_01;


          return (
            <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() => props.jumpTo(route.key)}
            >
            <Text style={[styles.label, { color: textColor }]}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )
}
const renderScene = SceneMap({
    first: FAQ,
    second: ContactUs,
  });
  
  export default function HelpCenter() {
    const layout = useWindowDimensions();
  
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'FAQ' },
      { key: 'second', title: 'Contact Us' },
    ]);
  
    return (
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={[Padding.pd_vertical_10,{width: layout.width}]}
            />
    );
  }
const styles = StyleSheet.create({
    tabbar: {
      backgroundColor: Colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: Colors.paleGray,
      borderBottomWidth: 2,
      justifyContent: 'space-between',
      paddingHorizontal: 80,

    },
    tab: {
     alignItems: 'center',
     justifyContent:'center',
    },
    label: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 600,
      paddingVertical: 10,
    }
  });
    