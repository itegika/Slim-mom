import { createAction, createSlice } from "@reduxjs/toolkit";
import { addProduct, pickData, postDailyRate } from "./summaries-operations";

const initialState = {
  id: "",
  date: "",
  notAllowedProducts: [],
  days: [],
  dailyRate: "",
  todaySummary: null,
  userId: "",
  eatenProduct: [],
  dayId: "",
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
      state.id = payload.data.id;
      state.notAllowedProducts = payload.data.userData.notAllowedProducts;
      state.dailyRate = payload.data.userData.dailyRate;
      state.days = payload.data.days;
      state.eatenProduct = payload.data.days.eatenProducts;
      state.date = payload.date;
      // state.dayId = payload.days._id;
    },
    [postDailyRate.fulfilled](state, { payload }) {
      state.dailyRate = payload.data.dailyRate;
      state.notAllowedProducts = payload.data.notAllowedProducts;
      state.todaySummary = payload.data.summaries;
    },
    [pickData.fulfilled](state, { payload }) {
      state.eatenProduct = payload.eatenProducts;
      state.date = payload.date;
      state.todaySummary = payload.daySummary;
    },

    [addProduct.fulfilled](state, { payload }) {
      state.dayId = payload.newDay.id;
      state.date = payload.newDay.date;
      state.eatenProducts = payload.newDay.eatenProducts;
      state.todaySummary = payload.newDay.newSummary;
      state.dailyRate = payload.newDay.dailyRate;
      state.userId = payload.newDay.userId;
    },
    // [currentDate.fulfilled](state, { payload }) {
    //   state.todaySummary = payload;
    // },
  },
});

export default summariesSlice.reducer;
