import { createAsyncThunk } from "@reduxjs/toolkit";
import { token, onSignUp, onLogIn } from "../../shared/services/auth";

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

const authOperations = {
  register,
  logIn,
};
export default authOperations;
