import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cart/cartSlice";
import userReducer from "./components/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
