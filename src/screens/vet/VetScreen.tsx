import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * ? Local Imports
 */
import createStyles from "./VetScreen.style";
// import MockData from "./mock/MockData";
// import CardItem from "./components/card-item/CardItem"; 
/**
 * ? Shared Imports
 */
import VetCard from "./components/vet-card/VetCard";
import Header from "@shared-components/header/Header";
import { ScrollView } from "native-base";
import Search from "../../shared/components/search/Search";


interface VetScreenProps {}

const VetScreen: React.FC<VetScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

 /*  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };
 */


  return (
    <SafeAreaView style= {styles.safeView}>
        
    {/* Header */}
    <Header/>

    
    {/* Search */}
    <Search placeholder="Veteriner Ara.."/>

     {/* Body */}
 <ScrollView contentContainerStyle= {styles.scrollableContentHome}>
    {/*  <ScrollView horizontal= {true} showsHorizontalScrollIndicator={false}>
       <AdCard imgUrl = "https://dorukgiller.com/uploads/about_us/15380607441-ekip-doruk-demirci.png"/>
     
       </ScrollView>   */}
    
      <VetCard
       fullName="Mert" 
       location = "Ankara"
       hourAppointment = "10:00"
       dayAppointment = "Çarşamba"
       specialty="Kuş Veteriner Hekimi"/> 
       <VetCard 
       fullName="Mert" 
       location = "Ankara"
       hourAppointment = "10:00"
       dayAppointment = "Çarşamba"
       specialty="Kuş Veteriner Hekimi"/>
       <VetCard 
       fullName="Mert" 
       location = "Ankara"
       hourAppointment = "10:00"
       dayAppointment = "Çarşamba"
       specialty="Kuş Veteriner Hekimi"/>
      <VetCard 
      fullName="Mert" 
       location = "Ankara"
       hourAppointment = "10:00"
       dayAppointment = "Çarşamba"
       specialty="Kuş Veteriner Hekimi"/>
       
      
     </ScrollView>  


 </SafeAreaView>
  );
};

export default VetScreen;
