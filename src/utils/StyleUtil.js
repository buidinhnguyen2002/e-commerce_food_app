import { StyleSheet } from "react-native";
import { FontSize } from "./Constant";

export const CommonStyles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconSize: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
});

export const TypographyStyles = StyleSheet.create({
    big: {
        fontSize: FontSize.large,
        fontWeight: "700",
    },
    medium: {
        fontSize: FontSize.medium,
        fontWeight: "700",
    },
    normal: {
        fontSize: FontSize.normal,
        fontWeight: "normal",
    },
    small: {
        fontSize: FontSize.small,
    },
});

export const Margin = StyleSheet.create({
    mb_5: {
        marginBottom: 5,
    },
    mb_10: {
        marginBottom: 10,
    },
    mb_15: {
        marginBottom: 15,
    },
    ml_5: {
        marginLeft: 5,
    },
    ml_10: {
        marginLeft: 10,
    },
    ml_15: {
        marginLeft: 15,
    },
    ml_20: {
        marginLeft: 20,
    },
    ml_25: {
        marginLeft: 25,
    },
    ml_30: {
        marginLeft: 30,
    },
});

