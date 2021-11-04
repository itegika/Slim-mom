import { createAsyncThunk } from "@reduxjs/toolkit";
import { token, onSignUp, onLogIn, onLogOut } from "../../shared/services/auth";

const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onSignUp(credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onLogIn(credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk("auth/logout", async ({ rejectWithValue }) => {
  try {
    await onLogOut();
    token.unset();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
};
export default authOperations;
