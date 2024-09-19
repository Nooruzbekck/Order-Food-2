import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ closed, children }) => {
  return ReactDOM.createPortal(
    <div className="modal" onClick={closed}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
