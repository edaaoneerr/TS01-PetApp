import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  content: ViewStyle;
  button: ViewStyle;
  vetRegisterButton: ViewStyle;

}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    content: {
      padding: 15,  
      top: 20
      },
      button: {
        color: colors.vetblue,
        margin:15,
        marginHorizontal:0,
      },
      vetRegisterButton: {
        margin:5,
        bottom: 5,
        marginHorizontal:0,
      }

})
}
