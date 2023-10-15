import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import Styles from "../../Screens/Product/ProductDetail.Style";
import { Colors } from "../../utils/Colors";
import styles from "./OverView.Styles";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import ToolBar from "../../components/ToolBar";

const stars = Array(5).fill(require("../../../assets/Icons/star.png")); // Tạo một mảng với 5 ngôi sao

const OverView = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 130 }}>
        <View style={{ backgroundColor: Colors.white }}>
          <Text style={[TypographyStyles.soBig, Margin.ml_15, Margin.mt_15]}>
            Big Garden Salad
          </Text>
          <View style={Styles.divider} />
          <View
            style={[{ flexDirection: "row", justifyContent: "space-between" }]}
          >
            <View style={styles.StarReview}>
              <Text style={TypographyStyles.soBig}>4.8</Text>
              <View style={[{ flexDirection: "row" }, Margin.mt_10]}>
                {stars.map((star, index) => (
                  <Image
                    key={index}
                    style={[CommonStyles.iconSizeSmall, Margin.ml_5]}
                    source={star}
                  />
                ))}
              </View>
              <Text style={[Colors.lightGrey, Margin.mt_10]}>
                (4.8k reviews)
              </Text>
            </View>

            <View style={styles.dividerStar} />
            <ToolBar />
          </View>

          <View style={[Margin.ml_10, { marginTop: -60 }]}>
            <View style={Styles.divider} />
            <Text style={TypographyStyles.mediumSWe}>OrverView</Text>
            <Text style={Margin.mt_10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore manga aliqua ut
              enima ad.{" "}
              <Text style={{ color: Colors.green }}>Read more...</Text>
            </Text>
            <View style={[Margin.mt_10, { flexDirection: "row" }]}>
              <View>
                <Text style={{ fontWeight: 500 }}>Monday - Friday </Text>
                <Text style={{ fontWeight: 500 }}>Saturday - Sunday </Text>
              </View>
              <View style={Margin.ml_25}>
                <Text style={[{ color: Colors.green }, { fontWeight: 500 }]}>
                  <Text style={[{ color: Colors.black }]}>:</Text>
                  10:00 - 22.00
                </Text>
                <Text style={[{ color: Colors.green }, { fontWeight: 500 }]}>
                  <Text style={{ color: Colors.black }}>:</Text>12:00 - 20.00
                </Text>
              </View>
            </View>
            <View style={Styles.divider} />
            <View>
              <Text style={[Margin.ml_15, TypographyStyles.mediumSWe]}>
                Address
              </Text>
              <View style={[{ flexDirection: "row", margin: 15 }]}>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 10 }]}
                  source={require("../../../assets/Icons/locate.png")}
                />

                <Text>Grand City St.100, New York, United States</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OverView;