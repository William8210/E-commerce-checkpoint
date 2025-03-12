//For every information we want to display after the user has clicked on the product name and taken to the dynamic route[product_id]

//since we created a dynamic folder with a page app in it, we therefore import the product details in it in other for it to reflect when the dynamic route is clicked
//In order to use or extract the ID of  a product from the url, we make use of useParams
//recall that useParam, useState, use Effect is a hook
//from the linking of the product name with the dynamic folder[product_Id], we obtained the Id
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { AllProducts } from "../../../constant/productsData"; //using all Products due to our products data

import { formatCurrency } from "@/utils/helper"; //we will also be making use of it when the product name is clicked

import { addItemToCart } from "@/features/cart/cartSlice"; // We are importing the addItemToCart in the productDetails because of the add to cart button
import { useDispatch } from "react-redux"; //Whenever a function is created in the reducer, we use dispatch to call it anywhere

//product information is going to be a single object  that reflects the backend of each product

function ProductDetails() {
  const params = useParams();
  const [productInformation, setProductInformation] = useState(undefined); //nul because we aren't expecting an array that shoukd be empty

  //you must first define dispatch
  const dispatch = useDispatch();

  //singleProductDetails is a local variable within the getProduct details function
  //we must ake it globally availble using useState
  function getProductDetails() {
    const singleProductDetails = AllProducts.find(
      (item) => item.product_id === params.product_id
    );

    setProductInformation(singleProductDetails);
  }
  //automatically want to call the function the moment the page is being rended, so that we can retrieve the product that has that ID url
  useEffect(() => {
    getProductDetails();
  }, []);

  if (productInformation === undefined) {
    return (
      <div className="grid place-items-center h-[60vh]">
        <h1>Apologies, product Not Fount!</h1>;
      </div>
    );
  }

  //This is where we style whatever product's backend should be when the product is clicked
  return (
    <section className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-8 justify-center">
      <div>
        <img
          className="w-[500px] h-[500px] object-cover rounded-md"
          src={productInformation.product_image}
          alt={productInformation.product_name}
        />
      </div>
      <div className="bg-amber-50 p-4 rounded-md">
        <h1 className="text-amber-900 text-4xl font-semibold font-serif mb-4">
          {productInformation.product_name}
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          {formatCurrency(productInformation.product_price)}
        </p>
        <p className="border-y border-gray-300 py-2 mb-4 text-lg w-[15rem] rounded-md">
          <strong className="text-lg text-gray-600 font-semibold">
            Category
          </strong>
          :{productInformation.product_category}
        </p>
        <p>{productInformation.product_description}</p>
        <button
          onClick={() => dispatch(addItemToCart(productInformation))} //Productinformation takes the products to the global state
          className="bg-amber-500 text-black p-2 font-semibold shadow-2xl rounded-md hover:opacity-70 cursor-pointer mt-8 animate-pulse w-full text-center"
        >
          🛒 Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductDetails;
