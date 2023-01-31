import * as React from 'react';

import createStyles from "./EmergencyServices.style";


import { SafeAreaView, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import VetServicesScreen from '@screens/vet-services/VetServicesScreen';

interface EmergencyServicesProps {
  navigation?: any;
  }
 
  const EmergencyServices  = (props: EmergencyServicesProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);

    
    return (
      <SafeAreaView>     
      <VetServicesScreen/>
   </SafeAreaView>
  )
    
  }
export default EmergencyServices;

