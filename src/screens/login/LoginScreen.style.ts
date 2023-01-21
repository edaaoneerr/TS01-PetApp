import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  content: ViewStyle;
  view: ViewStyle;
  cardButton: ViewStyle;

}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    content: {
      display: "flex",
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection:"row",
      backgroundColor: colors.white

    },
    view: {
      width: "80%"
    },
    cardButton: {
      margin: 2,
      marginHorizontal:0,   
     }


})
}
