import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
    }
});