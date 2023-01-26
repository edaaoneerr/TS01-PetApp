import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
  clinicContainer: ViewStyle;
  clinicIcon: ViewStyle;
  clinicText: TextStyle;
  clinicInfoText: TextStyle;


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
    clinicText: {
      left: 65, 
      bottom:20, 
      fontWeight: 'bold', 
      color: colors.black
    },
    clinicInfoText: {
        left: 65,
        bottom:23,
        fontSize:11
    },
    clinicContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        height: 'auto',
        borderWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: 390,
        left: 10,
        right: 10,
        top: 10,
        marginTop: 45,
        paddingHorizontal: 25,
    
      },
      clinicIcon: {
        left: 20,
        top:15
    },
})
}