import React from "react";
import "./Input.css";

const Input = ({type, onChange, value, ...props }) => {
  return <input 
  className="input_label"
  type={type}
  onChange={onChange}
  value={value}
  {...props}
  />
     
};

export default Input;
