import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { Colors, Margin } from "../../utils/Colors";
import CommonButton from "../../components/Buttons/CommonButton";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import Modal from "react-native-modal"; // Import react-native-modal

const EnterYourPin = () => {
  const navigation = useNavigation();
  const [isSuccessVisible, setSuccessVisible] = useState(false);

  const handleButtonPress = () => {
    setSuccessVisible(true);
  };

  const hideSuccessMessage = () => {
    setSuccessVisible(false);
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
        margin={5}
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
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {buttons}
          </View>
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

      {/* Success Modal */}
      <Modal
        isVisible={isSuccessVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor={Colors.black}
        backdropOpacity={0.7}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            height: 400,
            padding: 30,
            borderRadius: 30,
            margin: 30,
          }}
        >
          <View
            style={[
              {
                // alignContent: "space-between",
                alignItems: "center",
                // margin: 20,
                marginLeft: 60,
                marginRight: 60,
                height: 150,
                justifyContent: "center",
                backgroundColor: Colors.primaryColor,
                borderRadius: 90,
              },
            ]}
          >
            <Image
              style={[
                {
                  alignContent: "space-between",
                },
              ]}
              source={require("../../../assets/Icons/wallet.png")}
            ></Image>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.primaryColor,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Top Up Success!
          </Text>
          <Text style={{ textAlign: "center", margin: 20 }}>
            Xin chuc mung Xin chuc mung Xin chuc mung
          </Text>
          <View style={{}}>
            <CommonButton
              height={60}
              title={"OK"}
              bgColor={Colors.primaryColor}
              textColor={Colors.white}
              size={16}
              fontWeight={500}
              onPress={hideSuccessMessage}
              borderRadius={30}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EnterYourPin;
