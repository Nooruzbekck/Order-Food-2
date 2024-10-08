import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,

    document.getElementById("modal")
  );
};
