import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDailyRateById } from "../../../shared/services/daily";


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