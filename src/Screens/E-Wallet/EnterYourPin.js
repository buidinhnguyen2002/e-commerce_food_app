import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/Colors";
import CommonButton from "../../components/Buttons/CommonButton";
import { TypographyStyles } from "../../utils/StyleUtil";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const EnterYourPin = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate(Routers.TopUp);
  };

  const buttons = [];
  for (let i = 1; i <= 4; i++) {
    buttons.push(
      <CommonButton
        key={i}
        height={60}
        title={`${i * 1}`}
        textColor={Colors.primaryColor}
        size={16}
        width={80}
        fontWeight={500}
        // borderWidth={1}
        borderRadius={20}
        bgColor={Colors.paleGray}
      />
    );
  }

  return (
    <View style={{ backgroundColor: Colors.white }}>
      <View
        style={{
          margin: 20,
          paddingBottom: 500,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            paddingTop: 100,
            justifyContent: "space-between",
            marginBottom: 100,
          }}
        >
          <Text
            style={{ textAlign: "center", marginBottom: 50, fontWeight: 300 }}
          >
            Enter your PIN to confirm top up
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {buttons}
          </View>
        </View>
        <View>
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
      </View>
    </View>
  );
};

export default EnterYourPin;
