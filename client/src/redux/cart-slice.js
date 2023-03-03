import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  reset,
} from "./actions";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addToCart, (state, action) => {
        state.cart = [...state.cart, action.payload.item];
      })
      .addCase(removeFromCart, (state, action) => {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      })
      .addCase(increaseCount, (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.count++;
          }
          return item;
        });
      })
      .addCase(decreaseCount, (state, action) => {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id && item.count > 1) {
            item.count--;
          }
          return item;
        });
      })
      .addCase(reset, (state) => (state = initialState)),
});

const persistConfig = {
  key: "root",
  storage,
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
