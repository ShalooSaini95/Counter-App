import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
   
    setCount(count + 1);
  };

  const decrement = () => {
    if(count<1) return;
    setCount(count - 1);
  };
  return (
    <div className="App">
    <h1 className="text-center text-primary my-3 " style={{textDecoration:"underline"}}>Counter App</h1>
    <div className=" d-flex flex-column justify-content-center align-items-center" style={{height:'60vh'}}>
    <span className="text-primary fw-bold" style={{fontSize:"40px"}}>{count}</span><br/>
    <br/>
      <button onClick={increment} className="btn btn-primary w-50">Increment</button>
      <br/>
      <button onClick={decrement} className="btn btn-info w-50">Decrement</button>
    </div></div>
  );
};

export default App;
