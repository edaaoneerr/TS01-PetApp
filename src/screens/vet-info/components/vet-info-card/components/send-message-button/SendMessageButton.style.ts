import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  sendMessageButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    sendMessageButton:{
      backgroundColor: "#24CE85", 
      bottom:8,
      left:10,
      position: 'absolute',
      borderRadius: 10, 
      width: '47%',
      padding: 7.5,
      marginBottom:3,
  
    },
  });
};