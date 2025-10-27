import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setamount] = useState('');
  const [discount, setdiscount] = useState('');
  const [savedamount, setsavedamount] = useState(0);
  const [totalcost, settotalcost] = useState(0);

  const calculatediscount=()=>{
    const amt = parseFloat(amount)
    const dis = parseFloat(discount)

    if(!isNaN(amt)&&!isNaN(dis)){
      const saved = (amt * dis)/100
      const total = amt -saved

      setsavedamount(saved.toFixed(2))
      settotalcost(total.toFixed(2))
    }else{
      setsavedamount(0)
      settotalcost(0)
    }
  }
  return (
    <>
      <div className="calculator">
        <h1>Discount Calculator</h1>
        <div className="inputs">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <div className="input2">
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter discount percentage"
            value={discount}
            onChange={(e) => setdiscount(e.target.value)}
          />
        </div>
        <button onClick={calculatediscount}>Calculate</button>

        <div className="result">
          <h3>Amount you saved : {savedamount} </h3>
          <h3>Final price :{totalcost} </h3>
        </div>
      </div>
    </>
  );
}

export default App;
