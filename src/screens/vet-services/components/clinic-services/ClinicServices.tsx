import * as React from 'react';


import createStyles from "./ClinicServices.style";

import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import VetServicesScreen from '@screens/vet-services/VetServicesScreen';
import ServicesButtons from '@shared-components/buttons/services-button/ServicesButtons';

interface ClinicServicesProps {
  navigation?: any;
  }
 
  const ClinicServices  = (props: ClinicServicesProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = React.useMemo(() => createStyles(theme), [theme]);
    const textValues = ['Köpek', 'Kedi', 'Hamster', 'Tavşan', 'Büyükbaş', 'Küçükbaş', 'Kuş'];
    const [activeIndices, setActiveIndices] = React.useState<number[]>([]);

    
    return (
    <SafeAreaView style = {styles.safeView}>    
     
      <VetServicesScreen/>
       

      <ScrollView contentContainerStyle= {styles.scrollableContentHome}>
      
      <View>
      <ServicesButtons

        categoryText='KISIRLAŞTIRMA'
        textValues={textValues}
        colors={colors}
        styles={styles}

      />
      </View>

      <View>
      <ServicesButtons
        categoryText='CERRAHİ OPERASYONLAR'
        textValues={textValues}
        colors={colors}
        styles={styles}

      />
      </View>

      <View>
     <ServicesButtons
        categoryText='GENEL MUAYENE'
        textValues={textValues}
        colors={colors}
        styles={styles}

      />

     </View>

     <View>
     <ServicesButtons
        categoryText='AŞILAMA'
        textValues={textValues}
        colors={colors}
        styles={styles}

      />
     </View>
      </ScrollView>

    </SafeAreaView>
  )
    
  }
export default ClinicServices;


