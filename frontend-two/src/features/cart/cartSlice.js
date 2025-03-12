//This is where we are going to determine what will be in the cart initial state and it is going to be an empty array since we don't know what the user wants to put inisde the array

import { createSlice } from "@reduxjs/toolkit";

//when you want to write a function you call the cartItems
//actionpayload holds whatever you put in the cart

export const cartSlice = createSlice({
  name: "cart", //name of the slice
  initialState: {
    cartItem: [],
    totalCost: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      //To stop the adding of an item to cart if it is already there
      const productAlreadyInCart = state.cartItem.find(
        (item) => item.product_id === action.payload.product_id
      );

      //check if the product has already been added to cartItem
      if (productAlreadyInCart !== undefined) {
        return;
      }

      //calculate the total cost of all the items in the cartItems array
      let tempTotal = 0;
      state.cartItem.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;

      state.cartItem = [action.payload, ...state.cartItem];
      console.log("user has added items", state.cartItem);
      //initially, the action.payload will read an error because the cartItem is an empty array,until it has been modified
    },

    increaseProductQuantity: (state, action) => {
      const updatedProducts = state.cartItem.map((item) => {
        if ((item.product_id = action.payload)) {
          item.product_quantity += 1;
        }
        return item;
      });

      state.cartItem = updatedProducts;
      //calculate the total cost of all the items in the cartItems array
      let tempTotal = 0;
      state.cartItem.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;
    },

    decreaseProductQuantity: (state, action) => {
      const updatedProducts = state.cartItem.map((item) => {
        if (item.product_id === action.payload && item.product_quantity > 1) {
          item.product_quantity -= 1;
        }
        return item;
      });

      state.cartItem = updatedProducts;
      //calculate the total cost of all the items in the cartItems array
      let tempTotal = 0;
      state.cartItem.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;
    },
    //using the filter to check the id and remove it
    deleteCartItem: (state, action) => {
      const updatedProducts = state.cartItem.filter(
        (item) => item.product_id !== action.payload
      );
      state.cartItem = updatedProducts;
      //calculate the total cost of all the items in the cartItems array
      let tempTotal = 0;
      state.cartItem.forEach((item) => {
        tempTotal += item.product_quantity * item.product_price;
      });

      state.totalCost = tempTotal;
    },
  },
});

export const {
  addItemToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteCartItem,
} = cartSlice.actions;

export default cartSlice.reducer; //when importing this in the store, it must be the cart name ie cart.Reducer
//addItemToCart is going to be responsible for adding items to cart
