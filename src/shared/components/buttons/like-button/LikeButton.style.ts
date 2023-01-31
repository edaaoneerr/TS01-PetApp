import { ViewStyle, StyleSheet } from 'react-native';
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
    likeBtn: ViewStyle;

}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    likeBtn: {
        position: 'absolute',
        color: colors.vetblue,
        right:22,
        top: 20,
        zIndex: 99,
      },
      
    });
};