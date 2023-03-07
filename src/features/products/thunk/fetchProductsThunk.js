import axios from "axios";
import { loadProducts } from "../actionCreators";
const fetchProductsThunk = async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:9000/products");
    const products = response?.data;
    dispatch(loadProducts(products));
  } catch (err) {
    console.log("There is a server side error!", err);
  }
};

export default fetchProductsThunk;
