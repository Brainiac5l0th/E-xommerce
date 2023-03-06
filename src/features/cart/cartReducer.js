import { ADD_TO_CART, DECREMENT_CART, DELETE_FROM_CART } from "./actionTypes";
import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let flag = 0;
      if (state.length && flag === 0) {
        const updatedState = state?.map((singleProduct) => {
          //check if id is in existing
          if (singleProduct.id === action.payload.id) {
            flag = 1;
            return {
              ...singleProduct,
              amount: singleProduct.amount + 1,
            };
          }
          return singleProduct;
        });
        if (flag === 0) {
          //flag 0 means there is no existing id
          return [...state, { ...action.payload, amount: 1 }];
        } else {
          return updatedState;
        }
      } else {
        return [...state, { ...action.payload, amount: 1 }];
      }
    case DECREMENT_CART:
      return state?.map((singleProduct) => {
        if (singleProduct.id === action.payload.id) {
          return {
            ...singleProduct,
            amount:
              singleProduct.amount - 1 >= 0
                ? singleProduct.amount - 1
                : singleProduct.amount,
          };
        }
        return singleProduct;
      });
    case DELETE_FROM_CART:
      return state.filter(
        (singleState) => singleState.id !== action.payload.id
      );
    default:
      return state;
  }
};

export default cartReducer;
