import { configureStore } from "@reduxjs/toolkit";
import { LoadingReducer } from "../reducer/LoadingReducer";

export const LoadingStore = configureStore({
    reducer: LoadingReducer
})