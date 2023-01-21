import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  vetInfoCard: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    vetInfoCard : {
      backgroundColor: '#FFFFFF',
      height: 200,
      width: '100%',
      marginTop: 5,
      paddingTop:5,
      position: 'relative',
      marginBottom: 4,
      borderWidth: 1,
      zIndex: 1,
    },
  });
};
