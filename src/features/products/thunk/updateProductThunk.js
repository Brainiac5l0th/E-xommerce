import axios from "axios";
import { updateProduct } from "../actionCreators";
const updateProductThunk = (id, productData) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:9000/products/${id}`,
        productData
      );
      const product = await response?.data;
      dispatch(updateProduct(product?.id, product));
    } catch (error) {
      console.log("There is a server side error!");
    }
  };
};

export default updateProductThunk;
