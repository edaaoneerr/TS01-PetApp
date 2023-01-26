import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./VetInfoScreen.style";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@shared-components/header/Header";
import { ScrollView } from "native-base";
import VetInfoTabBar from "./components/vet-info-tab-bar/VetInfoTabBar";
import VetInfoCard from "./components/vet-info-card/VetInfoCard";

interface VetInfoScreenProps {}

const VetInfoScreen: React.FC<VetInfoScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style= {styles.safeView}>
      <Header/>
        <VetInfoCard fullName = "Mert Demirci" location = "Ankara" specialty="Kuş Veteriner Hekimi"/>
       {/* Body */}
      <ScrollView contentContainerStyle= {styles.scrollableContentHome}>
        <VetInfoTabBar/>
       </ScrollView>  

          
   </SafeAreaView>
  );
};

export default VetInfoScreen;
