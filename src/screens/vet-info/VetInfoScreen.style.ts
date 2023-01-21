import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    safeView:  {
      backgroundColor: '#F8F8F8',
      minHeight: '100%',
      height: '100%', 
      width: '100%',
      zIndex:1,
      flexDirection: 'column'
   },
   scrollableContentHome: {
      minHeight: '100%', 
      height: 1000,
      width: '100%',
      zIndex:1,
      },
})
}
