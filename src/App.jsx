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





    const resetFields = () => {
      setamount('');
      setdiscount('');
      setsavedamount(0);
      settotalcost(0);
    }

  return (
    <>
      <div className="app-container">
        <div className="calculator">
          <h1>Discount Calculator</h1>
          {/* <img src="/girl.jpg" alt="" /> */}
          <img
            src="https://i.pinimg.com/736x/3d/39/e4/3d39e4e9336035f66cdda5e5ad0b7141.jpg"
            alt=""
          />
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
              placeholder="Enter discount %"
              value={discount}
              onChange={(e) => setdiscount(e.target.value)}
            />
          </div>
          <button onClick={calculatediscount}>Calculate</button> <br />
          <button className="reset-btn" onClick={resetFields}>
            Reset
          </button>
          <div className="result">
            <h3>Amount Saved & Discount Amount : {savedamount} </h3>
            <h3>Final Amount :{totalcost} </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
