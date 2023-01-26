import { configureStore } from "@reduxjs/toolkit";
import { LoadingReducer } from "./loading/reducer/LoadingReducer";
import { LoginReducer } from "./login/reducer/LoginReducer";

export const reducers = {
    loading: LoadingReducer,
    login: LoginReducer
};

export const Store = configureStore({
    reducer: reducers
})