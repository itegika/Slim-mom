import { createAction, createSlice } from "@reduxjs/toolkit";
import { postDailyRate } from "./summaries-operations";


const initialState = {
  id: '',
  date: '',
  notAllowedProducts: [],
  days: [],
  dailyRate: '',
  todaySummary: null,
   userId: "",
};
const loginInfo = createAction("auth/login/fulfilled");
const checkedUser = createAction("auth/checked/fulfilled");

const summariesSlice = createSlice({
  name: "summaries",
  initialState,
  extraReducers: {
    [loginInfo]: (state, { payload }) => {
      state.id = payload.id;
    },
    [checkedUser]: (state, { payload }) => {
      state.id = payload.id;
      state.notAllowedProducts = payload.userData.notAllowedProducts;
      state.dailyRate = payload.userData.dailyRate;
    },
    [postDailyRate.fulfilled](state, { payload }) {
      state.dailyRate = payload.data.dailyRate;
      state.notAllowedProducts = payload.data.notAllowedProducts;
      state.todaySummary = payload.data.summaries;
    },
  },
});

export default summariesSlice.reducer;
