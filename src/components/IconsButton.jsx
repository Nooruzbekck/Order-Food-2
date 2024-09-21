import "./IconsButton.css";

export const IconsButton = ({
  children,
  onClick,
  disabled,
  style,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      {...props}
      className={`custom-button ${disabled ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
};
