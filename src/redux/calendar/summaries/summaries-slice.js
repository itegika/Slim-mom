import { createAction, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import {
  addProduct,
  deleteProduct,
  pickData,
  postDailyRate,
} from "./summaries-operations";

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
  dayChecked: "",
  del: "",
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
      state.date = payload.date;

      const currentDay = payload.data.days.find((el) => el.date === state.date);

      const eatenProducts = currentDay.eatenProducts;
      state.eatenProduct = eatenProducts;
      state.todaySummary = currentDay.daySummary;
      state.dayId = currentDay._id;
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
      state.dayId = payload.day.id;
      state.date = payload.day.date;
      state.eatenProduct = payload.day.eatenProducts;
      state.todaySummary = payload.daySummary;
      state.dailyRate = payload.day.dailyRate;
      state.userId = payload.day.userId;
    },
    [deleteProduct.fulfilled](state, { payload }) {
      state.del = payload;
    },
    // [currentDate.fulfilled](state, { payload }) {
    //   state.todaySummary = payload;
    // },
  },
});

export default summariesSlice.reducer;
