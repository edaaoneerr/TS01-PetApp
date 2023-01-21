import { ScrollView} from 'react-native';
import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import createStyles from "./VetClinic.style";
import { useTheme } from "@react-navigation/native";
import ClinicCard from './components/clinic-card/ClinicCard';
import ServiceCard from './components/service-card/ServiceCard';

interface VetClinicProps {
}
const VetClinic: React.FC<VetClinicProps> = () => {

 const theme = useTheme();
 const { colors } = theme;
 const styles = useMemo(() => createStyles(theme), [theme]);

  const img = {uri: 'https://static-maps.yandex.ru/1.x/?lang=tr_TR&l=map&pt=32.8382691246,39.8956271266,org&scale=1.5&size=650,350&z=13'};
  
  return (
    <SafeAreaView style= {styles.safeView}>
        
        
    {/* Body */}
    <ScrollView contentContainerStyle= {styles.scrollableContentHome}>
    <ClinicCard/>
    <ServiceCard/> 
    </ScrollView>  


       
</SafeAreaView>
  );
  };
  
  export default VetClinic;
  