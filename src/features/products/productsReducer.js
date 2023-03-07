import {
  ADD_PRODUCT,
  LOAD_PRODUCTS,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "./actionTypes";
import { initialState } from "./initialState";

const generateId = (productsArray) => {
  const maxId = productsArray?.reduce(
    (maxvalue, product) => Math.max(product.id, maxvalue),
    0
  );
  return maxId + 1;
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.payload];
    case ADD_PRODUCT:
      return [...state, { id: generateId(state), ...action.payload }];
    case REMOVE_PRODUCT:
      return state.filter((singleState) => singleState.id !== action.payload);
    case UPDATE_PRODUCT:
      return state.map((singleProduct) => {
        if (singleProduct.id === action.payload.id) {
          return {
            ...singleProduct,
            ...action.payload,
          };
        }
        return singleProduct;
      });
    default:
      return state;
  }
};

export default productsReducer;
