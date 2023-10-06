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
  imageProduct: {
    width: 450,
    height: 300,
  },
  imageCart: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});

export const TypographyStyles = StyleSheet.create({
  soBig: {
    fontSize: FontSize.soLarge,
    fontWeight: "700",
  },
  big: {
    fontSize: FontSize.large,
    fontWeight: "700",
  },
  medium: {
    fontSize: FontSize.medium,
    fontWeight: "700",
  },
  mediumSWe: {
    fontSize: FontSize.medium,
    fontWeight: "500",
  },
  normal: {
    fontSize: FontSize.normal,
    fontWeight: "normal",
  },
  small: {
    fontSize: FontSize.small,
  },
  nameFood: {
    fontSize: 20,
    fontWeight: "700",
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
  mR_20: {
    marginRight: 20,
  },
});
