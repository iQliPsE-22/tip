import React from "react";

const YourTip = ({ setTip }) => {
  const handleTip = (e) => {
    setTip(e.target.value);
  };
  return (
    <div>
      <h2>Your tip</h2>
      <select onChange={handleTip}>
        <option value="0">Disappointed</option>
        <option value="5">Average</option>
        <option value="10">Nice</option>
        <option value="20">very Nice</option>
        <option value="50">Excellent</option>
      </select>
    </div>
  );
};

export default YourTip;
