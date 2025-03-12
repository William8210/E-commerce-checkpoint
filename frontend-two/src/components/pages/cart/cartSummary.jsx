"use client";
import React from "react";
import { formatCurrency } from "@/utils/helper";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function CartSummary() {
  const { totalCost } = useSelector((state) => state.cart);
  const router = useRouter();

  //function for the condition statement for the proceed to checkout button
  function handleNavigation() {
    if (totalCost > 0) {
      return router.push("/checkout");
    }
  }
  return (
    <div className="bg-amber-50 p-4 rounded-md">
      <h3 className="text-3xl font-bold font-serif">Cart Summary</h3>
      <div className="flex justify-between my-6">
        <p className="font-semibold text-lg">Sub Total</p>
        <p>{formatCurrency(totalCost)}</p>
      </div>
      {/* We could as well use link tag for navigation but we can't attach a condition statement to it but with useRouter, we can give a condition for total cost to be greater than zero before the button muust be clicked */}
      <button
        onClick={handleNavigation}
        className="bg-gray-500 p-3 w-full rounded-md text-amber-600"
      >
        Proceed to payout
      </button>
    </div>
  );
}

export default CartSummary;
