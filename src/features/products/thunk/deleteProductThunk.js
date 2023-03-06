import { removeProduct } from "../actionCreators";

const deleteProductThunk = (productId) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:9000/products/${productId}`, {
        method: "DELETE",
      });

      dispatch(removeProduct(productId));
    } catch (error) {
      console.log("There is a server side error!");
    }
  };
};

export default deleteProductThunk;
