import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductContainer = ({ productCategory }) => {
  const state = useSelector((state) => state.products);
  return (
    <>
      <h1 className="z-50 text-center font-semibold text-lg my-4 bg-teal-700 text-white py-2 rounded sticky top-0">
        {productCategory}s
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {state
          .filter((product) => product.category === productCategory)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductContainer;
