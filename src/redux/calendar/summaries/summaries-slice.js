import { createAction, createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
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

      const date = format(new Date(), "yyyy-MM-dd");
      const eatenProducts = payload.data.days.find(
        (el) => el.date === date
      )?.eatenProducts;

      state.dailyRate = payload.data.userData.dailyRate;
      state.days = payload.data.days;
      state.eatenProduct = eatenProducts;
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
      state.dayId = payload.day.id;
      state.date = payload.day.date;
      state.eatenProduct = payload.day.eatenProducts;
      state.todaySummary = payload.daySummary;
      state.dailyRate = payload.day.dailyRate;
      state.userId = payload.day.userId;
    },
    // [currentDate.fulfilled](state, { payload }) {
    //   state.todaySummary = payload;
    // },
  },
});

export default summariesSlice.reducer;
