//The store is the global state that gives info or details to the market place and cart, must be set up outside every folder or page but in the src

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"; //importing the name of the cartSlice but it's actually importing the reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store; //https://redux.js.org/usage/usage-with-typescript
