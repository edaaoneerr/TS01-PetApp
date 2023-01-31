import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

/**
 * ? Local Imports
 */
import createStyles from "./RegisterScreen.style";

import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from "react-native-paper";
import { SCREENS } from "@shared-constants";

interface RegisterScreenProps {
  navigation: any;
}

  const RegisterScreen=  (props: RegisterScreenProps) => {

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
      <Button mode= "contained" 
      style={styles.vetRegisterButton}
      onPress={()=> props.navigation.navigate("VetRegisterScreen")}>
        Veteriner misiniz? 
        </Button> 

      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default RegisterScreen;
