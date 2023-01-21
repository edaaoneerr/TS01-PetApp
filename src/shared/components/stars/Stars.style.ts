import { ViewStyle, StyleSheet } from 'react-native';
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
 star: ViewStyle;
 fiveStars: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    star: {
        color: '#FFCE6D',
        bottom: 1,
        left: 2,
        marginLeft: -2.5,
    },
    fiveStars: {
        flexDirection: 'row', 
        position: 'absolute',
        bottom: 20,
        left: 6,
        
    
    },
    
  });
};
