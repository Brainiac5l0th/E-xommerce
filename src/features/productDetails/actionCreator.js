import { LOAD_A_PRODUCT } from "./actionTypes";

export const loadAProduct = (data) => {
  return {
    type: LOAD_A_PRODUCT,
    payload: data,
  };
};
