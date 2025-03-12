//This is where we are going to displace how out cartitems will look like
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux"; //This is to access whatever we have in our cartItem
import { Delete, Plus, Minus } from "lucide-react";
import { formatCurrency } from "@/utils/helper";
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  deleteCartItem,
} from "@/features/cart/cartSlice";
import { useRouter } from "next/navigation";

//maping to show the exact items tou want to show in the cart
function CartList() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const router = useRouter();
  if (cartItem.length === 0) {
    return (
      <div className="bg-amber-50 rounded-md p-6 text-center">
        <h1 className="text-3xl text-amber-800 font-semibold">
          Sorry your cart is empty
        </h1>
        {/* we want to link the button to the market place and we can't use Link hence we made use of useRputer from nextNavigation, link can only be used if you want to navigate from outside of a function */}
        <button
          onClick={() => router.push("/marketplace")}
          className="text-amber-50 px-2 py-1 rounded-md shadow-2xl mt-6 bg-amber-800 text-lg animate-bounce"
        >
          start shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 max-w-[600px] rounded-md">
      {cartItem.map((item) => {
        return (
          <div
            key={item.product_id}
            className="border-b border-gray-200 p-3 flex gap-5"
          >
            <div>
              <img
                className="w-[85px] rounded-md mb-2"
                src={item.product_image}
                alt=""
              />
              <button
                onClick={() => dispatch(deleteCartItem(item.product_id))}
                className="bg-amber-800 p-1 font-bold text-white rounded-md hover:opacity-80 cursor-pointer"
              >
                <Delete />
              </button>
            </div>

            <h3 className="font-serif font-semibold text-amber-800 mr-auto text-lg">
              {item.product_name}
            </h3>
            <div>
              <h3 className="text-blue-900 font-semibold mb-4 text-md">
                {formatCurrency(item.product_price)}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    dispatch(decreaseProductQuantity(item.product_id))
                  }
                  className=" border border-black rounded-md hover:opacity-80 cursor-pointer"
                >
                  <Minus />
                </button>
                <span>{item.product_quantity}</span>
                <button
                  onClick={() =>
                    dispatch(increaseProductQuantity(item.product_id))
                  }
                  className=" border border-black rounded-md hover:opacity-80 cursor-pointer"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
