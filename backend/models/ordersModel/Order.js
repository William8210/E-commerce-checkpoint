import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema(
  {
    //All of these are from the request gotten from the front end form in the checkout
    customerDetails: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
    cartItem: {
      type: Array,
      required: true,
    },
    reference: {
      trxref: String,
      status: String,
      message: String,
      trans: String,
    },
  },
  { timestamps: true }
); //for mongoDb created at and updated at

const OrderModel = mongoose.model("orders", ordersSchema);

export { OrderModel };

//import the orderModel in the createOrses.js
