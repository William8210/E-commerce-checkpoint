"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar() {
  //In order to show the number of items we have in cart, we have the icon here which is the reason we are doing it in the navbar
  //and then created a p tag using cartItem.length
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div className="border border-gray-200 p-2">
      <nav className="container mx-auto flex justify-between items-center">
        <img
          src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
          alt="logo"
          className="h-20 w-20"
        />
        <div className="flex gap-4 items-center">
          <Link
            className="flex gap-2 items-center text-lg hover:text-amber-500 transition-colors duration-500"
            href={"/marketplace"}
          >
            shop
          </Link>
          {/* you must make the parent relative and then the child absolute to be able to put the cartitem.length on top of the cart */}
          <Link
            className=" relative flex  gap-2 items-center text-lg hover:text-amber-500 transition-colors duration-500"
            href={"/cart"}
          >
            <p className=" absolute right-[39px] bottom-[21px] bg-yellow-100  text-red-400 h-7 w-7 font-semibold rounded-full grid place-items-center">
              {cartItem.length}
            </p>
            <ShoppingCart color="#533c3c" absoluteStrokeWidth />
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
