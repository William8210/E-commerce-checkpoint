"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import dynamic from "next/dynamic";

//IN ORDER FOR US TO AVOID THE WINDOW ERROR , from paystack documentation, scroll down to call the variable
const PaystackDynamic = dynamic(() => import("./PaymentWithPaystack"), {
  ssr: false,
});

function CheckOutForm() {
  //In order for the infomation being clicked in the input to be seen
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const { totalCost } = useSelector((state) => state.cart);
  // condition fo enable any user to access checkout via url, until there is an item in the cart
  if (totalCost <= 0) {
    return redirect("/marketplace");
  }

  return (
    <form className="my-20 px-4 shadow-md rounded-lg max-w-2xl mx-auto grid gap-4">
      <h2 className="text-amber-800 text-xl font-semibold text-center">
        Complete the form to place your order
      </h2>
      <input
        value={customerDetails.name}
        onChange={(e) =>
          setCustomerDetails({ ...customerDetails, name: e.target.value })
        }
        type="text"
        placeholder="enter your name"
        className="p-2 w-full border border-amber-200 rounded-md  focus:outline-amber-800"
      />
      <input
        value={customerDetails.email}
        onChange={(e) =>
          setCustomerDetails({ ...customerDetails, email: e.target.value })
        }
        type="text"
        placeholder="enter your email address"
        className="p-2 w-full border border-amber-200 rounded-md  focus:outline-amber-800"
      />
      <input
        value={customerDetails.address}
        onChange={(e) =>
          setCustomerDetails({ ...customerDetails, address: e.target.value })
        }
        type="text"
        placeholder="enter your delivery address"
        className="p-2 w-full border border-amber-200 rounded-md  focus:outline-amber-800"
      />

      <PaystackDynamic customerDetails={customerDetails} />
    </form>
  );
}

export default CheckOutForm;
