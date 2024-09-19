import React from 'react';
import './AiButton.css'

 const AiButton = ({label, onClick, className}) => {
  return (
    <div>
    <button className={`custom-button ${className}`} onClick={onClick}> {label} </button>
    </div>
  );
}
 export default AiButton;