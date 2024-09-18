import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [closed, setClosed] = useState(false);

  const closeAndOpen = () => {
    setClosed(!closed);
  };
  return (
    <div className="app">
      <button onClick={closeAndOpen}>Your Cart</button>
      {closed && <Modal closed={closeAndOpen}>adsfadfasdf</Modal>}
    </div>
  );
}

export default App;
