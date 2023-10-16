import React from "react";

const Bill = ({ bill, setBill }) => {
  const handleBillChange = (event) => {
    setBill(event.target.value);
  };
  return (
    <div>
      <h2>Your Bill</h2>
      <input type="number" value={bill} onChange={handleBillChange} />
    </div>
  );
};

export default Bill;
