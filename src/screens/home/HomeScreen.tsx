import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * ? Local Imports
 */
import createStyles from "./HomeScreen.style";
/**
 * ? Shared Imports
 */
import Header from "@shared-components/header/Header";
import { Text } from "react-native";


interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>  Hello    </Text>

    </SafeAreaView>
  );
};

export default HomeScreen;
