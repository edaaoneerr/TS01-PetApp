import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./VetInfo.style";
// import MockData from "./mock/MockData";
import Stars from "@shared-components/stars/Stars"; 
import { Image, Text, View } from 'react-native';
import { MapPinIcon } from "react-native-heroicons/outline";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export interface VetInfoProps {
    fullName: string;
    specialty: string;
    location: string;
}

export const VetInfo: React.FC<VetInfoProps> = ({ fullName, specialty, location }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);



  return (
    <View>
    <Image
          style= {styles.imgVet}
          source={{uri: "https://cdn.dribbble.com/userupload/2646500/file/original-edeeb85577ee5b5890ea6238113906f4.png?compress=1&resize=1600x1200"}}/>   
       <View style={styles.vetInfo}> 
       <Text style = {styles.vetTitle}> {fullName}</Text>
       <Text style = {styles.vetInfoText}>  <FontAwesome  name = "paw" size={13} color = {colors.vetblue}/>  {specialty} </Text>
       <MapPinIcon style = {{left:6}} size={16} color="#0EBE7F"/>
       <Text style = {styles.vetInfoTextGreen}> {location}</Text> 
       <Stars gorusSayisi = {50}/>      
       </View>
       </View>
  );
};

export default VetInfo;
