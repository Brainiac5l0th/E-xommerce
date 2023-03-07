import axios from "axios";
import { removeProduct } from "../actionCreators";

const deleteProductThunk = (productId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:9000/products/${productId}`);
      dispatch(removeProduct(productId));
    } catch (error) {
      console.log("There is a server side error!");
    }
  };
};

export default deleteProductThunk;
