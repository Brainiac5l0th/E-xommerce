import React from "react";

const CartBill = ({ carts }) => {
  const total = carts.reduce(
    (total, cart) => total + cart?.amount * cart?.price,
    0
  );
  return (
    <div>
      <div className="mx-auto overflow-hidden rounded-md border p-4">
        <h4 className="mt-2 mb-8 text-xl font-bold text-center">
          Bill Details
        </h4>
        <div className="space-y-4">
          {/* <!-- sub total --> */}
          <div className="flex items-center justify-between">
            <p>Sub Total</p>
            <p>
              USD <span>{total}</span>
            </p>
          </div>
          {/* <!-- Discount --> */}
          <div className="flex items-center justify-between">
            <p>Discount</p>
            <p>
              USD <span>0</span>
            </p>
          </div>
          {/* <!-- VAT --> */}
          <div className="flex items-center justify-between">
            <p>VAT</p>
            <p>
              USD <span>0</span>
            </p>
          </div>
          <hr />
          {/* <!-- Total --> */}
          <div className="flex items-center justify-between pb-4">
            <p className="font-bold">TOTAL</p>
            <p className="font-bold">
              USD <span>{total}</span>
            </p>
          </div>
          <button className="w-full text-white bg-teal-600 transition-transform transform duration-300 px-5 py-3  active:translate-y-1 hover:bg-teal-700 font-medium rounded-xl text-md text-center">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartBill;
