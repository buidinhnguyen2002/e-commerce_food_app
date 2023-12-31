import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.Styles';
import { useNavigateToProfile } from './CustomNavigationHook';
import { CommonStyles, Margin, TypographyStyles } from '../../utils/StyleUtil';

const LanguageItem = ({ language, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onSelect(language)}
    >
      <Text style={styles.text}>{language}</Text>
      {selected && <Icon name="ios-radio-button-on" size={20} color="green" />}
      {!selected && <Icon name="ios-radio-button-off" size={20} color="green" />}
    </TouchableOpacity>
  );
};

const Language = () => {
  const suggestedLanguages = ['English(US)', 'English(UK)'];
  const allLanguages = [
    'English(US)','Spanish','Chinese',
    'French','German','Japanese',
    'Korean','Arabic','Russian',
    'Italian','Portuguese','Dutch',
    'Swedish','Norwegian','Finnish',
    'Danish','Greek','Polish',
    'Hungarian','Czech'
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('English(US)');
  const { navigate : navigateToProfile} = useNavigateToProfile();
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.suggestedSection}> */}
          <Text style={styles.sectionTitle}>Suggested</Text>
          {suggestedLanguages.map((language) => (
            <LanguageItem
              key={language}
              language={language}
              selected={selectedLanguage === language}
              onSelect={(selected) => setSelectedLanguage(selected)}
            />
          ))}
        {/* </View> */}
        <View style={styles.separator} />
        {/* <View style={styles.languageSection}> */}
          <Text style={styles.sectionTitle}>Language</Text>
          {allLanguages.map((language) => (
            <LanguageItem
              key={language}
              language={language}
              selected={selectedLanguage === language}
              onSelect={(selected) => setSelectedLanguage(selected)}
            />
          ))}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default Language;
