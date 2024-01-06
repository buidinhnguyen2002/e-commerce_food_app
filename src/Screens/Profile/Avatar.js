import React, { useState, useEffect } from 'react';
import { View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AvatarPicker = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access media library denied');
      }
    })();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatarSource({ uri: result.uri });
    }
  };

  return (
    <View style={{flex:1, alignSelf: 'center',alignContent: 'center', alignItems: 'center',}}>
      {avatarSource && (
        <Image
          source={avatarSource}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
      )}
    
      <Button  title="Select Avatar" onPress={selectImage} />
     
    </View>
  );
};

export default AvatarPicker;
