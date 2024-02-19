import { createReducer } from "@reduxjs/toolkit";
import TimeActionCreator from "./TimeActionCreator";

const initialState = {
  currentTime: new Date(),
};

const TimeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TimeActionCreator.changeTime, (state, action)=>{
        state.currentTime = action.payload.currentTime;
    })
});

export default TimeReducer;
