import React from "react";
import { products } from "../utils/constants/products";
import "./ProductsList.css"

const ProductsList = () => {
  return (
    <div>
      {products.map((props) => (
        <div key={props.id} className="products_list">
          <h1 className="title_h1">{props.title}</h1>
          <p className="description_p">{props.description}</p>
          <p className="prise_p">{props.prise}</p>
        </div>
      ),
      )}
    </div>
  );
};

export default ProductsList;
