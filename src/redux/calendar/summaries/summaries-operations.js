import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

// const getInfo = createAsyncThunk(
//   "isLogin",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post("/users/login", credentials);
//       return data;
//     } catch (err) {
//       if (err.response.data.message) {
//         Notiflix.Notify.failure(err.response.data.message);
//         return rejectWithValue(err.response.data.message);
//       } else {
//         Notiflix.Notify.failure("Ooops, smth wrong, try again");
//         return rejectWithValue(err);
//       }
//     }
//   }
// );

// const operations = {
//   getInfo,
// };
// export default operations;
