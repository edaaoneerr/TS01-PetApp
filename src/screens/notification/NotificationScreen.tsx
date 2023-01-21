import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./NotificationScreen.style";
import  Header  from "@shared-components/header/Header";

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Header/>
      <Text>
        Notification
      </Text>
    </View>
  );
};

export default ProfileScreen;
