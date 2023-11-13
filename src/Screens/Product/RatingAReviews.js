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
import { loginSuccess } from "../../store/actions/userAction";
import ReviewRestarantComponent from "../../Screens/Product/ReviewRestarantComponent";
const RatingAndReview = ({ navigation, route }) => {
  const restaurantId = route.params.idRestaurant;
  const dispatch = useDispatch();
  const [chip, setChip] = useState(0);
  const [count, setCount] = useState(0);
  const [showReplies, setShowReplies] = useState({});
  const [inputValue, setInputValue] = useState("");
  const toggleReplies = (reviewId) => {
    setShowReplies((prevShowReplies) => ({
      ...prevShowReplies,
      [reviewId]: !prevShowReplies[reviewId],
    }));
  };
  const reviews = useSelector((state) => state.reviewRestaurantReducer.reviews);
  console.log(reviews);

  // const getAllReply = async () => {
  //   try {
  //     const response = await fetch(ApiUrlConstants.getReviewRestaurant, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (!response.ok) {
  //       throw new Error("Lỗi mạng");
  //     }
  //     const data = await response.json();
  //     if (data["status"] == "success") {
  //       const replyObj = data["data"];
  //       dispatch(saveAllReply({ reply: replyObj }));
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getAllReviewsRestaurant = async (restaurantId) => {
    try {
      const response = await fetch(
        ApiUrlConstants.getReviewRestaurant + "?restaurant_id=" + restaurantId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }
      const data = await response.json();
      if (data["status"] == "success") {
        const reviewResObj = data["data"];
        console.log(reviewResObj);
        dispatch(saveAllReviewRestaurant({ reviews: reviewResObj }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getAllCustomer();
    // getAllReply();
    getAllReviewsRestaurant(restaurantId);
  }, []);
  const reviewId = useSelector((state) => state.reviewRestaurantReducer.id);

  // const reply = useSelector((state) => state.reviewRestaurantReducer.reply);
  // const repFilter = reply.filter((rep) => rep.review_id === reviewId);
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const customerId = useSelector((state) => state.userReducer.id);

  const handleSubmit = async () => {
    try {
      const response = await fetch(ApiUrlConstants.getReviewRestaurant, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: restaurantId,
          customer_id: customerId, // Thêm mã khách hàng nếu có
          message: inputValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi mạng");
      }

      const data = await response.json();

      if (data["status"] === "success") {
        console.log("respo" + data["data"]);
        // const createReviewResObj = data["data"];
        dispatch(
          addReview({
            restaurant_id: restaurantId,
            customer_id: customerId,
            message: inputValue,
          })
        );
        // Review đã được tạo thành công
        console.log("Review đã được tạo thành công");
        setInputValue("");

        // Thực hiện cập nhật danh sách review bằng cách dispatch action
        // dispatch(addReview({ reviews: data.data }));
      } else {
        // Xử lý lỗi từ server
        console.error("Lỗi từ server:", data.message);
      }
    } catch (error) {
      console.error(error);
    }
    getAllReviewsRestaurant(restaurantId);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <ScrollView contentContainerStyle={{ paddingBottom: 180 }}> */}
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
            <Text style={[Colors.lightGrey, Margin.mt_10]}>(4.8k reviews)</Text>
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
        <View
          style={[Styles.divider, { marginTop: -10, marginBottom: -120 }]}
        />
      </View>
      <FlatList
        contentContainerStyle={[
          Padding.pd_vertical_5,
          Margin.mb_25,
          { paddingHorizontal: 2 },
        ]}
        ItemSeparatorComponent={SeparatorComponent({ width: 15 })}
        showsVerticalScrollIndicator={false}
        data={reviews}
        horizontal={false}
        renderItem={({ item, index }) => (
          <ReviewRestarantComponent
            id={item.id}
            full_name={item.full_name}
            avatar={item.avatar}
            message={item.message}
            create_at={item.create_at}
            isChoose={chip === index}
          />
        )}
      />
      <View>
        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 18 }}>
          Thêm đánh giá
        </Text>
        <TextInput
          style={{ padding: 20 }}
          placeholder="Nhập vào đây"
          onChangeText={handleInputChange}
          value={inputValue}
        />
        <View style={{ padding: 20, paddingTop: 0 }}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
      {/* //   </ScrollView> */}
    </SafeAreaView>
  );
};

export default RatingAndReview;
