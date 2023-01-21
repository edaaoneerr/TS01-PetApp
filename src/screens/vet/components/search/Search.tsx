import React, { useMemo } from "react";
import { View,TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Bars3BottomRightIcon, HeartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

/**
 * ? Local Imports
 */
import createStyles from "./Search.style";


interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.searchHeader}>
    <View style={styles.searchBar}>
    <MagnifyingGlassIcon style={styles.searchIconHeader} size={18}/>
    <TextInput 
     style={styles.input}
     placeholder='Veteriner Ara..' 
     keyboardType='default'/> 
    </View>

    <Bars3BottomRightIcon style={styles.threeLinesIconHeader}/>
    <HeartIcon style={styles.heartIconHeader}/> 
    </View>
  );
};

export default Search;
