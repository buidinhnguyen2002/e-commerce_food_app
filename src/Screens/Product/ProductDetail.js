import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { SafeAreaView } from "react-native";
import { CommonStyles, TypographyStyles, Margin } from "../../utils/StyleUtil";
import { ScrollView } from "react-native";
import Styles from "../../Screens/Product/ProductDetail.Style";
import { useNavigation } from "@react-navigation/native";
import { Routers } from "../../utils/Constant";
import OverView from "./OverView";
import CardProductDetail from "../../components/Cards/CardProductDetail";
import CardMenu from "../../components/Cards/CardMenu";

const ProductDetail = () => {
  const navigation = useNavigation();
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
  const OverViewScreen = () => {
    navigation.navigate(Routers.OverView);
  };
  const RatingAndReview = () => {
    navigation.navigate(Routers.RatingAndReview);
  };
  const OffersAreAvailable = () => {
    navigation.navigate(Routers.OffersAreAvailable);
  };
  const [clickedMenuItems, setClickedMenuItems] = useState([]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 130 }}
      >
        <View>
          <Image
            style={CommonStyles.imageProduct}
            source={require("../../../assets/Images/Foods/banhmi.png")}
          />
          <View style={Styles.iconsLeft}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon, Colors.white]}
              source={require("../../../assets/Icons/arrow.png")}
            />
          </View>
          <View style={Styles.iconContainer}>
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/heart.png")}
            />
            <Image
              style={[CommonStyles.iconSize, Styles.icon]}
              source={require("../../../assets/Icons/share.png")}
            />
          </View>

          <View>
            <View style={Styles.rowContainer}>
              <TouchableOpacity onPress={OverViewScreen}>
                <Text style={[TypographyStyles.soBig, Styles.NameProduct]}>
                  Big Garden Salad
                </Text>
              </TouchableOpacity>
              <Image
                style={[
                  CommonStyles.iconSize,
                  { marginLeft: 70, marginTop: 30 },
                ]}
                source={require("../../../assets/Icons/arrownext.png")}
              />
            </View>
            <View>
              <View style={Styles.divider} />
              <TouchableOpacity onPress={RatingAndReview}>
                <View style={Styles.rowContainer}>
                  <Image
                    style={[CommonStyles.iconSize, { marginRight: 20 }]}
                    source={require("../../../assets/Icons/star.png")}
                  />
                  <Text style={[TypographyStyles.medium, { marginRight: 20 }]}>
                    4.8
                  </Text>
                  <Text style={[TypographyStyles.small, Colors.grey]}>
                    (4.8k reviews)
                  </Text>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      { marginRight: 20 },
                      { marginLeft: 150 },
                    ]}
                    source={require("../../../assets/Icons/arrownext.png")}
                  />
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
              <View style={Styles.rowContainer}>
                <Image
                  style={[CommonStyles.iconSize, { marginRight: 20 }]}
                  source={require("../../../assets/Icons/locate.png")}
                />
                <Text style={TypographyStyles.medium}>2.4 km</Text>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    {
                      alignItems: "baseline",
                      justifyContent: "flex-end",
                      marginLeft: "auto",
                    },
                  ]}
                  source={require("../../../assets/Icons/arrownext.png")}
                />
              </View>
              <View style={Styles.rowContainer}>
                <Text
                  style={[
                    Margin.mR_20,
                    { marginLeft: 50 },
                    TypographyStyles.small,
                    Colors.blackGrey,
                  ]}
                >
                  Delivery now
                </Text>
                <Text style={Margin.ml_20}>|</Text>
                <Image
                  style={[
                    CommonStyles.iconSize,
                    { marginLeft: 20, marginRight: 20 },
                  ]}
                  source={require("../../../assets/Icons/bike.png")}
                />
                <Text style={[TypographyStyles.small, Colors.blackGrey]}>
                  $2.00
                </Text>
              </View>
              <View style={Styles.divider} />
              <TouchableOpacity onPress={OffersAreAvailable}>
                <View style={Styles.rowContainer}>
                  <Image
                    style={[CommonStyles.iconSize, { marginRight: 20 }]}
                    source={require("../../../assets/Icons/z.png")}
                  />
                  <Text style={TypographyStyles.medium}>
                    Offers are available
                  </Text>
                  <Image
                    style={[
                      CommonStyles.iconSize,
                      {
                        alignItems: "baseline",
                        justifyContent: "flex-end",
                        marginLeft: "auto",
                      },
                    ]}
                    source={require("../../../assets/Icons/arrownext.png")}
                  />
                </View>
              </TouchableOpacity>
              <View style={Styles.divider} />
            </View>
          </View>
          <View style={{ backgroundColor: Colors.background }}>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              For you
            </Text>

            <CardProductDetail />
          </View>
          <View style={{ backgroundColor: Colors.background }}>
            <Text
              style={[TypographyStyles.big, { marginLeft: 20, marginTop: 10 }]}
            >
              Menu
            </Text>
            <CardMenu />
            <View style={[Styles.rowContainer, { marginTop: 20 }]}>
              <TouchableOpacity
                style={[Styles.buttonProduct, { marginRight: 20 }]}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    paddingTop: 5,
                  }}
                >
                  Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.buttonProduct}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#FFFFFF",
                    paddingTop: 5,
                  }}
                >
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
