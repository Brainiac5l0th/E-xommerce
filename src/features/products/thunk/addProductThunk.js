import axios from "axios";
import { addProduct } from "../actionCreators";
const addProductThunk = (productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/products/`,
        productData
      );
      const product = response?.data;
      dispatch(addProduct(product));
    } catch (error) {
      console.log("There is a server side error!");
    }
  };
};

export default addProductThunk;
