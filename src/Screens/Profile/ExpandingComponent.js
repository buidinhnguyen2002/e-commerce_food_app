import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TypographyStyles } from '../../utils/StyleUtil';
import { Colors } from '../../utils/Colors';

const ExpandingComponent = ({ headerText, expandedText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, isExpanded && styles.expandedContainer]}>
        <View style={styles.headerContainer}>
          <Text style={[TypographyStyles.small]}>
            {headerText}
          </Text>
          <Image
            source={require('../../../assets/Icons/sort-down.png')}
            style={{
              justifyContent: 'flex-end',
              width: 20,
              height: 20,
              alignItems: 'center',
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
        {isExpanded && <Text style={TypographyStyles.small}>{expandedText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.lightGrey,
    margin: 8,
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expandedContainer: {
    height: 'auto',
    overflow: 'hidden',
  },
});

export default ExpandingComponent;
