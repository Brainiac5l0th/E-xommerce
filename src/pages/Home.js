import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductContainer from "../components/ProductContainer";
import fetchProductsThunk from "../features/products/thunk/fetchProductsThunk";

const PRODUCTS_CATEGORY = ["Laptop", "Smartphone", "Tablet"];
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk);
  }, [dispatch]);
  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold">Products</h1>
      <hr className="my-4" />
      {PRODUCTS_CATEGORY.map((productCategory, i) => (
        <ProductContainer key={i} productCategory={productCategory} />
      ))}
    </section>
  );
};

export default Home;
