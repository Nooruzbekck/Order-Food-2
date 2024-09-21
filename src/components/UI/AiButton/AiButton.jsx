import React from "react";
import "./AiButton.css";

const AiButton = ({ label, onClick, disabled }) => {
  const handleClose = () => {
    console.log("Close button clicked");
  };
  const handleOrder = () => {
    console.log("Order button clicked");
  };

  return (
    <div>
      <button onClick={onClick} disabled={disabled}>
        {label}
      </button>

      <div className="button-container">
        <button label="Close" onClick={handleClose} className="close-button">Close</button>
        <button label="Order" onClick={handleOrder} className="order-button">Order</button>
      </div>
    </div>
  );
};
export default AiButton;
