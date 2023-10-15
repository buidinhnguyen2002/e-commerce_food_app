import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

const CheckoutStyles = StyleSheet.create({
  imageCart: {
    // borderRadius: 20,
  },
  titleBack: {
    marginTop: 20,
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
    padding: 10,
    marginLeft: 20,
  },
  deliverTo: {
    // width: 410,
    height: 160,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: 20,
    // marginTop: 0,
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  defaultStyles: {
    width: 60,
    height: 23,
    borderRadius: 5,
    backgroundColor: "#EDF9F1",
    textAlign: "center",
    color: Colors.green,
    top: -25,
    left: 85,
  },
  addressText: {
    marginTop: -40,
    marginLeft: 80,
  },
  imageBorder: {
    backgroundColor: "#EEFAF2",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  CheckoutICon: {
    marginTop: 7,
    marginLeft: 7,
  },
  orderSummary: {
    // width: 410,
    height: "auto",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: 20,
  },
  discountStyle: {
    height: 130,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: 20,
  },
  totalStyles: {
    height: 160,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: 20,
  },
  rowTotal: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingRight: 30,
    paddingLeft: 20,
    marginTop: 5,
  },
  buttonProduct: {
    width: "90%",
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.green,
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
    paddingTop: 10,
  },
  quantityStyles: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1BAC4B",
    // marginTop: 30,
  },
  buttonQuantity: {
    fontSize: 30,
    fontWeight: "700",

    marginRight: 10,
    // alignItems: "center",
  },
  buttonPlus: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginLeft: 10,
    padding: 3,
  },
  modifyQuantity: {
    // width: 95,
    // height: 40,
    // marginLeft: -10,
    alignItems: "center",
    marginTop: 50,
  },
});
export default CheckoutStyles;
