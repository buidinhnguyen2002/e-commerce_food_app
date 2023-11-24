import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  saveAllReviewRestaurant,
} from "../../store/actions/reviewRestaurant";
import { saveAllCustomer } from "../../store/actions/userAction";
import SeparatorComponent from "../../components/SeparatorComponent";
import StarSort from "../../components/StarSort";
import ToolBar from "../../components/ToolBar";
import { Colors } from "../../utils/Colors";
import Styles from "../../Screens/Restaurant/RestaurantDetail.Style";
import styles from "./OverView.Styles";
import ApiUrlConstants from "../../utils/api_constants";

import {
  CommonStyles,
  Padding,
  TypographyStyles,
  Margin,
} from "../../utils/StyleUtil";
import { Avatar } from "@rneui/themed";
import Rating from "./RatingAReview.style";
import { Input } from "native-base";
import { replyReview } from "../../store/actions/reviewRestaurant";

const ReviewRestarantComponent = ({
  id,
  avatar,
  full_name,
  message,
  create_at,
}) => {
  const [count, setCount] = useState(0);
  const [showRepliesForReviewId, setShowRepliesForReviewId] = useState(null); // New state variable
  const dispatch = useDispatch();
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
        const repObj = data["data"];
        console.log(repObj);
        dispatch(replyReview({ reply: repObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // getAllCustomer();
    getAllReply();
  }, []);
  const reply = useSelector((state) => state.reviewRestaurantReducer.reply);

  const toggleReplies = (reviewId) => {
    // Toggle show replies for a specific review
    setShowRepliesForReviewId(
      showRepliesForReviewId === reviewId ? null : reviewId
    );
  };
  return (
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
        <Avatar size={55} rounded source={{ uri: avatar }} />
        <Text style={[TypographyStyles.mediumSWe]}>{full_name}</Text>
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
                style={[CommonStyles.iconSizeSuperSmall, { marginLeft: 3 }]}
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
        {message}
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
        <Text style={[{ marginLeft: 50, color: "grey" }]}>{create_at}</Text>

        <Text
          style={{
            marginLeft: 50,
            color: Colors.primaryColor,
          }}
          onPress={() => toggleReplies(id)}
        >
          Reply
        </Text>
      </View>
      {showRepliesForReviewId === id && (
        <FlatList
          data={reply.filter((rep) => rep.review_id === id)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={Rating.replyContainer}>
              <Text style={Rating.replyText}>{item.message}</Text>
              <Text style={Rating.replyTime}>{item.create_at}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
export default ReviewRestarantComponent;
