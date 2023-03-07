import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import trash from "../assets/images/delete.png";
import editImg from "../assets/images/edit-solid.svg";
import { addToCart } from "../features/cart/actionCreators";
import { toUpdate } from "../features/filters/actionCreators";
import deleteProductThunk from "../features/products/thunk/deleteProductThunk";
import BtnOutStock from "./BtnOutStock";
import Button from "./Button";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, price, thumbnail, in_stock: inStock } = product;

  //handler
  const handleClick = () => {
    dispatch(addToCart(id, price));
  };

  //button content
  const buttonContent = inStock ? (
    <Button handler={handleClick}>Add To Cart</Button>
  ) : (
    <BtnOutStock>Out of Stock</BtnOutStock>
  );

  //handler
  const handleDelete = () => {
    dispatch(deleteProductThunk(id));
  };

  const handleEdit = () => {
    dispatch(toUpdate(id));
    navigate("/add");
  };
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg dark:border dark:border-emerald-400 cursor-pointer transform transition-all ease-in duration-300 hover:scale-105">
      <Link to={`/products/${id}`}>
        <img className="w-full " src={thumbnail} alt={name} />
        <div className=" px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-stale-700 text-lg">USD {price}</p>
        </div>
      </Link>
      <div className="flex mb-4 mr-4 justify-between">
        <button
          className="rounded-full w-10 h-10 bg-gray-200 p-0  inline-flex items-center justify-center text-gray-500 ml-4"
          onClick={handleEdit}
        >
          <img
            src={editImg}
            alt="Edit this product"
            className="max-w-[28px] hover:animate-wiggle"
          />
        </button>
        {buttonContent}
        <button
          className="rounded-full w-10 h-10 bg-gray-200 p-0  inline-flex items-center justify-center text-gray-500 ml-4"
          onClick={handleDelete}
        >
          <img
            src={trash}
            alt="delete icon"
            className="max-w-[28px] hover:animate-wiggle"
          />
        </button>
      </div>
    </div>
  );
};

export default Product;
