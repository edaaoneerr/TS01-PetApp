import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Style {
    getAppointmentBtn: ViewStyle;
    appointmentBtnText: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    getAppointmentBtn: {
        backgroundColor: "#24CE85", 
        color: '#FFFFFF',
        bottom:8,
        right:10,
        position: 'absolute',
        borderRadius: 10, 
        padding: 8.5,      
        width: '47%',
        marginBottom:3,
      },
      appointmentBtnText:{
        fontSize: 13,
        paddingLeft: 35,  
        color: colors.white,
        fontWeight: 'bold'
    },
  });
};