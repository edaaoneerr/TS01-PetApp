import { ViewStyle, StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  searchHeader: ViewStyle;
  input: TextStyle;
  searchBar: ViewStyle;
  searchIconHeader: ViewStyle;
  threeLinesIconHeader: ViewStyle;
  heartIconHeader: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    searchHeader: {
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#FFFFFF',
    },
    searchBar: {
      width: 250,
      top: 15,
      height: 35,
      borderWidth: 1,
      borderColor: '#808080',
      borderRadius: 10
    },
    searchIconHeader: {
      top: 7,
      left: 5,
      color: '#000000'
    },
    input: {
      left: 25,
      flexDirection: 'row',
      position: 'absolute',
      height: 32,
      width: 200,
      paddingTop: 2,
      paddingBottom: 1,
      flexBasis: 'auto',
      flexGrow: 1,
      flexShrink: 1,
      color: '#000000'
    },
    threeLinesIconHeader: {
      top: 20,
      left: 10,
      color: colors.vetblue
    },
    heartIconHeader: {
      top: 20,
      left: 5,
      color: colors.vetblue,
    },
  });
};