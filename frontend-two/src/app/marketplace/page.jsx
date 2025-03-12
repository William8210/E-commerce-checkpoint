import ProductList from "@/components/pages/marketplace/productlist";
import Marquee from "react-fast-marquee";

function MarketPlace() {
  return (
    <div className="container mx-auto p-4 ">
      <Marquee className="bg-gray-600 text-gray-200 font-medium italic rounded-md py-3 text-lg">
        <p> 👗Your Dream Wardrobe Awaits – Shop Our Exclusive Collection👗💄</p>
      </Marquee>
      <h1 className="text-3xl lg:text-5xl text-center my-8 text-red-400 font-semibold animate-pulse">
        Home of Affordable wears
      </h1>
      <ProductList />
    </div>
  );
}

export default MarketPlace;
