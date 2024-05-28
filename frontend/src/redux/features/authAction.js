import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const HOST = "http://127.0.0.1:8000";

export const registerUser = createAsyncThunk(
  'user/register',
  async (formdata, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
      }

      const res = await axios.post(`${HOST}/api/register`, { ...formdata }, config);

      return res.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
      }

      const { data } = await axios.post(`${HOST}/api/login`, { email, password }, config);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
