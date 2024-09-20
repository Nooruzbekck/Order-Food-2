import React from "react";
import ProductsList from "./ProductsList";
import "./ProductsList.css";

const ProductsMain = ({products}) => {
  return (
    <div className="container-main">
      <ProductsList  products={products}/>
    </div>
  );
};

export default ProductsMain;
