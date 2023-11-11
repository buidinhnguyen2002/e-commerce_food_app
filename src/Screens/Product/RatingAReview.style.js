import { StyleSheet } from "react-native";

const Rating = StyleSheet.create({
  commnent: {
    padding: 20,
    // alignItems: "center",
    // justifyContent: "space-between",
    marginTop: -30,
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#E1E1E1",
    borderRadius: 10,
    width: "75%",
    height: "3%",
    marginLeft: 10,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
    marginLeft: 10,
    // paddingRight: -2,
  },
  replyContainer: {
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  replyItem: {
    flexDirection: "row",
    alignItems: "center", // Đảm bảo các phần tử nằm giữa theo chiều dọc
    padding: 5,
    border: "1px solid #ccc",
    borderRadius: 5,
    marginBottom: 5,
  },
  replyText: {
    marginRight: 10,
  },
  replyTime: {
    color: "grey",
  },
});
export default Rating;
