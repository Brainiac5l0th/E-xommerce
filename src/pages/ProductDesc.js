import React from "react";
import { useParams } from "react-router-dom";

const ProductDesc = () => {
  const { productId } = useParams();
  return <div>{productId}</div>;
};

export default ProductDesc;
