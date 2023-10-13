import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const TopUp = () => {
  const [text, setText] = useState("");

  const handleInputChange = (text) => {
    setText(text);
  };

  const handleButtonPress = () => {
    // Xử lý dữ liệu đã nhập ở đây
    console.log("Text input:", text);
  };

  return (
    <View>
      <Text>Input:</Text>
      <TextInput
        style={{ width: 200, height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={handleInputChange}
        value={text}
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

export default TopUp;
