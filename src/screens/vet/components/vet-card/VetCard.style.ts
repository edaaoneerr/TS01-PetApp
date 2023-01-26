import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
    safeView: ViewStyle;
    vetCard: ViewStyle;
    scrollableContentHome: ViewStyle;
    vetAvailable:TextStyle;
    vetAvailableGreenBold:TextStyle;
    vetAvailableGreen:TextStyle;

}

export default (theme: ExtendedTheme) => {
//   const { colors } = theme;
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
        // height: 1000,
        width: '100%',
        zIndex:1,
        },
        vetAvailable : {
            position: 'absolute',
            fontSize: 13,
            color: '#00C2CB',
            fontWeight: 'bold',
            top: 118,
            left: 18,
            letterSpacing: -0.2
        },
        vetAvailableGreenBold : {
            position: 'absolute',
            fontSize: 13,
            color: '#0EBE7F',
            fontWeight: 'bold',
            top: 135,
            left: 18,
            letterSpacing: -0.2
        },
        vetAvailableGreen : {
            position: 'absolute',
            fontSize: 13,
            color: '#0EBE7F',
            top: 134,
            left: 57,
            letterSpacing: -0.2
        }, 
        vetCard : {
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            height: 170,
            marginHorizontal: 12,
            marginTop: 5,
            paddingTop:5,
            position: 'relative',
            marginBottom: 4,
            borderWidth: 1,
            zIndex: 1,
          },
      
    });
};