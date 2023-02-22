import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("ADD_ITEM");
export const removeFromCart = createAction("REMOVE_ITEM");
export const increaseCount = createAction("INCREASE");
export const decreaseCount = createAction("DECREASE");
