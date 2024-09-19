import React from 'react';
import AiButton from "./components/UI/AiButton/AiButton.jsx"

const App = () => {
  const handleClose = () => {
    console.log('Close');
  };

  const handleOrder = () => {
    console.log('Order');
    
  };

  return (
   <div> 
    <AiButton label="Close" onClick={handleClose} className="close-button"/>

     <AiButton label="Order" onClick={handleOrder} className="order-button"/>  

   </div>
  );
};

export default App;
