import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/actionCreators";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, thumbnail, in_stock: inStock } = product;

  //handler
  const handleClick = () => {
    dispatch(addToCart(id, price));
  };

  //button content
  const buttonContent = inStock ? (
    <button
      className="w-full text-white bg-teal-600 transition-transform transform duration-300 px-5 py-3 hover:scale-105 active:translate-y-1 hover:bg-teal-700 font-medium rounded-xl text-md text-center"
      onClick={handleClick}
    >
      Add To Cart
    </button>
  ) : (
    <button
      className="w-full text-white bg-gray-600 transition-transform transform duration-300 px-5 py-3  font-medium rounded-xl text-md text-center"
      disabled
    >
      Out of Stock
    </button>
  );

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg dark:border dark:border-emerald-400 cursor-pointer">
      <Link to={`/products/${id}`}>
        <img className="w-full" src={thumbnail} alt={name} />
        <div className=" px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-stale-700 text-lg">USD {price}</p>
        </div>
      </Link>
      <div className="m-4">{buttonContent}</div>
    </div>
  );
};

export default Product;
