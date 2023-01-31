import React, { useMemo } from "react";
import { View,TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Bars3BottomRightIcon, HeartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

/**
 * ? Local Imports
 */
import createStyles from "./Search.style";


interface SearchProps {
  style?: any;
  placeholder?: string;
  iconStyle?: any;
  barStyle?: any;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.searchHeader,{...props.style}]}>
    <View style={[styles.searchBar,{...props.barStyle}]}>
    <MagnifyingGlassIcon style={[styles.searchIconHeader,{...props.iconStyle}]} size={18}/>
    <TextInput 
     style={styles.input}
     placeholder={props.placeholder} 
     keyboardType='default'/> 
    </View>

    <Bars3BottomRightIcon style={styles.threeLinesIconHeader}/>
    <HeartIcon style={styles.heartIconHeader}/> 
    </View>
  );
};

export default Search;
