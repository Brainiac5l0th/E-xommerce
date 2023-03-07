import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartBill from "../components/CartBill";
import CartItem from "../components/CartItem";
const Cart = () => {
  useEffect(() => {
    document.title = "Cart";
  }, []);

  //get all carts
  const carts = useSelector((state) => state.carts);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="mx-auto container	space-y-2">
          <div className="space-y-3">
            {carts && carts.length ? (
              carts.map((cart) => <CartItem key={cart.id} cart={cart} />)
            ) : (
              <h1 className="text-center text-xl text-pink-600 font-bold m-4">
                Cart is Empty. Add products into cart.
              </h1>
            )}
          </div>

          <CartBill carts={carts} />
        </div>
      </div>
    </main>
  );
};

export default Cart;
