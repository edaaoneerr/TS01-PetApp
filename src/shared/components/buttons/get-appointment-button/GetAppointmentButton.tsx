import React, { useMemo} from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./GetAppointmentButton.style";
// import MockData from "./mock/MockData";
// import CardItem from "./components/card-item/CardItem"; 
import { Pressable, Text } from 'react-native';
import * as NavigationService from 'react-navigation-helpers';
import { SCREENS } from '../../../constants/index';

interface GetAppointmentButtonProps {
}

const GetAppointmentButton: React.FC<GetAppointmentButtonProps> = () => {

    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    
    <Pressable
    style={styles.getAppointmentBtn}
    onPress={() => NavigationService.push(SCREENS.HOME)}>
    <Text style={styles.appointmentBtnText}>Şimdi Randevu Al</Text>
   </Pressable> 
  );
};

export default GetAppointmentButton;
