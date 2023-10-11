import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import {
  CommonStyles,
  Padding,
  TypographyStyles,
  Margin,
} from "../../utils/StyleUtil";
import Styles from "../../Screens/Product/ProductDetail.Style";
import { Colors } from "../../utils/Colors";
import styles from "./OverView.Styles";
import SeparatorComponent from "../../components/SeparatorComponent";
import ChipCustom from "../../components/ChipCustom";
import { Chip, SearchBar } from "@rneui/base";
import StarSort from "../../components/StarSort";
import { Avatar, Badge } from "@rneui/themed";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Rating from "./RatingAReview.style";
import ToolBar from "../../components/ToolBar";

const stars = Array(5).fill(require("../../../assets/Icons/star.png")); // Tạo một mảng với 5 ngôi sao
const toolBarData = [
  { percentage: "90%", color: "#2EBC5D", text: "5" },
  { percentage: "75%", color: "#2EBC5D", text: "4" },
  { percentage: "15%", color: "#2EBC5D", text: "3" },
  { percentage: "20%", color: "#2EBC5D", text: "2" },
  { percentage: "5%", color: "#2EBC5D", text: "1" },
];

const ReviewSort = [
  { text: "Sort by", source: "../../assets/Icons/sort.png" },
  { text: "5", source: "" },
  { text: "4", source: "" },
  { text: "3", source: "" },
  { text: "2", source: "" },
  { text: "1", source: "" },
];

const RatingAndReview = () => {
  const [chip, setChip] = useState(0);
  const [count, setCount] = useState(0);
  const handleLove = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 200 }}
      >
        <View style={[{ backgroundColor: Colors.white }]}>
          <View style={Styles.divider} />
          <View
            style={[
              { flexDirection: "row", justifyContent: "space-between" },

              { marginTop: 10 },
            ]}
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

            <View style={styles.dividerStar1} />
            <ToolBar />
          </View>
          <View style={[Styles.divider, { marginTop: -10 }]} />
          <View>
            <FlatList
              contentContainerStyle={[
                Padding.pd_vertical_5,
                Margin.mb_25,
                { paddingHorizontal: 2 },
              ]}
              ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
              showsHorizontalScrollIndicator={false}
              data={ReviewSort}
              horizontal={true}
              renderItem={({ item, index }) => (
                <StarSort
                  text={item.text}
                  isChoose={chip == index}
                  onPress={() => {
                    setChip(index);
                  }}
                />
              )}
            />
          </View>
          <View style={[Styles.divider, { marginTop: -10 }]} />
        </View>
        <View style={Rating.commnent}>
          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
            ]}
          >
            <Avatar
              size={55}
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/men/36.jpg",
              }}
            />
            <Text style={[TypographyStyles.mediumSWe]}>Charolette Hanlin</Text>
            <View
              style={[
                {
                  flexDirection: "row",
                },
              ]}
            >
              {stars.map((star, index) => (
                <Image
                  key={index}
                  style={[CommonStyles.iconSizeSuperSmall, { marginLeft: 3 }]}
                  source={star}
                />
              ))}
            </View>
            <Image
              style={[
                CommonStyles.iconSizeSmall,
                // Margin.ml_15,
                { marginRight: 20 },
              ]}
              source={require("../../../assets/Icons/3cham.png")}
            />
          </View>
          <Text style={[Margin.mt_10, { textAlign: "center" }]}>
            Excellent food.Menu is extensive and and seasonal to a particularly
            high standard. Definitely find dining.
            <Image
              style={[CommonStyles.iconSizeSmall, Margin.ml_5]}
              source={require("../../../assets/Icons/emoji.png")}
            />
            <Image
              style={[CommonStyles.iconSizeSmall, Margin.ml_5]}
              source={require("../../../assets/Icons/emoji.png")}
            />
          </Text>
          <View style={[{ flexDirection: "row", marginTop: 10 }]}>
            <TouchableOpacity onPress={handleLove}>
              <Image
                style={[CommonStyles.iconSizeSmall]}
                source={require("../../../assets/Icons/heart2.png")}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>{count}</Text>
            <Text style={[{ marginLeft: 50, color: "grey" }]}>6 days ago</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatingAndReview;
