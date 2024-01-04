import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { View, Text } from 'react-native';

const SelectBox = ({ label, options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (value) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <View>
      <Text>{label}:</Text>
      <RNPickerSelect
        onValueChange={handleSelectChange}
        items={[
          { label: `Select ${label.toLowerCase()}`, value: '' },
          ...options.map((option) => ({ label: option.label, value: option.value })),
        ]}
        value={selectedValue}
      />
      {selectedValue && <Text>Selected {label.toLowerCase()}: {selectedValue}</Text>}
    </View>
  );
};

export default SelectBox;
