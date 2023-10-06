import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    width: "40%",
    height: 280,
    marginLeft: 30,

    marginTop: 20,
    borderRadius: 20,
  },
  NameProduct: {
    paddingTop: 30,
  },
  iconContainer: {
    position: "absolute",
    top: 20, // Điều chỉnh khoảng cách từ trên xuống
    right: 20, // Điều chỉnh khoảng cách từ phải qua
    flexDirection: "row", // Sắp xếp các hình ảnh theo chiều ngang
  },
  iconsLeft: {
    position: "absolute",
    top: 20, // Điều chỉnh khoảng cách từ trên xuống
    left: 20, // Điều chỉnh khoảng cách từ phải qua
    flexDirection: "row",
  },
  icon: {
    marginRight: 10, // Điều chỉnh khoảng cách giữa các biểu tượng
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
    padding: 10,
    marginLeft: 20,
  },
  rowTagForYou: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
  },
  divider: {
    height: 2, // Chiều cao của dòng ngăn cách
    backgroundColor: "#EEEEEF", // Màu FF0000
    marginVertical: 10, // Khoảng cách dọc giữa các phần tử
    marginLeft: 20,
    marginRight: 20,
  },
  imageForYou: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 15,
  },
  menuStyle: {
    backgroundColor: "#FFFFFF",
    width: 400,
    height: 120,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonProduct: {
    width: "45%",
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.green,
    alignItems: "center",

    paddingTop: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 500,
    color: "#FFFFFF",
  },
});

export default Styles;
