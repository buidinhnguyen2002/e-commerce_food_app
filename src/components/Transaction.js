import React from "react";
import { View, Image, Text } from "react-native";
import { Colors } from "../utils/Colors";
import { CommonStyles } from "../utils/StyleUtil";
import { ScrollView } from "react-native";

const Transaction = ({ name, date, amount, url, upDown, iconUrl }) => {
  return (
    // <ScrollView>
    <View style={{ padding: 20, paddingBottom: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            resizeMode: "contain",
          }}
          source={url} // Sử dụng biến 'url' trực tiếp
        ></Image>
        <View style={{ flex: 1, margin: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
            {name}
          </Text>
          <Text style={{ color: Colors.grey }}>{date}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{amount}</Text>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ color: Colors.grey }}>{upDown}</Text>
            <Image
              style={[CommonStyles.iconSizeSmall, { marginLeft: 5 }]}
              source={iconUrl}
            />
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

const TransactionList = () => {
  const transactions = [
    {
      name: "Transaction 1",
      date: "Dec 15, 2014 | 16:00 PM",
      amount: "$21.20",
      url: require("../../assets/Images/Foods/banhmi.png"),
      upDown: "Order",
      iconUrl: require("../../assets/Icons/z.png"),
    },
    {
      name: "Transaction 2",
      date: "Dec 16, 2014 | 17:30 PM",
      amount: "$15.50",
      url: require("../../assets/Images/Foods/banhmi.png"),
      upDown: "Top up",
      iconUrl: require("../../assets/Icons/up.png"),
    },
    {
      name: "Transaction 3",
      date: "Dec 17, 2014 | 14:45 PM",
      amount: "$30.75",
      url: require("../../assets/Images/Foods/banhmi.png"),
      upDown: "Order",
      iconUrl: require("../../assets/Icons/up.png"),
    },
    {
      name: "Transaction 4",
      date: "Dec 18, 2014 | 10:15 AM",
      amount: "$12.60",
      url: require("../../assets/Images/Foods/miquang.png"),
      upDown: "Order",
      iconUrl: require("../../assets/Icons/up.png"),
    },
    {
      name: "Transaction 5",
      date: "Dec 19, 2014 | 19:20 PM",
      amount: "$45.90",
      url: require("../../assets/Images/Foods/ocbu.png"),
      upDown: "Top up",
      iconUrl: require("../../assets/Icons/vi.png"),
    },
  ];

  return (
    <View>
      {transactions.map((transaction, index) => (
        <Transaction
          key={index}
          name={transaction.name}
          date={transaction.date}
          amount={transaction.amount}
          url={transaction.url}
          upDown={transaction.upDown}
          iconUrl={transaction.iconUrl}
        />
      ))}
    </View>
  );
};

export default TransactionList;
