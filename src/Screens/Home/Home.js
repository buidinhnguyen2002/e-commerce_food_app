import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Badge } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommonButton, {
  OutlineButton,
} from "../../components/Buttons/CommonButton";
import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import {
  CommonStyles,
  Margin,
  Padding,
  TypographyStyles,
} from "../../utils/StyleUtil";
import { Chip, SearchBar } from "@rneui/base";
import { SearchInput } from "../../components/Inputs/CustomTextInput";
import CategoryItem from "../../components/CategoryItem";
import CardDiscount, { ListTileCard } from "../../components/Cards/Cards";
import { LinearGradient } from "expo-linear-gradient";
import ChipCustom from "../../components/ChipCustom";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import SpecialOfferItem from "../../components/SpecialOfferItem";
import SeparatorComponent from "../../components/SeparatorComponent";

const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [chip, setChip] = useState(0);
  const navigation = useNavigation();
  const dummyChip = [
    { text: "All", source: "" },
    { text: "Hamburger", source: "" },
    { text: "Pizza", source: "" },
    { text: "Drink", source: "" },
    { text: "All", source: "" },
    { text: "All", source: "" },
    { text: "All", source: "" },
  ];
  const getHeaderHomeFragment = ({ name, icon, onPress }) => {
    return (
      <View style={[Styles.specialOfferHeader, Margin.mb_30]}>
        <View style={[{ flexDirection: "row" }]}>
          <Text style={[TypographyStyles.medium, Margin.mr_10]}>{name}</Text>
          {icon && (
            <Image source={require("../../../assets/Icons/emoji.png")} />
          )}
        </View>
        <Text
          onPress={onPress}
          style={[
            TypographyStyles.normal,
            { color: Colors.primaryColor, fontWeight: 600 },
          ]}
        >
          See All
        </Text>
      </View>
    );
  };
  const redirectSpecialOffers = () => {
    navigation.navigate(Routers.SpecialOffers);
  };
  // const separatorComponent = () => <View style={Styles.separator}></View>
  return (
    <SafeAreaView style={Styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Padding.pd_horizontal_30]}>
          <View style={[Styles.topContainer, Margin.mb_15]}>
            <View style={Styles.topLeftContainer}>
              <Avatar
                size={55}
                rounded
                source={{
                  uri: "https://randomuser.me/api/portraits/men/36.jpg",
                }}
              />
              <View style={Margin.ml_25}>
                <Text
                  style={[
                    TypographyStyles.normal,
                    { color: Colors.grey },
                    Margin.mb_5,
                  ]}
                >
                  Deliver to
                </Text>
                <Text style={[TypographyStyles.medium]}>Ho Chi Minh City</Text>
              </View>
            </View>
            <View style={Styles.topRightContainer}>
              <View>
                <OutlineButton />
              </View>
              <View style={Margin.ml_15}>
                <OutlineButton />
              </View>
            </View>
          </View>
          <View style={Margin.mb_25}>
            <SearchInput
              value={textSearch}
              onChangeText={(text) => {
                setTextSearch(text);
              }}
              placeholder={"What are you craving?"}
            />
          </View>
          <View style={[Margin.mb_30]}>
            {getHeaderHomeFragment({
              name: "Special Offers",
              onPress: redirectSpecialOffers,
            })}
            <SpecialOfferItem />
            <View style={[Styles.categoryContainer, Margin.mt_15]}>
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
              <CategoryItem
                source={"../../assets/Images/sandwich.png"}
                name={"Sandwich"}
              />
            </View>
          </View>
        </View>
        <View style={[Padding.pd_horizontal_30, Margin.mb_30]}>
          {getHeaderHomeFragment({
            name: "Discount Guaranteed!",
            icon: "abc",
            onPress: redirectSpecialOffers,
          })}
          <FlatList
            contentContainerStyle={[
              Padding.pd_vertical_5,
              { paddingHorizontal: 2 },
            ]}
            ItemSeparatorComponent={SeparatorComponent({ width: 25 })}
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1, 1]}
            horizontal={true}
            renderItem={({ item }) => <CardDiscount />}
          />
        </View>
        <View style={[Padding.pd_horizontal_30, Margin.mb_30]}>
          {getHeaderHomeFragment({ name: "Recommended For You", icon: "abc" })}
          <FlatList
            contentContainerStyle={[
              Padding.pd_vertical_5,
              Margin.mb_25,
              { paddingHorizontal: 2 },
            ]}
            ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
            showsHorizontalScrollIndicator={false}
            data={dummyChip}
            horizontal={true}
            renderItem={({ item, index }) => (
              <ChipCustom
                text={item.text}
                isChoose={chip == index}
                onPress={() => {
                  setChip(index);
                }}
              />
            )}
          />
          <View style={Styles.recommendContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}
              style={{ paddingHorizontal: 10 }}
            >
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
              <ListTileCard />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 100,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  topRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  specialOfferHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 40,
    columnGap: 20,
  },
  recommendContainer: {
    flex: 1,
    height: 700,
  },
});

export default Home;