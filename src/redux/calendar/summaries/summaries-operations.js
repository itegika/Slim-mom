import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDailyRateById } from "../../../shared/services/daily";
import { postDay, postDayInfo } from "../../../shared/services/day";


export const postDailyRate = createAsyncThunk(
  "summaries/dailyRate",
    async (credentials, { rejectWithValue }) => {
        try {
      const data = await getDailyRateById(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const pickData = createAsyncThunk(
  "summaries/pickData",
    async (credentials, { rejectWithValue }) => {
        try {
      const data = await postDayInfo(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const addProduct = createAsyncThunk(
  "summaries/addProduct",
    async (credentials, { rejectWithValue }) => {
        try {
      const data = await postDay(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);