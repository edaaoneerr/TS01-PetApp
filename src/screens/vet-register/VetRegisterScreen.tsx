import * as React from 'react';

import createStyles from "./VetRegisterScreen.style";


import { SafeAreaView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useMemo } from 'react';
import { ScrollView } from 'native-base';
import { Button, TextInput } from 'react-native-paper';
import { navigateToScreen } from '@shared-constants';
import { SCREENS } from '../../shared/constants/index';

interface VetRegisterScreenProps {
  navigation?: any;

  }
 
  const VetRegisterScreen  = (props: VetRegisterScreenProps) => {
    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    const [show, setShow] = React.useState(false)
    
  return (
    <SafeAreaView>
    <ScrollView style = {{margin: 20, top: 100}}>
      <TextInput  label= "Email" keyboardType="email-address" style = {styles.register}/>
      <TextInput label= "Password" secureTextEntry={true} right= {<TextInput.Icon name= {show ? "eye" : "eye-off-outline"} onPress={() => setShow(!show)} color= {colors.vetblue} />} style = {styles.register}/>
      <TextInput label= "Confirm Password" secureTextEntry={true} right= {<TextInput.Icon name= {show ? "eye" : "eye-off-outline"} onPress={() => setShow(!show)} color= {colors.vetblue} />} style = {styles.register}/>
      <TextInput label= "Phone Number" keyboardType="phone-pad" style = {styles.register}/>
      <Button mode= "contained" style = {styles.register} onPress={() => props.navigation.navigate(SCREENS.VET_SERVICES)}>Hizmet bilgilerini gir</Button>

    </ScrollView>
    </SafeAreaView>
  )
    
  }
export default VetRegisterScreen;
