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
      console.log(error);
      alert(error.response);
      // if (error.response.status === 403) {
      //   return alert("User creation error! Try signup again.");
      // }

      alert(error.response.status.message);
      return rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
};
export default authOperations;
