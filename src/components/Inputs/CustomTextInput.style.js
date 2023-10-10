import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderRadius: 20,
        padding: 15,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.lightGrey,
    },
    searchContainer: {
        width: '100%',
        height: 70,
        borderRadius: 20,
        padding: 15,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.lightGrey,
    },
    iconSearch: {
        position: "absolute",
        left: 10,
        color: Colors.grey_01,
    },
});