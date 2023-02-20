import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000/api";

// GET @ /items
export const getItems = createAsyncThunk(
  "cart/getItems",
  async (_, thunkAPI) => {
    try {
      const items = await axios.get("/items?populate=image");
      return items.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
