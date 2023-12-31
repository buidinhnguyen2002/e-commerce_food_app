import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const Styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    padding: 15,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardDiscount: {
    width: 300,
    minHeight: 200,
  },
  image: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 22.5,
  },
  imageListTile: {
    width: "100%",
    objectFit: "cover",
    height: 120,
    borderRadius: 30,
  },

  cardTicker: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    borderRadius: 10,
    textTransform: "uppercase",
    color: Colors.white,
    left: 10,
    top: 10,
  },
  imageBike: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },
  imageHeart: {
    width: 20,
    height: 20,
    objectFit: "contain",
  },
  labelCard: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
  },
  labelCardCancelled: {
    backgroundColor: Colors.red,
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: "row", // Sắp xếp các hình ảnh và văn bản theo chiều ngang
    alignItems: "center", // Căn giữa các phần tử trong hàng
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  modifyQuantity: {
    alignItems: "center",
    marginTop: 50,
  },
});
