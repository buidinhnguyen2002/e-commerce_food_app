import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";

export const ButtonStyles = StyleSheet.create({
    primaryButton: {
        width: '85%',
        height: 60,
        borderRadius: 30,
        padding: 15,
        marginTop: 20,
        backgroundColor: Colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
    },
    navigationButton: {
        width: 50,
        height: 50,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    outlineButton: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 25,
        borderColor: Colors.paleGray,
        borderWidth: 1,
    },
    profileIconButton: {
        width:15, height: 15, alignSelf:'center'
    },
     profileButton: {
        borderColor: 'white',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10
     }
});