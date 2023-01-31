import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {

      flex: 1,
  
      padding: 30,
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
      backgroundColor: '#fff'
  
    },
  
    button: {
  
      width: 250,
  
      height: 60,
  
      backgroundColor: '#3740ff',
  
      alignItems: 'center',
  
      justifyContent: 'center',
  
      borderRadius: 4,
  
      marginBottom:12
  
    },
  
    buttonText: {
  
      textAlign: 'center',
  
      fontSize: 15,
  
      color: '#fff'
  }
})
}
