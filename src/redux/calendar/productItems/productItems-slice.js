import { createSlice } from "@reduxjs/toolkit";
import { addItem } from "./productItems-operations";

const initialState = {};

const itemSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: {
    [addItem.fulfilled]: (state, { payload }) => payload,
  },
});
export default itemSlice.reducer;
