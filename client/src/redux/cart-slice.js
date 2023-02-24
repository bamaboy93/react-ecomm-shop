import { createSlice } from "@reduxjs/toolkit";

import {
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
} from "./actions";

const initialState = {
  isLoading: false,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addToCart, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cart = [...state.cart, action.payload.item];
      })
      .addCase(removeFromCart, (state, action) => {
        state.isLoading = false;
        state.error = null;
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
      }),
});

export const cartReducer = cartSlice.reducer;
