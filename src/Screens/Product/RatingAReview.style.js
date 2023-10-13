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
});
export default Rating;
