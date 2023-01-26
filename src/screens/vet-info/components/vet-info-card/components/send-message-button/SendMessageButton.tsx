import React, { useMemo } from "react";
import { Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./SendMessageButton.style";
import { Text } from "react-native-paper";
import { navigateToScreen } from '../../../../../../shared/constants/index';
import { SCREENS } from '@shared-constants';


interface SendMessageButtonProps {

}

const SendMessageButton: React.FC<SendMessageButtonProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <Pressable
    style={styles.sendMessageButton}
    onPress ={() => navigateToScreen(SCREENS.VETINFO)}>
      <Text style = {{color: '#FFFFFF', fontWeight: 'bold',  paddingLeft: 40,  }}> Mesaj Gönder</Text> 
    </Pressable>
  )
};

export default SendMessageButton;