import React from "react";
import "./AiButton.css";

const AiButton = ({
  children,
  onClick,
  className,
  variant = "contained",
  ...props
}) => {
  const customClassName = variant === "outlined" ? "outlined" : "contained";
  return (
    <button className={customClassName} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
export default AiButton;
