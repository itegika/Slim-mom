import { createAction, createSlice } from "@reduxjs/toolkit";


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
const checkedUser = createAction("auth/checked/fulfilled");

const summariesSlice = createSlice({
  name: "summaries",
  initialState,
  extraReducers: {
    [loginInfo]: (_, { payload }) => payload,
    [checkedUser]: (_, { payload }) => payload,
  },
});

export default summariesSlice.reducer;
