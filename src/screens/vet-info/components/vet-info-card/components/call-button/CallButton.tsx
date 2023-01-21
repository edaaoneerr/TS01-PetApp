import React, { useMemo } from "react";
import { Pressable, Text } from 'react-native';
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CallButton.style";
import { navigateToScreen } from "@shared-constants";
import { SCREENS } from '../../../../../../shared/constants/index';

interface CallButtonProps {}

const CallButton: React.FC<CallButtonProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable
    style={styles.callButton}
    onPress={() => navigateToScreen(SCREENS.VETINFO)}>
    <Text style = {{fontWeight: 'bold', color: colors.white}}> Hemen Ara</Text>
   </Pressable> 
  );
};

export default CallButton;
