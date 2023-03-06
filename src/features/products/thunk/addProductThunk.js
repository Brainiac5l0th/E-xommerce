import { addProduct } from "../actionCreators";

const addProductThunk = (productData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/products/`, {
        method: "POST",
        body: JSON.stringify({ ...productData }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      const product = await response.json();
      dispatch(addProduct(product));
    } catch (error) {
      console.log("There is a server side error!");
    }
  };
};

export default addProductThunk;
