import React from 'react';
import { View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import createStyles from "./ServicesButtons.style";
import { useTheme } from '@react-navigation/native';



interface Props {
  textValues: string[];
  colors: any;
  styles: any;
  categoryText: string;
  activeIndices?: any;

}

const ServicesButtons: React.FC<Props> = ({
  textValues,
  colors,
  styles,
  categoryText,

}) => {
  
  const theme = useTheme();
  styles = React.useMemo(() => createStyles(theme), [theme]);

  const handlePress = (index: any) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i: number) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };
   
  const [activeIndices, setActiveIndices] = React.useState<any>([]); 

  return (
    <View>
      <Text style={styles.subCategoryText}>{categoryText}</Text>
      <View style={styles.container}>
       
      {textValues.map((text, index) => (
        <Button
          key={index}
          mode='contained'
          uppercase={false}
          compact
          color={activeIndices.includes(index) ? colors.vetblue : colors.white}
          style={styles.button}
          labelStyle={{
            color: activeIndices.includes(index) ? colors.white : colors.vetblue,
            ...styles.textButton
          }}
          onPress={() => handlePress(index)}
        >
          {text}
        </Button>
      ))}
    </View>
    </View>
  );
};

export default ServicesButtons;
