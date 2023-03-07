import axios from "axios";
import { loadAProduct } from "../actionCreator";

const fetchAProductThunk = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/products/${productId}`
      );
      const product = response?.data;
      dispatch(loadAProduct(product));
    } catch (err) {
      console.log("There is a server side error!", err);
    }
  };
};

export default fetchAProductThunk;
