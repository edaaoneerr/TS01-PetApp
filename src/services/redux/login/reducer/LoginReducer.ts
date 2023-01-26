import { createReducer } from "@reduxjs/toolkit"
import { AppInitialState } from "@services/redux/AppInitialState"
import { recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "../action/LoginAction"
import { LoginState } from "../LoginState"



const initialState: LoginState = AppInitialState.login;


export const LoginReducer = createReducer(initialState, builder => {
    builder.addCase(recoverPassword, currentState => {
        return {
         ...currentState,
         error: null,
         isRecoveredPassword: false,
         isRecoveringPassword: true
        }
     }),
     builder.addCase(recoverPasswordSuccess, currentState => {
      return {
       ...currentState,
       error: null,
       isRecoveredPassword: true,
       isRecoveringPassword: false
      }
     }),
     builder.addCase(recoverPasswordFail, (currentState, action )=> {
      return {
       ...currentState,
       error: action.payload,
       isRecoveredPassword: false,
       isRecoveringPassword: false
      }
     })
})