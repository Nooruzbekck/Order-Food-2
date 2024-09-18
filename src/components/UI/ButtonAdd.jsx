import "./ButtonAdd.css";

const ButtonAdd = ({ children, onClick, type, disabled, ...props }) => {
  return (
    <button
      className="add-button"
      onClick={onClick}
      type={type}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonAdd;
