import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    // width: "auto",
    height: 280,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    // maxWidth: "50%",
    width: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  NameProduct: {
    paddingTop: 30,
    // paddingRight: 20,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  rowTagForYou: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
    // padding: 10,
    justifyContent: "center",
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  divider: {
    height: 2, // Chiều cao của dòng ngăn cách
    backgroundColor: "#EEEEEF", // Màu FF0000
    margin: 10,
  },
  imageForYou: {
    // width: "auto",
    // resizeMode: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 10,
  },
  menuStyle: {
    backgroundColor: "#FFFFFF",
    width: "auto",
    height: 150,
    // shadowColor:"Red",

    borderRadius: 30,
    marginTop: 20,
    marginRight: 20,
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
  cardTicker: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    borderRadius: 10,
    color: Colors.white,
    left: 10,
    top: 10,
  },
});

export default Styles;
