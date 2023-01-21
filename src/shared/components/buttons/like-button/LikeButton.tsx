import React, { useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./LikeButton.style";
// import MockData from "./mock/MockData";
// import CardItem from "./components/card-item/CardItem"; 
import { Pressable, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface LikeButtonProps {
}

const LikeButton: React.FC<LikeButtonProps> = () => {
    const [iconName, setIconName] = useState('heart-o');
    const [timesPressed, setTimesPressed] = useState(0);

    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    
    <View style= {styles.likeBtn}>
 <Pressable onPress={() => {[setTimesPressed((current) => current + 1), timesPressed % 2 === 0 ? [setIconName('heart-o')] : [setIconName('heart')]]}}>
<FontAwesome name = {iconName} size={23} color = {colors.vetblue}/>     
</Pressable>
</View>
  );
};

export default LikeButton;
