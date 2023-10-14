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
    },
    horizontal_direction: {
        flexDirection: "row",
    },
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
    verySmall: {
        fontSize: FontSize.verySmall,
    },
    tinySmall: {
        fontSize: FontSize.tinySmall,
    }
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
    mb_20: {
        marginBottom: 20,
    },
    mb_25: {
        marginBottom: 25,
    },
    mb_30: {
        marginBottom: 30,
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
    mr_10: {
        marginRight: 10,
    },
    mr_15: {
        marginRight: 15,
    },
    mr_20: {
        marginRight: 20,
    },
    mr_25: {
        marginRight: 25,
    },
    mt_10: {
        marginTop: 10,
    },
    mt_20: {
        marginTop: 20,
    },
    mt_15: {
        marginTop: 15,
    },
    mg_horizontal_10: {
        marginHorizontal: 10,
    },
    mg_horizontal_20: {
        marginHorizontal: 20,
    },
    mg_horizontal_15: {
        marginHorizontal: 15,
    },
    mg_vertical_20: {
        marginVertical: 20,
    }
});
export const Padding = StyleSheet.create({
    pb_5: {
        marginBottom: 5,
    },
    pd_horizontal_10: {
        paddingHorizontal: 10,
    },
    pd_horizontal_20: {
        paddingHorizontal: 20,
    },
    pd_horizontal_30: {
        paddingHorizontal: 30,
    },
    pb_10: {
        marginBottom: 10,
    },
    pb_15: {
        marginBottom: 15,
    },
    pl_5: {
        marginLeft: 5,
    },
    pl_10: {
        marginLeft: 10,
    },
    pl_15: {
        marginLeft: 15,
    },
    pl_20: {
        marginLeft: 20,
    },
    pl_25: {
        marginLeft: 25,
    },
    pl_30: {
        marginLeft: 30,
    },pd_vertical_30: {
        paddingVertical: 30,
    },
    pd_vertical_20: {
        paddingVertical: 20,
    },
    pd_vertical_10: {
        paddingVertical: 10,
    },
    pd_vertical_5: {
        paddingVertical: 5,
    }
});

