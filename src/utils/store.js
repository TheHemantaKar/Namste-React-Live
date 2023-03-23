import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  // content selices
  reducer: {
    cart: cartSlice,
  },
});

export default store;
