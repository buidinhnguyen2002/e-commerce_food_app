import { Animated, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import styles from './Profile.Styles'
import { useState } from 'react'
import { color } from '@rneui/base'
import { CommonStyles, Margin, Padding, TypographyStyles } from '../../utils/StyleUtil'
import { Styles } from '../../components/Inputs/CustomTextInput.style'
import { Colors } from '../../utils/Colors'



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
  <View style = {Margin.mb_10}>
  <TouchableOpacity style={[styles.buttonContainer,Margin.mb_10]} onPress={() => onPress(id)}>
      {/* Icon */}
      {iconSource ? (
      <Image source={iconSource} style={styles.icon} />
       ) : null}
      {/* Button name */}
      <Text style={[Padding.pl_20,TypographyStyles.normal, id === 'logOut' ? { color: 'red' } : null]}>
       {label}
       </Text>
      {/* <Text style={styles.label}>{label}</Text> */}
      <View style = {styles.editbutton}>
      {id === 'language' && (
        // Add text to show current language (e.g., "English")
        <Text style={[Padding.pl_20,TypographyStyles.normal,{paddingRight:10}]}>English(US)</Text>
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
  </View>
);
export const CustomTextInputWithIcon = ({ placeholder, iconSource, onIconPress, ...props }) => {
  if (!iconSource) {
    // Ẩn đi nếu không có iconSource
    return null;
  }
  return (
    <View style={[Styles.searchContainer,{height:60}]}>
      <TextInput
        style={{flex: 95}}
        placeholder={placeholder}
        {...props}
        editable={false}
      />
       <TouchableOpacity onPress={onIconPress} style={[Padding.pl_10,{flex:5}]}>
        <Image source = {iconSource} style = {styles.icon}  />
      </TouchableOpacity>
    </View>
  );
};
// export const CustomDropdown = ({ selectedValue, onValueChange, items }) => {
//   return (
//     <View style={Styles.searchContainer}>
//        <SelectList
//         // onValueChange={onValueChange}
//         // items={items}
//         // value={selectedValue}
//         setSelected={selectedValue}
//         data={items}
//         placeholder=''
//         defaultOption={{id:'male', label:'Male'}}
//         onSelect={(item) => onValueChange(item.value)}
//       />
//     </View>
//   );
// };
export const ButtonBottom = ({ buttonText, onPress }) => {
  return (
    <View style={{ justifyContent: 'flex-end', marginBottom: 20, marginTop: 20 }}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[styles.text, { color: 'white', fontWeight: 'bold' }]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
export const CustomTextInputWithSelectList = ({ placeholder, iconSource, onIconPress, ...props }) => {
  if (!iconSource) {
    // Ẩn đi nếu không có iconSource (iconSource là falsy, ví dụ: null hoặc undefined)
    return null;
  }
  return (
    <View style={Styles.searchContainer}>
       <TouchableOpacity onPress={onIconPress} style={{justifyContent:"flex-end",flex:25}}>
        <View style = {{flexDirection:'row'}}>
        <Image source = {iconSource} style = {styles.icon}  />
        <Image source = {require('../../../assets/Icons/caret-down.png')} style = {styles.icon}  />
        </View>
      </TouchableOpacity>
      <TextInput
        style={{flex: 75}}
        placeholder={placeholder}
        {...props}
      />
      
    </View>
  );
};
export const TabCustom = ({ source, text, onPress, isChoose }) => {
  return (
      <TouchableHighlight underlayColor={isChoose ? '#1BAC4BAA' : '#1BAC4B34'} style={[styles.tabContainer, isChoose ? styles.tabChoose : {}]} onPress={onPress}>
          <View style={[CommonStyles.horizontal_direction, Padding.pd_horizontal_20, Padding.pd_vertical_10]}>
             <Text style={[TypographyStyles.normal, { color: isChoose ? Colors.white : Colors.primaryColor, fontWeight: 700 }]}>{text}</Text>
          </View>
      </TouchableHighlight>
  )
}
// export const DropdownContent = ({ content }) => (
//   <View style={styles.dropdownContent}>
//     <Text>{content}</Text>
//     {/* Add your content here */}
//   </View>
// );
export const ShowDropDown = ({ label,content }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const rotatevalue = new Animated.Value(0);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    
    Animated.timing(rotatevalue,{
      toValue: isDropdownVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const rotate = rotatevalue.interpolate({
    inputRange: [0,1],
    outputRange: ["0deg","180deg"]
  })
  return (
  <View style = {Margin.mb_10}>
  <TouchableOpacity  onPress={toggleDropdown}>
      <View style={styles.dropdownContent}>
        <View style={styles.buttonContainer}>
          <Text  style={[Padding.pl_20,TypographyStyles.normal,{color:Colors.black}]}>{label}</Text>
          <Animated.Image
            source={require('../../../assets/Icons/sort-down.png')} // Replace with your icon path
            style={[styles.profileIconButton, { transform: [{ rotate }] }]}
          />
        </View>
        {isDropdownVisible && <Text style={[styles.dropdownContent,{color: Colors.black}]}>{content}</Text>}
      </View>
      {/* Button name
      <Text style={[Padding.pl_20,TypographyStyles.normal, id === 'logOut' ? { color: 'red' } : null]}>
       {label}
       </Text>
      <View style = {styles.editbutton}>
      {isDropdownVisible ? (
            <DropdownContent content={dropdownContent} />
          ) : (
      <Image source={iconButton} style={styles.profileIconButton} />
      )}
      </View> */}
     
  </TouchableOpacity>
  </View>
  );
};


