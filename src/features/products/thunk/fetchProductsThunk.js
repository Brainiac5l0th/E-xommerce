import { loadProducts } from "../actionCreators";

const fetchProductsThunk = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:9000/products");
    const products = await response.json();
    console.log(products);
    dispatch(loadProducts(products));
  } catch (err) {
    console.log("There is a server side error!", err);
  }
};

export default fetchProductsThunk;
