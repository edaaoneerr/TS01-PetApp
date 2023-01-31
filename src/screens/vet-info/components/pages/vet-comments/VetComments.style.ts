import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  search: ViewStyle;
  icon: ViewStyle;
  bar: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      top: 100,
      borderColor: colors.black,
      borderWidth: 1,
      marginHorizontal: 10,
      height: 'auto',
      padding: 15,
      width: '95%',
      backgroundColor: colors.white,
      
    },
    search: {
       backgroundColor: 'transparent',
    },
    icon: {
      color: colors.vetblue,
    },
    bar: {
      backgroundColor: colors.white,
      borderColor: colors.white,
      width: 280
    }
  });
};
