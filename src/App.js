import React, { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import YourTip from "./components/YourTip";
import Friend from "./components/Friend";

const App = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);
  const Reset = () => {
    setBill(0);
    setTip(0);
    setTip2(0);
  };
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <YourTip tip={tip} setTip={setTip} />
      <Friend tip={tip2} setTip={setTip2} />
      <h1>
        Your Total Payable Amount is:${bill} + {(+tip + +tip2) / 2}% = $
        {+bill + +bill * ((+tip + +tip2) / 2 / 100)}
      </h1>
      <button onClick = {Reset}>Reset</button>
    </div>
  );
};

export default App;
