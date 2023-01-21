import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

/**
 * ? Local Imports
 */
import createStyles from "./RegisterScreen.style";

import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from "react-native-paper";

  const RegisterScreen=  () => {

    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    const [show, setShow] = React.useState(false);


  return (
    <SafeAreaView>
    <ScrollView>
     <View style= {styles.content}>
      <TextInput  label= "Email" keyboardType="email-address"/>
      <TextInput label= "Password" secureTextEntry={true} right= {<TextInput.Icon name= {show ? "eye" : "eye-off-outline"} onPress={() => setShow(!show)} color= {colors.vetblue}/>}/>
      <TextInput label= "Confirm Password" secureTextEntry={true} right= {<TextInput.Icon name= {show ? "eye" : "eye-off-outline"} onPress={() => setShow(!show)} color= {colors.vetblue}/>}/>
      <TextInput label= "Phone Number" keyboardType="phone-pad"/>
      <Button mode= "contained" style={styles.button}>Register</Button>
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default RegisterScreen;
