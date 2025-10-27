import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="calculator">
        <h1>Discount Calculator</h1>
        <div className="inputs">
          <input type="text" name="" id="" placeholder="Enter amount" />
        </div>
        <div className="input2">
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter discount percentage"
          />
        </div>
        <button>Calculate</button>

        <div className="result">
          <h3>Amount you saved : </h3>
          <h3>Final price : </h3>
        </div>
      </div>
    </>
  );
}

export default App;
