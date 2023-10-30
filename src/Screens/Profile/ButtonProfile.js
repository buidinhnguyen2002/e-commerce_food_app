import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './Profile.Styles'
import { useState } from 'react'
import { color } from '@rneui/base'


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
        <Image source={require('../../../assets/Icons/more.png')} style = {[styles.actionTopRight]}></Image>
      </TouchableOpacity>
    )
  }
export const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);
  
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
  
    return ( 
          <TouchableOpacity
          style={[styles.toggleButton, isToggled && styles.toggledButton]}
          onPress={handleToggle}
          >
          <View style={[styles.toggleCircle, isToggled && styles.toggledCircle]} />
          </TouchableOpacity>
    );
  }
  export const ChangPin = ({onPress}) => {
    return (
      <TouchableOpacity style = {styles.changingButton} onPress={onPress}>
        <View style = {{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <Text style = {[styles.text,{color: 'green'}]}> Changing Pin</Text>
        </View>
      </TouchableOpacity>
    )
  }
  export const ChangPass = ({onPress}) => {
    return (
      <TouchableOpacity style = {styles.changingButton} onPress={onPress}>
        <View style = {{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <Text style = {[styles.text,{color: 'green'}]}>Changing Password</Text>
        </View>
      </TouchableOpacity>
    )
  }
  
