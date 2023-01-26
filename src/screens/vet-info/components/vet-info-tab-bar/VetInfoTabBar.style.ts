import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  vetInfoTabBar: ViewStyle;
  vetPagesButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    vetInfoTabBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      top: 0
},
vetPagesButton: {
  position: 'absolute',
  flexDirection: 'row',
  height: 5,
  backgroundColor: '#FFFFFF',
},
  });
};
