import React from 'react';
import SelectBox from '../../components/SelectBox';


const GenderSelect = () => {
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  const handleGenderSelect = (value) => {
    // Handle the selected gender value as needed
    console.log('Selected gender:', value);
  };

  return (
    <SelectBox styles={{justifyContent: 'center', alignContent: 'center',alignSelf: 'center',}} label="Gender" options={genderOptions} onSelect={handleGenderSelect} />
  );
};

export default GenderSelect;
