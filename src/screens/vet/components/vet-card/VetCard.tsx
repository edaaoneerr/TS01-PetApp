import React, { useEffect, useMemo, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as NavigationService from "react-navigation-helpers";
/**
 * ? Local Imports
 */
import createStyles from "./VetCard.style";
// import MockData from "./mock/MockData";
// import CardItem from "./components/card-item/CardItem"; 
import { SCREENS } from "@shared-constants";
import { Pressable, Text } from 'react-native';
import { fetchVetData } from "@services/controllers";
import LikeButton from "@shared-components/buttons/like-button/LikeButton";
import GetAppointmentButton from "@shared-components/buttons/get-appointment-button/GetAppointmentButton";
import VetInfo from "@shared-components/vet-info/VetInfo";

interface VetCardProps {
    fullName: string;
    hourAppointment: string;
    dayAppointment: string;
    location: string;
    specialty: string;
}

const VetCard: React.FC<VetCardProps> = ({hourAppointment,dayAppointment,fullName, specialty, location}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [vetData, setVetData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      let data = await fetchVetData();
      setVetData(data);
    }
    fetchData();
  }, []);

   
  return (
    <Pressable 
    style ={styles.vetCard}
    onPress={() =>  NavigationService.navigationRef.isReady() ? NavigationService.navigationRef.navigate(SCREENS.VETINFO) : {}}>
      
       <LikeButton />   
      
       {/* Vet Info Section: Name, Location, Specialty */}
       <VetInfo  fullName={fullName}
        specialty={specialty}
        location={location}/>
       
      <Text style={styles.vetAvailable}>En yakın randevu: </Text>
      <Text style={styles.vetAvailableGreenBold}>{hourAppointment}</Text>
      <Text style={styles.vetAvailableGreen}>{dayAppointment}</Text>
      <GetAppointmentButton/>
      {/* <AskBtn/>  */}
     
    </Pressable>
  );
};

export default VetCard;
