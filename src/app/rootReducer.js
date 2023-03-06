import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartReducer";
import productReducer from "../features/products/productsReducer";

const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});

export default rootReducer;
