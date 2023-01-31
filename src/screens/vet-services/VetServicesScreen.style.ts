import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Style {
  title: TextStyle;
  bigTitle: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
      bigTitle: {
        fontSize: 35,
        top: -5,
        left: 25,
        fontWeight: 'bold',
        color: colors.black,
        
      },
      title: {
        fontSize: 15,
        top: -2,
        left: 27,
        color: colors.black,
        
      }
})
}
