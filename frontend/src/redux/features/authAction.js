import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const HOST = import.meta.env.VITE_APP_BACKEND_HOST || "http://127.0.0.1:8000";

export const registerUser = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
      };

      const res = await axios.post(`${HOST}/api/register`, { ...formData }, config);

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
      };

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

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ customer_id, formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          "Accept": "application/json"
        },
      };

      const { data } = await axios.post(`${HOST}/api/customer/${customer_id}/update`, { ...formData }, config);
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

export const getUserData = createAsyncThunk(
  'user/getInfo',
  async (customer_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${HOST}/api/customer/${customer_id}`);
      return data.customer; // Assuming response has 'customer' key
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
