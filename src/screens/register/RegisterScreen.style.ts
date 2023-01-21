import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  content: ViewStyle;
  button: ViewStyle;

}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    content: {
        padding:15,
        paddingTop:0,
  
      },
      button: {
        margin:15,
        marginHorizontal:0,
      }

})
}
