import ReactDOM from "react-dom";
import "./Modal.css";
// import OrderList from "./Orders/OrderList";



export const Modal = ({ closed, children }) => {
  return ReactDOM.createPortal(
    <div>
      {/* <OrderList /> */}
      <div className="modal" onClick={closed}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>,
    
    document.getElementById("modal")
  );
};




