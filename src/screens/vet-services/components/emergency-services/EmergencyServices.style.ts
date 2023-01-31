import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Style {
  services: ViewStyle;
  categoryButton: ViewStyle;
  title: TextStyle;
  categoryText: TextStyle;


}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    services: {
      top: 100,
      flexDirection: 'row', 
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 5,
      marginHorizontal: 20,
      elevation: 10
    },
      categoryButton: {
        borderColor : 'white',
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: 5,
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        padding: 1,
        paddingHorizontal: 20
      },
      categoryText: {
        fontSize: 15,
        color: colors.vetblue
      },
      title: {
        fontSize: 20,
        top: -5,
        left: 25,
        fontStyle: 'italic',
        color: colors.black,
        
      }
})
}
