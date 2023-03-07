import { CLEARUPDATE, TOUPDATE } from "./actionTypes";
import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOUPDATE:
      return { ...state, toUpdate: action.payload };
    case CLEARUPDATE:
      return { ...state, toUpdate: "" };
    default:
      return state;
  }
};

export default filterReducer;
