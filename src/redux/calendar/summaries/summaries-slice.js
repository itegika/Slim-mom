import { createAction, createSlice } from "@reduxjs/toolkit";
import summariesOperations from "./summaries-operations";

const initialState = {
  //   date: "",
  //   kcalLeft: null,
  //   kcalConsumed: null,
  //   dailyRate: null,
  //   percentsOfDailyRate: null,
  //   userId: "",
  //   id: "",
  // todaySummary: null,
};
const loginInfo = createAction("auth/login/fulfilled");

const summariesSlice = createSlice({
  name: "summaries",
  initialState,
  extraReducers: {
    [loginInfo]: (_, { payload }) => payload,
  },
});

export default summariesSlice.reducer;
