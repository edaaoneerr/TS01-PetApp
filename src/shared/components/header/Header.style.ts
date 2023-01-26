import { ViewStyle, StyleSheet} from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  header: ViewStyle;
  messageBtn: ViewStyle;
  notificationBtn: ViewStyle;
  adjustmentBtn: ViewStyle;
}

export default (theme: ExtendedTheme) => {

 const { colors } = theme;

  return StyleSheet.create<Style>({
    header: {
      padding:20,
      paddingTop:25,
      paddingHorizontal: 175,
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      backgroundColor: colors.white
    },
    messageBtn: {
        color: colors.vetblue,
        left:140,
      },
      notificationBtn: {
        color: colors.vetblue,
        right: -120
      },
      adjustmentBtn: {
        right:140,
      }
  });
};
