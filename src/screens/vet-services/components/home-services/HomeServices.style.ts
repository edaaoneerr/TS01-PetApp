import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

interface Style {
  button: ViewStyle;
  container: ViewStyle;
  textButton: TextStyle;
  safeView: ViewStyle;
  scrollableContentHome: ViewStyle;
  subCategoryText: TextStyle;
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

      container : {
        top: 200,
        left: 25,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      button: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 15,
        padding:1.5,
        paddingHorizontal: 10,
        top: 250,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
      },
      textButton: {
        fontSize: 15,
        top: -2,
        left: 2,
        fontWeight: 'bold',
        
      },
      subCategoryText: {
        top: 180,
        left: 32

      }
      
})
}
