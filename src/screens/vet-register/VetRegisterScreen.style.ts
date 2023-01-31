import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  register: ViewStyle;
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    register: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 9999
      
    },
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
      height: '100%',
      width: '100%',
      zIndex:1,
      },
})
}
