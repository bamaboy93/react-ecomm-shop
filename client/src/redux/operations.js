import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1337/api";

// GET @ /items
export const getItems = createAsyncThunk("GET_ITEMS", async (_, thunkAPI) => {
  try {
    const items = await axios.get("/items?populate=image");
    return items.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
