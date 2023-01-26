import { useMemo, useEffect } from "react";
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
import { LoadingState } from "@services/redux/loading/LoadingState";
import { bindActionCreators } from "redux";
import { hide, show } from "@services/redux/loading/action/LoadingAction";
import { connect } from "react-redux";
import { AppState } from "@services/redux/AppState";
import { recoverPassword } from "@services/redux/login/action/LoginAction";
import { LoginState } from "@services/redux/login/LoginState";
import AuthService from "@services/auth-service/AuthService";

interface LoginScreenProps {
  loadingState: LoadingState;
  loginState: LoginState;
  navigation: any;
  hideLoading: Function;
  showLoading: Function;
  recoverPassword: Function;  
  }
 
  const LoginScreen  = (props: LoginScreenProps) => {
  
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const login = navigateToScreen("HomeScreen");


    const recovery

    useEffect(() => {
      if(props.loginState.isRecoveringPassword){
        props.showLoading();

        AuthService.recoverPassword()
      }

    }, [props.loginState.isRecoveringPassword])

    const forgotEmailPassword = () => {
      props.recoverPassword();
      setTimeout(() => {
        props.hideLoading();
      }, 3000)
    }

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
      {({handleChange, handleSubmit, setFieldTouched, touched, errors, values}) => (
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
      onPress={forgotEmailPassword}
      style= {styles.cardButton}
      testID="recoveryButton"
      disabled={values.email == '' || errors.email ? true: false}>
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

const mapStateToProps = (store: AppState) => ({
 loadingState: store.loading,
 loginState: store.login
})
const mapDispatchToProps = (dispatch: any) => (
  bindActionCreators({
    recoverPassword: recoverPassword,
    hideLoading: hide,
    showLoading: show
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
