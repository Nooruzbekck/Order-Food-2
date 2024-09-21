import React from "react";
import ButtonAdd from "./UI/ButtonAdd";
import Input from "./UI/Input";
import { Products } from "../utils/constants/products";


const ProductsList = ({ products }) => {
  return (
    <ul className="container-map">
      {Products.map((props) => (
        <li key={props.id} className="products_list">
          <div>
            <h1 className="title_h1">{props.title}</h1>
            <p className="description_p">{props.description}</p>
            <p className="prise_p">${props.prise}</p>
            <div>{props.li}</div>
          </div>

          <div className="button_input">
            <label className="list_label">
              Amount
              <Input />
            </label>
            <ButtonAdd>Add</ButtonAdd>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
