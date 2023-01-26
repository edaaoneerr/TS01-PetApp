import {configureStore} from '@reduxjs/toolkit';
import { LoginReducer } from '../reducers/LoginReducer';

export const LoginStore = configureStore({ 
    reducer: LoginReducer
})