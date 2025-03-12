"use client";
import React from "react";

import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import validator from "validator";
import axios from "axios";
import { useRouter } from "next/navigation";

//CustomerDetails is introduced in the argument because it was passed as prop from the checkoutform in order to use the details listed in the form
const PaymentWithPaystack = ({ customerDetails }) => {
  const router = useRouter();
  const { totalCost, cartItem } = useSelector((state) => state.cart);
  const config = {
    reference: new Date().getTime().toString(),
    email: customerDetails.email,
    amount: totalCost * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY, //you must always import your private key
  };

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    //sending a post request using the endpoint host being set up at the backend, using the exact port and then we send all the objects
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/order/create", //The exact link created in our backend
        {
          reference: reference, //reference from  paystack paid or declined
          totalCost: totalCost,
          cartItem: cartItem,
          customerDetails: customerDetails,
        }
      );
      //After response, I want to send an alert saying thankyou and re-routing the user to the homepage
      console.log(response);
      alert("Thanks order has been placed successfully");
      router.push("/"); //Taking the user back to the homepage application
    } catch (error) {
      console.log(error);
    }
    console.log(reference);
    console.log("Payment Ref", reference);
    console.log("Amount Paid", totalCost);
    console.log("Items ordered", cartItem);
    console.log("customer Details", customerDetails); // since the object holds all info about the customer
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);

  //in order for the button not to return to the previous page but rather proceed to the payment popup, handlePaystack being called immediately calls initializePayment

  function handlePaystackPayment(event) {
    event.preventDefault();
    //creating a condition to validate the information filled in the form using the Validator, it must be inside the handlePayStackPayment
    if (validator.isEmpty(customerDetails.name, { ignore_whitespace: true })) {
      return alert("please provide your name");
    }
    //checking for a valid email
    if (validator.isEmail(customerDetails.email) === false) {
      return alert("please provide a valid email");
    }
    //checking for address
    if (
      validator.isEmpty(customerDetails.address, { ignore_whitespace: true })
    ) {
      return alert("please provide home address");
    }

    //ensure that totalcost is zero
    if (totalCost <= 0) {
      return alert("please you must order an item");
    }

    //then finally call the initialize function, it takes the onSuccess and onClose function, decline or approve
    initializePayment({ onSuccess, onClose });
  }

  return (
    <div>
      <button
        onClick={handlePaystackPayment}
        className="text-gray-700 font-bold text-lg bg-yellow-200 w-full p-2 cursor-pointer hover:opacity-45 rounded-md shadow-2xl"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentWithPaystack;
