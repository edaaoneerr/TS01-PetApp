import * as React from 'react';

import createStyles from "./VetServicesScreen.style";


import { SafeAreaView, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import { Appbar } from 'react-native-paper';

interface VetServicesScreenProps {
    navigation? : any;
  }
 

  
  const VetServicesScreen  = (props: VetServicesScreenProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);

    
    
    return (
    <SafeAreaView style = {{top: 40}}>    
        <Appbar.Header style = {{backgroundColor: 'transparent', elevation: 0}}>
        <Appbar.BackAction color = {colors.vetblue} onPress={() => {props.navigation.navigate("VetRegisterScreen")}} />
       </Appbar.Header> 
        <Text style = {styles.bigTitle}>Hizmetler</Text>
       <Text style = {styles.title}>Lütfen verdiğiniz hizmetleri seçiniz.</Text>
       
    </SafeAreaView>
  )
    
  }
export default VetServicesScreen;

