import { postDay } from "../../../shared/services/day";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addItem = createAsyncThunk(
  "addItem",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await postDay(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
