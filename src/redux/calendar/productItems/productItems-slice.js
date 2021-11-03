import { createSlice } from "@reduxjs/toolkit";

const eatenProductsSlice = createSlice({
  name: "eatenProducts",
  initialState: [],
  reducers: {
    addToEatenProducts: {
      reducer: (_, { payload }) => {
        return [...payload];
      },
    },

    removeFromEatenProducts: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
  },
});

const { actions, reducer } = eatenProductsSlice;

export const { addToEatenProducts, removeFromEatenProducts } = actions;

export default reducer;
