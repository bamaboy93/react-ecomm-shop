import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/AddItem");
export const removeFromCart = createAction("cart/RemoveItem");
export const increaseCount = createAction("cart/Increase");
export const decreaseCount = createAction("cart/Decrease");
export const reset = createAction("cart/Reset");
