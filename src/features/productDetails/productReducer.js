import { LOAD_A_PRODUCT } from "./actionTypes";
import { initialState } from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_A_PRODUCT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default productReducer;
