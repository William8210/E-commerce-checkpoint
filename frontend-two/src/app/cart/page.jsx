import CartList from "@/components/pages/cart/cartList";
import CartSummary from "@/components/pages/cart/cartSummary";

function Cart() {
  return (
    //Item start to make the card maintain the same height with the cartItem
    <section className="container mx-auto py-20 px-4 flex flex-col lg:flex-row gap-16 items-start">
      <div className="w-full lg:w-[60%]">
        <CartList />
      </div>
      <div className=" w-full lg:w-[40%]">
        <CartSummary />
      </div>
    </section>
  );
}

export default Cart;
