import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

/**
 * ? Local Imports
 */
import createStyles from "./LoginScreen.style";

import { SafeAreaView, Text, View } from 'react-native';
import WavyHeader from "./components/wavy-header/WavyHeader";
import { Button, Card, TextInput } from "react-native-paper";
import { navigateToScreen } from "@shared-constants";
import { Formik } from "formik";
import LoginForm from "./components/login-form/LoginForm";

interface LoginScreenProps {
 
}
  const LoginScreen : React.FC<LoginScreenProps> = () => {
  
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const login = navigateToScreen("HomeScreen")

  return (
    <SafeAreaView style= {styles.content}>
    <WavyHeader/>

    <View style= {styles.view}>
    <Card>
    <Card.Title title= "Pet App"></Card.Title>
    <Card.Content>
      <Formik 
      initialValues={{email: '', password: ''}}
      onSubmit={() => login}
      validationSchema={LoginForm}>
      {({handleChange, handleSubmit, setFieldTouched, touched, errors}) => (
        <>
      <TextInput 
      label= "Email" 
      testID="email"
      keyboardType="email-address" 
      onChangeText={handleChange('email')}
      onFocus={() => setFieldTouched('email')}/>{
        touched.email ? 
        <Text 
        testID= "errors-email" 
        style= {styles.error}>{errors.email}</Text> 
        : null
      }
      <TextInput 
      label= "Password" 
      testID="password"
      secureTextEntry={true} 
      onChangeText={handleChange('password')}
      onFocus={() => setFieldTouched('password')}/>{
        touched.password ? 
        <Text 
        testID= "errors-password" 
        style= {styles.error}>{errors.password}</Text> 
        : null
      }

      <Button 
      uppercase={false} 
      style= {styles.cardButton}
      testID="recoveryButton">
        Forgot email/password
      </Button>

      <Button 
      mode= "contained" 
      testID="loginButton"
      style= {styles.cardButton} 
      onPress={handleSubmit}>Login</Button>

      <Button 
      style= {styles.cardButton} 
      testID="registerButton"
      onPress={handleSubmit}>Register</Button>
      </>
      )
      }
      </Formik>
    </Card.Content>
    </Card>
    </View>

   </SafeAreaView>
  )
}

export default LoginScreen;
