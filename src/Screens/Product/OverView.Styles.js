import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#E1E1E1",
    borderRadius: 10,
    width: "75%",
    height: "4%",
    marginLeft: 20,
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
  toolbar: {
    marginTop: 10,
    marginLeft: 0,
  },
  StarReview: {
    marginLeft: 20,
    alignItems: "center",
    marginTop: 20,
  },
  dividerStar: {
    width: 2,
    height: "55%",
    backgroundColor: "#EEEEEF",
    margin: 10,
  },
  dividerStar1: {
    width: 2,
    height: "50%",
    backgroundColor: "#EEEEEF",
    margin: 10,
  },
});

export default styles;
