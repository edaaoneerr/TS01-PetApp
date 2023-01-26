import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from 'react-native';
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
  imgVet: ImageStyle;
  vetInfo: ViewStyle;
  vetInfoText: TextStyle;
  vetInfoTextGreen:TextStyle;
  vetTitle:TextStyle;

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
      imgVet:{
        width: 93, 
        height: 93, 
        borderRadius: 15,
        marginLeft: 15,
        marginBottom:45,
        marginTop: 10,
      },
      vetInfo : {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        color: 'black',
        borderRadius: 12,
        height: 100,
        width: 220,
        marginLeft: 120,
    
      },
      vetInfoText: {
        fontSize: 12,
        color: colors.vetblue,
        left: 3,
        letterSpacing: -0.2,
        paddingBottom: 3,

        },
        vetInfoTextGreen: {
            fontSize: 12,
            color: '#0EBE7F',
            left: 22,
            letterSpacing: -0.2,
            bottom: 18,
    
            },
      vetTitle: {
            top: -2,
            left: 5,
            fontSize: 15,
            color: colors.black,
            letterSpacing: -0.2,
            paddingBottom: 3
    }
    
  });
};
