import "./ButtonAdd.css";
import icon from "../../assets/icon/addIcon.svg";

const ButtonAdd = ({ children, onClick, type, disabled, ...props }) => {
  return (
    <button
      className="add-button"
      onClick={onClick}
      type={type}
      {...props}
      disabled={disabled}
    >
      <img src={icon} alt="" /> {children}
    </button>
  );
};

export default ButtonAdd;
