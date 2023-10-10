import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ButtonStyles } from './Buttons.style';
import { CommonStyles, TypographyStyles } from '../../utils/StyleUtil';
import { Image } from 'react-native';

const CommonButton = ({ title, onPress, width, bgColor, textColor }) => {
  return (
    <TouchableOpacity onPress={() => {
      onPress();
    }} style={[ButtonStyles.primaryButton]}>
      <Text style={[TypographyStyles.normal, { backgroundColor: bgColor, color: textColor, fontWeight: '700' }]}>{title}</Text>
    </TouchableOpacity>
  )
}
export const NavigationButton = ({ onPress, index }) => {
  return (
    <TouchableOpacity onPress={() => onPress(index)} style={ButtonStyles.navigationButton}>
      <Image source={require('../../../assets/Icons/home-filled.png')} ></Image>
    </TouchableOpacity>
  )
}
export const OutlineButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ButtonStyles.outlineButton, CommonStyles.center]}>
      <Image source={require('../../../assets/Icons/notification-light_mode.png')} style={[CommonStyles.iconSize]}></Image>
    </TouchableOpacity>
  )
}
export const EditButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Image source={require('../../../assets/Icons/pen.png')} style = {[ButtonStyles.profileIconButton]}></Image>
    </TouchableOpacity>
  )
}
export const MoreButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../../assets/Icons/more.png')} style = {[ButtonStyles.profileIconButton]}></Image>
    </TouchableOpacity>
  )
}
export const ProfileButtons = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../../assets/Icons/more.png')} style = {[ButtonStyles.profileButton]}></Image>
    </TouchableOpacity>
  )
}
export default CommonButton;

