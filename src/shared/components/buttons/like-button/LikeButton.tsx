import React, { useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./LikeButton.style";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Pressable } from 'react-native';

interface LikeButtonProps {
 
}

const LikeButton: React.FC<LikeButtonProps> = () => {
    let [iconName, setIconName] = useState('heart-o');
    let [isLiked, setIsLiked] = useState(false);
    let [timesPressed, setTimePressed] = useState(1);

    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    

    const pressFunction = () => {
        setTimePressed(timesPressed + 1);
        if (timesPressed % 2 === 0) {
            setIconName('heart-o');
        } else {
            setIconName('heart');
        }

    }
  return (
    
    <Pressable style= {styles.likeBtn}
     onPress={pressFunction}>
    <FontAwesome name = {iconName} size={22} color = {colors.vetblue}/>     
    </Pressable>
  );
};

export default LikeButton;
