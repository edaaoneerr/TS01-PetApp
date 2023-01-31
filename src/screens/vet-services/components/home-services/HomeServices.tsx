import * as React from 'react';

import createStyles from "./HomeServices.style";


import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { Button } from 'react-native-paper';
import VetServicesScreen from '@screens/vet-services/VetServicesScreen';
import ServicesButtons from '@shared-components/buttons/services-button/ServicesButtons';
import { textValues } from '@shared-constants';

interface HomeServicesProps {
  navigation?: any;
  }
 
  const HomeServices  = (props: HomeServicesProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    
    return (
      <SafeAreaView>     
      <VetServicesScreen/>
 

      <ScrollView contentContainerStyle={styles.scrollableContentHome}>
      
      <ServicesButtons
        categoryText='KISIRLAŞTIRMA'
        textValues={textValues}
        colors={colors}
        styles={styles}
      />

      <ServicesButtons
        categoryText='CERRAHİ OPERASYONLAR'
        textValues={textValues}
        colors={colors}
        styles={styles}
      />


     <ServicesButtons
        categoryText='GENEL MUAYENE'
        textValues={textValues}
        colors={colors}
        styles={styles}
      />


     <ServicesButtons
        categoryText='AŞILAMA'
        textValues={textValues}
        colors={colors}
        styles={styles}
      />
     </ScrollView>
   </SafeAreaView>
  )
    
  }
export default HomeServices;

