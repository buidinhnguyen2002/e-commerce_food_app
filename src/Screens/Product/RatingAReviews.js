import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveAllReviewRestaurant } from "../../store/actions/reviewRestaurant";
import { saveAllCustomer } from "../../store/actions/userAction";
import SeparatorComponent from "../../components/SeparatorComponent";
import StarSort from "../../components/StarSort";
import ToolBar from "../../components/ToolBar";
import { Colors } from "../../utils/Colors";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import styles from "./OverView.Styles";
import {
  CommonStyles,
  Padding,
  TypographyStyles,
  Margin,
} from "../../utils/StyleUtil";
import { Avatar } from "@rneui/themed";
import Rating from "./RatingAReview.style";
import { saveAllReply } from "../../store/actions/replyAction";

const RatingAndReview = ({ navigation, route }) => {
  const restaurantId = route.params.idRestaurant;
  const dispatch = useDispatch();
  const [chip, setChip] = useState(0);
  const [count, setCount] = useState(0);

  const reviews = useSelector((state) => state.reviewRestaurantReducer.reviews);
  const customers = useSelector((state) => state.customerReducer.customers);
  const getAllCustomer = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllCustomers, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const customersObj = data["data"];
        dispatch(saveAllCustomer({ customers: customersObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const getAllReply = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getAllRepLy, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const replyObj = data["data"];
        dispatch(saveAllReply({ reply: replyObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCustomer();
    getAllReply();
  }, []);

  // Filter reviews based on the restaurantId
  const filteredReviews = reviews.filter(
    (review) => review.restaurant_id === restaurantId
  );
  console.log(filteredReviews);
  const customerReview = filteredReviews.map((review) => {
    // Find the corresponding customer for each review
    const matchingCustomer = customers.find(
      (customer) => customer.id === review.customer_id
    );
    return { review, customer: matchingCustomer };
  });
  const reply = useSelector((state) => state.replyReducer.reply);
  const repReview = filteredReviews.map((review) => {
    const matchingRep = reply.find((repll) => repll.review_id === review.id);
    return { review, repll: matchingRep };
  });
  console.log(reply);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
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
                {Array(5)
                  .fill(require("../../../assets/Icons/star.png"))
                  .map((star, index) => (
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

            <View style={Styles.dividerStar1} />
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
              data={[
                { text: "Sort by", source: "../../assets/Icons/sort.png" },
                { text: "5", source: "" },
                { text: "4", source: "" },
                { text: "3", source: "" },
                { text: "2", source: "" },
                { text: "1", source: "" },
              ]}
              horizontal={true}
              renderItem={({ item, index }) => (
                <StarSort
                  text={item.text}
                  isChoose={chip === index}
                  onPress={() => {
                    setChip(index);
                  }}
                />
              )}
            />
          </View>
          <View style={[Styles.divider, { marginTop: -10 }]} />
        </View>
        {customerReview.map(({ review, customer }) => (
          <View style={Rating.commnent} key={review.id}>
            <View
              style={[
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              {/* <Avatar size={55} rounded source={{ uri: customer.avatar }} />
              <Text style={[TypographyStyles.mediumSWe]}>
                {customer.full_name}
              </Text> */}
              <View
                style={[
                  {
                    flexDirection: "row",
                  },
                ]}
              >
                {Array(5)
                  .fill(require("../../../assets/Icons/star.png"))
                  .map((star, index) => (
                    <Image
                      key={index}
                      style={[
                        CommonStyles.iconSizeSuperSmall,
                        { marginLeft: 3 },
                      ]}
                      source={star}
                    />
                  ))}
              </View>
              <Image
                style={[CommonStyles.iconSizeSmall, { marginRight: 20 }]}
                source={require("../../../assets/Icons/3cham.png")}
              />
            </View>
            <Text style={[Margin.mt_10]}>
              {review.message}
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
              <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Image
                  style={[CommonStyles.iconSizeSmall]}
                  source={require("../../../assets/Icons/heart2.png")}
                />
              </TouchableOpacity>
              <Text style={{ marginLeft: 10 }}>{count}</Text>
              <Text style={[{ marginLeft: 50, color: "grey" }]}>
                {review.create_at}
              </Text>
              <Text
                style={{
                  marginLeft: 50,
                  color: Colors.primaryColor,
                }}
              >
                Reply
              </Text>
            </View>
            {/* {repReview.map(({ review, repll }) => (
              <View key={review.id} style={{ marginBottom: 20 }}>
                <Text>{repll.message}</Text>
              </View>
            ))} */}
          </View>
        ))}

        <View>
          <Text style={{ marginLeft: 20 }}>Thêm đánh giá</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatingAndReview;
