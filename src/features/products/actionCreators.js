import {
  ADD_PRODUCT,
  LOAD_PRODUCTS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCTS,
    payload: data,
  };
};
export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const updateProduct = (id, data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      id,
      data,
    },
  };
};
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
