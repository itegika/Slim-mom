import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      alert(state.error);
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      alert(state.error);
    },
  },
});

export default authSlice.reducer;
