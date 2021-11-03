import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.accessToken;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
