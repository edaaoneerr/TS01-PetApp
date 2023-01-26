import { Pressable, View } from 'react-native'
import React, { useMemo } from 'react'
import createStyles from "./Header.style";
import { useTheme } from "@react-navigation/native";
import {AdjustmentsHorizontalIcon, BellAlertIcon, ChatBubbleLeftIcon} from "react-native-heroicons/outline";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {

    const theme = useTheme();
   const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    

    return (
      <View style={styles.header}>
       <Pressable ><AdjustmentsHorizontalIcon style={styles.adjustmentBtn} color={colors.vetblue}/></Pressable>
       <Pressable><BellAlertIcon  style={styles.notificationBtn}/></Pressable>
       <Pressable ><ChatBubbleLeftIcon style={styles.messageBtn}/></Pressable>
      </View>
    );
  }
  
  export default Header;
  
  
  
  
  