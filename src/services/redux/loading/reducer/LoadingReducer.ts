import { createReducer } from "@reduxjs/toolkit";
import { hide, show } from "../action/LoadingAction";



export const LoadingReducer = createReducer({}, builder => {
   builder.addCase(show, () => {
      return {show: true};
   }),
   builder.addCase(hide, () => {
    return {show: false};
   })
})