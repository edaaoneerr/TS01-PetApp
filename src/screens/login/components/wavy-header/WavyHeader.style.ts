import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    svgCurve: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    svgCurve: {
        position: 'absolute',
        width: 415,
        backgroundColor: colors.vetblue, 
        height: 180,
        top: 10
    },
  });
};