import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import trash from "../assets/images/delete.png";
import BtnOutStock from "../components/BtnOutStock";
import Button from "../components/Button";
import { addToCart } from "../features/cart/actionCreators";
import fetchAProductThunk from "../features/productDetails/thunk/fetchAProduct";
import deleteProductThunk from "../features/products/thunk/deleteProductThunk";

const ProductDesc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  useEffect(() => {
    dispatch(fetchAProductThunk(productId));
  }, [dispatch, productId]);

  const productDetails = useSelector((state) => state.product);
  const {
    id,
    name,
    thumbnail,
    category,
    description,
    price,
    in_stock: inStock,
  } = productDetails;

  //handlers
  const handleAddCart = () => {
    dispatch(addToCart(id, price));
  };

  const deleteHandler = () => {
    dispatch(deleteProductThunk(productId));
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  };

  //content for button
  const buttonContent = inStock ? (
    <Button handler={handleAddCart}>Add to Cart</Button>
  ) : (
    <BtnOutStock>Out of Stock</BtnOutStock>
  );

  const deleteBtn = (
    <button
      className="rounded-full w-10 h-10 bg-gray-200 p-0  inline-flex items-center justify-center text-gray-500 ml-4"
      onClick={deleteHandler}
    >
      <img
        src={trash}
        alt="delete icon"
        className="max-w-[28px] hover:animate-wiggle"
      />
    </button>
  );
  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={name}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {category}
            </h2>
            <h1 className="dark:text-teal-600 text-3xl title-font font-medium mb-1">
              {name}
            </h1>

            <p className="leading-relaxed dark:text-teal-700 my-2 mb-4">
              {description}
            </p>

            <div className="flex">
              <span className="title-font font-bold text-2xl text-teal-900 dark:text-white">
                USD {price}
              </span>
              {buttonContent}
              {deleteBtn}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
