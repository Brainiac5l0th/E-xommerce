import { TOUPDATE } from "./actionTypes";

export const toUpdate = (id) => {
  return {
    type: TOUPDATE,
    payload: id,
  };
};
export const clearUpdate = () => {
  return {
    type: TOUPDATE,
  };
};
