import React from "react";
import "./IconsButton.css"

const IconsButton = ({ label, onClick, disabled }) => {
  const handlePlus = () => {
    console.log("Plus button clicked");
  };
  const handleMinus = () => {
    console.log("Minus button clicked");
  };
  return(
  <div>
    <button onClick={onClick} disabled={disabled}>
        {label}
      </button>

      <div className="btns">
        <button label="Plus" onClick={handlePlus} className="plus-button">+</button>
        <button label="Minus" onClick={handleMinus} className="minus-button">-</button>
      </div>
  </div>
)};

export default IconsButton;
