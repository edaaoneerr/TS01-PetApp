import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

/**
 * ? Local Imports
 */
import createStyles from "./LoginScreen.style";

import { SafeAreaView, View } from 'react-native';
import WavyHeader from "./components/wavy-header/WavyHeader";
import { Button, Card, TextInput } from "react-native-paper";
interface LoginScreenProps {
  navigation: any;

  /* loadingState: LoadingState;
  loginState: LoginState; */
  recoverPassword: Function;
  showLoading: Function;


}

  const LoginScreen=   () => {

    const theme = useTheme();
    const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    const [show, setShow] = React.useState(false);


  return (
    <SafeAreaView style= {styles.content}>
    <WavyHeader/>

    <View style= {styles.view}>
    <Card>
    <Card.Title title= "Pet App"></Card.Title>
    <Card.Content>
      <TextInput  label= "Email" keyboardType="email-address"/>
      <TextInput label= "Password" secureTextEntry={true}/>
      <Button uppercase={false} style= {styles.cardButton}>Forgot email/password</Button>
      <Button mode= "contained" style= {styles.cardButton}>Login</Button>
      <Button style= {styles.cardButton}>Register</Button>

    </Card.Content>
    </Card>
    </View>

   </SafeAreaView>
  )
}

export default LoginScreen;
