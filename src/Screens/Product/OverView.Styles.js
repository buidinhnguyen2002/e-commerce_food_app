import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    backgroundColor: "#E1E1E1",
    borderRadius: 10,
    width: "80%",
    height: "5%",
    marginLeft: 10,
  },
  numberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  bar: {
    height: 20,
    borderRadius: 10,
    height: "100%",
    flexDirection: "row", // Để có thể chứa innerBar bên trong
    overflow: "hidden", // Đảm bảo innerBar không tràn ra ngoài khi có màu xanh lá
  },
  innerBar: {
    flex: 1, // Để innerBar mở rộng theo chiều ngang tùy theo tỷ lệ
  },

  StarReview: {
    marginLeft: 20,
    alignItems: "center",
    marginTop: 10,
  },
  dividerStar: {
    width: 2,
    height: "55%",
    backgroundColor: "#EEEEEF",
    margin: 10,
    // marginLeft: 30,
  },
  dividerStar1: {
    width: 2,
    height: "65%",
    backgroundColor: "#EEEEEF",
    margin: 10,
    // marginLeft: 30,
  },
});

export default styles;
