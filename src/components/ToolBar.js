import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import styles from "../Screens/Product/OverView.Styles";

const toolBarData = [
  { percentage: "90%", color: "#2EBC5D", text: "5" },
  { percentage: "75%", color: "#2EBC5D", text: "4" },
  { percentage: "15%", color: "#2EBC5D", text: "3" },
  { percentage: "20%", color: "#2EBC5D", text: "2" },
  { percentage: "5%", color: "#2EBC5D", text: "1" },
];
const ToolBar = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginRight: 50,
        }}
      >
        <View style={{ marginTop: -10 }}>
          {toolBarData.map((item, index) => (
            <View key={index} style={styles.numberContainer}>
              <Text style={[{ fontSize: 11, fontWeight: 700 }]}>
                {item.text}
              </Text>
            </View>
          ))}
        </View>
        <View>
          {toolBarData.map((item, index) => (
            <View key={index} style={styles.barContainer}>
              <View style={[styles.bar, { width: item.percentage }]}>
                <View
                  style={[styles.innerBar, { backgroundColor: item.color }]}
                ></View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default ToolBar;
