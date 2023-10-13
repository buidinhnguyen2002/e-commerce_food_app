import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { CommonStyles, Margin, TypographyStyles } from "../../utils/StyleUtil";
import { Colors } from "../../utils/Colors";
import Transaction from "../../components/Transaction";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";

const EWallet = () => {
  const navigation = useNavigation();

  const TransactionHistory = () => {
    navigation.navigate(Routers.TransactionHistory);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingBottom: 130 }}
      >
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            },
          ]}
        >
          <Image
            style={[
              { width: 35, height: 35, resizeMode: "contain" },
              Margin.mr_25,
            ]}
            source={require("../../../assets/Icons/logo.png")}
          ></Image>
          <Text style={[{ marginRight: "auto" }, TypographyStyles.big]}>
            E-Wallet
          </Text>
          <Image
            style={[CommonStyles.iconSize, Margin.mr_25]}
            source={require("../../../assets/Icons/search.png")}
          ></Image>
          <Image
            style={CommonStyles.iconSize}
            source={require("../../../assets/Icons/3cham.png")}
          ></Image>
        </View>
        <View
          style={[
            {
              backgroundColor: Colors.primaryColor,
              borderRadius: 30,
              margin: 20,
              padding: 25,
            },
          ]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ color: Colors.white, fontSize: 20, fontWeight: 500 }}
            >
              Andrew Ainsley
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  {
                    fontSize: 32,
                    color: Colors.white,
                    fontWeight: "bold",
                    position: "relative",
                    // left: 10,
                  },
                ]}
              >
                VISA
              </Text>
              <View style={{}}>
                <Image
                  style={[{ width: 50, height: 35 }]}
                  source={require("../../../assets/Icons/visa.png")}
                />
                <Text style={{ color: "white", fontSize: 10 }}>mastercod</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: Colors.white, fontWeight: "bold" }}>
            ******************3629
          </Text>

          <Text style={{ color: Colors.white, marginTop: 20 }}>
            Your balance
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[
                { fontSize: 36, color: Colors.white, fontWeight: "bold" },
              ]}
            >
              $9,379
            </Text>
            <TouchableOpacity
              style={[
                {
                  width: 100,
                  height: 30,
                  borderRadius: 20,
                  backgroundColor: Colors.white,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                },
              ]}
            >
              <Image
                style={[CommonStyles.iconSizeSmall, { resizeMode: "contain" }]}
                source={require("../../../assets/Icons/down.png")}
              />
              <Text style={{ marginLeft: 10 }}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 20,
            marginTop: 0,
          }}
        >
          <Text style={TypographyStyles.medium}>Transaction History</Text>
          <TouchableOpacity onPress={TransactionHistory}>
            <Text
              style={{
                color: Colors.green,
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Transaction />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EWallet;
