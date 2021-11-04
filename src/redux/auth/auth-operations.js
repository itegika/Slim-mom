import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  token,
  onSignUp,
  onLogIn,
  onLogOut,
  CheckedCurrentUser,
} from "../../shared/services/auth";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const errorNotify = {
  403: "This email doesn't exist or password is wrong",
  409: "Provided email already exists, try another",
  showAlert(code) {
    const message = this[String(code)];
    alert(message);
  },
};
const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await onSignUp(credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      Notify.failure(errorNotify.showAlert(error.response.status));
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
      Notify.failure(errorNotify.showAlert(error.response.status));
      return rejectWithValue(error);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await onLogOut();
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CheckedIsLoginCurrentUser = createAsyncThunk(
  "auth/checked",
  async (_, thunkAPI,{ rejectWithValue }) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const data = await CheckedCurrentUser();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  CheckedIsLoginCurrentUser,
};
export default authOperations;
