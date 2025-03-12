import { AllProducts } from "../../../constant/productsData";
import ProductCard from "./productCard"; //importing the product card to use it here
import React from "react";

function ProductList() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 container mx-auto p-4 ">
      {AllProducts.map((item) => {
        return (
          <ProductCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
          />
        );
      })}
    </section>
  );
}

export default ProductList;
