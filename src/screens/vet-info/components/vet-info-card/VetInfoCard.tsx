import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./VetInfoCard.style";
import VetInfo from "@shared-components/vet-info/VetInfo";
import GetAppointmentButton from '@shared-components/buttons/get-appointment-button/GetAppointmentButton';
import LikeButton from "@shared-components/buttons/like-button/LikeButton";
import CallButton from "./components/call-button/CallButton";
import SendMessageButton from "./components/send-message-button/SendMessageButton";


interface VetInfoCardProps {
    fullName: string;
    location: string;
    specialty: string;
}

const VetInfoCard: React.FC<VetInfoCardProps> = ({fullName, specialty, location}) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style ={styles.vetInfoCard}>   
     
       <LikeButton/>
       {/* Vet Info Section: Name, Location, Specialty */}
       <VetInfo location = {location} fullName = {fullName} specialty = {specialty}  />
       <SendMessageButton/>
       <CallButton/>  
       <GetAppointmentButton/>
   
       </View>
  );
};

export default VetInfoCard;
