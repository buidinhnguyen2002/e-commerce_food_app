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
export const ButtonWithIcon = ({ id, iconSource, label, onPress,iconButton }) => (
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
      // <Image source={require('../../../assets/Icons/arrownext.png')} style={styles.profileIconButton} />
      <Image source={iconButton} style={styles.profileIconButton} />
    )}
     
      </View>
     
  </TouchableOpacity>
);

