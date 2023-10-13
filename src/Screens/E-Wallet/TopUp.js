import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Colors";
import CommonButton from "../../components/Buttons/CommonButton";
import { TypographyStyles } from "../../utils/StyleUtil";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const TopUp = () => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (text) => {
    setText(text);
  };

  const handleButtonPress = () => {
    navigation.navigate(Routers.EnterYourPin);
  };

  // Tạo một mảng chứa 9 nút
  const buttons = [];
  for (let i = 1; i <= 9; i++) {
    buttons.push(
      <CommonButton
        key={i}
        height={45}
        title={`$${i * 10}`}
        textColor={Colors.primaryColor}
        size={16}
        width={120}
        fontWeight={500}
        borderWidth={2}
        borderRadius={30}
      />
    );
  }

  // Chia thành từng hàng, mỗi hàng có 3 nút
  const rows = [];
  for (let i = 0; i < buttons.length; i += 3) {
    rows.push(
      <View
        key={i}
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        {buttons.slice(i, i + 3)}
      </View>
    );
  }

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: 300 }}>
        Enter the amount of top up
      </Text>
      <TextInput
        style={{
          borderRadius: 30,
          height: 120,
          margin: 20,
          borderColor: Colors.primaryColor,
          borderWidth: 2,
          textAlign: "center",
          fontSize: 36,
          fontWeight: "bold",
        }}
        onChangeText={handleInputChange}
        value={text}
      />
      {rows}
      <CommonButton
        height={60}
        title={"Continue"}
        bgColor={Colors.primaryColor}
        textColor={Colors.white}
        size={16}
        fontWeight={500}
        onPress={handleButtonPress}
        borderRadius={30}
      />
    </View>
  );
};

export default TopUp;
