import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./Stars.style";
// import MockData from "./mock/MockData";
// import CardItem from "./components/card-item/CardItem"; 
import { Text, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';


interface StarsProps {
  gorusSayisi: number;
}

const Stars: React.FC<StarsProps> = ({gorusSayisi}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);



  return (
    <View style={styles.fiveStars}>
      <StarIcon style={styles.star} size={17} color="#FFCE6D"/>
      <StarIcon style={styles.star} size={17} color="#FFCE6D"/>
      <StarIcon style={styles.star} size={17} color="#FFCE6D"/>
      <StarIcon style={styles.star} size={17} color="#FFCE6D"/>
      <StarIcon style={styles.star} size={17} color="#FFCE6D"/> 
      <Text style={{color: '#979797', fontSize: 9}}> ({gorusSayisi} görüş)</Text>
      </View>
  );
};

export default Stars;
