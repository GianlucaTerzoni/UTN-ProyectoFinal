import React from "react";
import ProductItem from "./ProductItem";
import mockData from "../data/mockData"; 

const ProductList = () => {
  return (
    <div>
      {mockData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
