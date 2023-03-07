import { combineReducers } from "redux";
import cartReducer from "../features/cart/cartReducer";
import filterReducer from "../features/filters/filterReducer";
import productReducer from "../features/productDetails/productReducer";
import productsReducer from "../features/products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
  product: productReducer,
  filters: filterReducer,
});

export default rootReducer;
