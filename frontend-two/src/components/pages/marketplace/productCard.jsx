//This is where you make an interface and style how you want every other card to look like using one card
//Therefore this productcard respresnts one card
import { formatCurrency } from "@/utils/helper";
import React from "react";
import Link from "next/link";

function ProductCard({
  product_id,
  product_image,
  product_name,
  product_price,
}) {
  // Mind you just the image, price and name was displayed first
  return (
    <div className="border border-gray-200 rounded-md hover:shadow-2xl ">
      <img
        className="w-[400px] h-[200px] lg:h-[300px] object-cover mx-auto hover:w-[200px] hover:object-contain transition-all"
        src={product_image}
        alt={product_name}
      />
      {/* we want the name to be clicked and then takes us to the dynamic page in the market place folder */}
      <Link href={`/marketplace/${product_id}`}>
        <h3 className="font-bold p-2 text-indigo-400 hover:underline">
          {product_name}
        </h3>
      </Link>

      <p className="text-gray-500 p-2 mb-2">{formatCurrency(product_price)}</p>
    </div>
  );
}

export default ProductCard;
