import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
    callButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
      callButton:{
        backgroundColor: colors.vetblue, 
        bottom:50,
        left:10,
        position: 'absolute',
        borderRadius: 10, 
        paddingLeft: 150,
        padding: 7.5,
        width:'95%',
        marginBottom:1,
      },
        
      });
};