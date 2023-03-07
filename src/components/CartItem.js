import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import trashIcon from "../assets/images/delete.png";
import {
  addToCart,
  decrementCart,
  deleteFromCart,
} from "../features/cart/actionCreators";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);

  const { id: cartId, amount } = cart;

  const selectedCart = products?.filter((cart) => cart.id === cartId);
  const { id, name, price, category, thumbnail } = selectedCart[0];

  const totalPrice = price * amount;

  //handler
  const handleNavigate = () => {
    navigate(`/products/${id}`);
  };
  const handleCartDecrement = () => {
    dispatch(decrementCart(id));
  };
  const handleCartIncrement = () => {
    dispatch(addToCart(id, price));
  };
  const handleDelete = () => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="md:grid grid-cols-12 rounded border p-4">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img
          className="max-w-[80px] cursor-pointer"
          src={thumbnail}
          alt={name}
          onClick={handleNavigate}
        />
        {/* <!-- cart item info --> */}
        <div className="space-y-2 ">
          <h4 className="font-semibold cursor-pointer" onClick={handleNavigate}>
            {name}
          </h4>
          <p className="text-sm">{category}</p>
          <p>
            USD <span className="font-bold">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button className="font-bold text-xl" onClick={handleCartIncrement}>
            +
          </button>
          <span className="font-semibold text-xl">{amount}</span>
          <button
            className="font-bold text-2xl"
            onClick={amount === 1 ? handleDelete : handleCartDecrement}
          >
            -
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          USD <span>{totalPrice}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button onClick={handleDelete}>
          <img className="max-w-[32px] " src={trashIcon} alt="trash icon" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
