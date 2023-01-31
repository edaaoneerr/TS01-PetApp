import { useMemo, useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import * as React from 'react';

/**
 * ? Local Imports
 */
import createStyles from "./LoginScreen.style";

import { SafeAreaView, Text, View } from 'react-native';
import WavyHeader from "./components/wavy-header/WavyHeader";
import { Button, Card, Snackbar, TextInput } from "react-native-paper";
import { Formik } from "formik";
import LoginForm from "./components/login-form/LoginForm";
import { LoadingState } from "@services/redux/loading/LoadingState";
import { bindActionCreators } from "redux";
import { hide, show } from "@services/redux/loading/action/LoadingAction";
import { connect } from "react-redux";
import { AppState } from "@services/redux/AppState";
import { login, recoverPassword, recoverPasswordReset } from "@services/redux/login/action/LoginAction";
import { LoginState } from "@services/redux/login/LoginState";
import AuthService from "@services/auth-service/AuthService";
import { recoverPasswordSuccess, recoverPasswordFail, loginSuccess, loginFail } from '../../services/redux/login/action/LoginAction';
import axios from 'axios';
import { navigateToScreen } from "@shared-constants";

interface LoginScreenProps {
  loadingState: LoadingState;
  loginState: LoginState;
  navigation: any;
  login: Function;
  loginSuccess: Function;
  loginFail: Function;
  hideLoading: Function;
  showLoading: Function;
  recoverPassword: Function;  
  recoverPasswordReset: Function;
  recoverPasswordFail: Function;
  recoverPasswordSuccess: Function;
  }
 
  const LoginScreen  = (props: LoginScreenProps) => {
  
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const login = (userLogin: {email: string, password: string}) => {
      setUserLogin(userLogin);
      props.login();
    }

    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [userLogin, setUserLogin] = useState({email: "", password: ""});

    useEffect(() => {
      if(props.loginState.isRecoveringPassword){
        props.showLoading();

        AuthService.recoverPassword(recoveryEmail).then(() => {
          props.recoverPasswordSuccess();
        }).catch(error => {
          props.recoverPasswordFail(error);
        })
      }
      else{
        props.hideLoading();
      }

    }, [props.loginState.isRecoveringPassword])


    useEffect(() => {
      if(props.loginState.isLoggingIn){
        props.showLoading();
        AuthService.login(userLogin.email, userLogin.password).then(user =>
          {
            props.loginSuccess(user);
          }).catch(error => {props.loginFail(error);})
        }
      else{
        props.hideLoading();
      }
    }, [props.loginState.isLoggingIn]);

    useEffect(() => {
      if(props.loginState.isLoggedIn){
        props.hideLoading();
        props.navigation.navigate("HomeScreen");
      }
    }, [props.loginState.isLoggedIn]);


    const forgotEmailPassword = (email:string) => {
      props.recoverPassword();
      setRecoveryEmail(email);
      setTimeout(() => {
        props.hideLoading();
      }, 3000)
    }

     const getComment = async () => {
      
      await axios.get('http://10.0.2.2:5000/comment', {
       })
      .then(function (response) {
          console.log(response.data);
          return response.data;
      })
      .catch(function (error) {
          console.log(error);
      })
  }
  
   useEffect(() => {
    getComment();
  }, []);
  return (
    <SafeAreaView style= {styles.content}>
    <WavyHeader/>

    <View style= {styles.view}>
    <Card>
    <Card.Title title= "Pet App"></Card.Title>
    <Card.Content>
      <Formik 
      initialValues={{email: '', password: ''}}
      onSubmit={login}
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
      onPress={() => forgotEmailPassword(values.email)}
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
      onPress={() => navigateToScreen("RegisterScreen")}>Register</Button>
      </>
      )
      }
      </Formik>
    </Card.Content>
    </Card>
    </View>


    { 
      props.loginState.isRecoveredPassword ?
      <Snackbar 
      duration={5000} 
      visible={true}
      onDismiss={() => {()=> props.recoverPasswordReset()}}
      testID="recoverPasswordSuccess">
      Recovery email sent 
    </Snackbar>
    
    : null}

{ 
      props.loginState.error ?
      <Snackbar 
      duration={3000} 
      visible={true}
      onDismiss={() => {()=> props.recoverPasswordReset()}}
      testID="errorMessage">
      {props.loginState.error.message}
    </Snackbar>
    
    : null}

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
    recoverPasswordFail: recoverPasswordFail,
    recoverPasswordSuccess: recoverPasswordSuccess,
    recoverPasswordReset: recoverPasswordReset,
    login: login,
    loginFail: loginFail,
    loginSuccess: loginSuccess,
    hideLoading: hide,
    showLoading: show
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
