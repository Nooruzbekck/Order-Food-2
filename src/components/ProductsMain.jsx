import React from "react";
import ProductsList from "./ProductsList";
import "./ProductsList.css";

export const ProductsMain = ({ Products }) => {
  return (
    <div className="container-main">
      <ProductsList Products={Products} />
    </div>
  );
};
