import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  backdrop: ViewStyle;
  spinner: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    backdrop: {
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "rgb(0,0,0,0.6)",
      width: "100%",
      height: "100%",

    },
    spinner: {
      color: colors.white,

    },


})
}
