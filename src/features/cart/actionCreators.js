import { ADD_TO_CART, DECREMENT_CART, DELETE_FROM_CART } from "./actionTypes";

export const addToCart = (id, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      price,
    },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    payload: { id },
  };
};
export const decrementCart = (id) => {
  return {
    type: DECREMENT_CART,
    payload: { id },
  };
};
