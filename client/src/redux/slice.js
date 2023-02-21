import { createSlice } from "@reduxjs/toolkit";
import {
  getItems,
  //   addToCart,
  //   romoveFromCart,
  //   increaseCount,
  //   decreaseCount,
  //   setIsCartOpen,
} from "./operations";

const initialState = {
  isLoading: false,
  isCartOpen: false,
  cart: [],
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.data;
      }),
  //   .addCase(getItems.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(addToCart.pending, (state) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(addToCart.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.cart = [...state.cart, action.payload.item];
  //   })
  //   .addCase(addToCart.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(romoveFromCart.pending, (state) => {
  //     state.isLoading = true;
  //   })
  //   .addCase(romoveFromCart.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.cart = state.cart.filter((item) => item.id !== action.payload.id);
  //   })
  //   .addCase(romoveFromCart.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(increaseCount.fulfilled, (state, action) => {
  //     state.cart = state.cart.map((item) => {
  //       if (item.id === action.payload.id) {
  //         item.count++;
  //       }
  //       return item;
  //     });
  //   })
  //   .addCase(decreaseCount.fulfilled, (state, action) => {
  //     state.cart = state.cart.map((item) => {
  //       if (item.id === action.payload.id && item.count > 1) {
  //         item.count--;
  //       }
  //       return item;
  //     });
  //   })
  //   .addCase(setIsCartOpen.fulfilled, (state) => {
  //     state.isCartOpen = !state.isCartOpen;
  //   }),
});

export const cartReducer = cartSlice.reducer;
