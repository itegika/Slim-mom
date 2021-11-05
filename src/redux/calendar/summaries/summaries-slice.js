import { createAction, createSlice } from "@reduxjs/toolkit";
import { addProduct, pickData, postDailyRate } from "./summaries-operations";


const initialState = {
  id: '',
  date: '',
  notAllowedProducts: [],
  days: [],
  dailyRate: '',
  todaySummary: null,
  userId: "",
  eatenProduct: [],
  dayId: ''
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
    [pickData.fulfilled](state, { payload }) {
       state.todaySummary = payload
    },
    
    [addProduct.fulfilled](state, { payload }) {
      state.dayId = payload.newDay.id;
      state.date = payload.newDay.date;
      state.eatenProducts = payload.newDay.eatenProducts;
      state.todaySummary = payload.newDay.newSummary;
      state.dailyRate = payload.newDay.dailyRate;
      state.userId = payload.newDay.userId;
    },
  },
});

export default summariesSlice.reducer;
