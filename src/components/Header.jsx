import React from "react";
import "./Header.css";
import cart from "../assets/icon/cart.svg?react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1>React Meals</h1>
        <button className="button">
          <img src={cart} alt="cart" className="icon-cart" />
          Your Cart
          <div>7</div>
        </button>
      </header>
    </div>
  );
};

export default Header;
