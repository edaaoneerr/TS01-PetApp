import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  clinicText: TextStyle;
  clinicInfoText: TextStyle;
  addressText: TextStyle;
  addressTextGreen: TextStyle;
  contactTitleText: TextStyle;
  contactText: TextStyle;
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
  vetAddressContainer: ViewStyle;
  vetContactContainer: ViewStyle;
  clinicIcon: ViewStyle;
  addressIcon: ViewStyle;
  mapContainer: ViewStyle;

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
      vetAddressContainer: {
        backgroundColor: colors.white,
        borderColor: '#000000',
        borderWidth:1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'absolute',
        width: 390,
        height: 330,
        left:10,
        right:10,
        top: 10,
        marginTop: 45
      },  
      vetContactContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth:1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal: 10,
        width: 390,
        height: 120,
        top:390,
      },
    clinicIcon: {
        left: 20,
        top:15
    },
    addressIcon: {
        left: 30,
        top:10
    },
    clinicText: {
      left: 65, 
      bottom:73, 
      fontWeight: 'bold', 
      color: colors.black
    },
    clinicInfoText: {
        left: 65,
        bottom:23,
        fontSize:11
    },
    addressTextGreen: {
        left: 55,
        bottom:8,
        color: '#0EBE7F',
        fontSize:13,
    },
    addressText: {
        left: 35,
        bottom:3,
        fontSize: 13
    },
   mapContainer: {
        left: 15,
        height:150, 
        width:330, 
        marginLeft:15
    },
    contactTitleText: {
        color: '#50555C',
        left: 30,
        top:15,
        fontSize: 15
    },
    contactText: {
        color: '#3F434A',
        top: 35,
        left: 40,
        fontSize: 13
    },
  })
};