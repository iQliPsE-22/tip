import React from "react";

const Friend = ({ setTip }) => {
  const handleTip = (e) => {
    setTip(e.target.value);
  };
  return (
    <div>
      <h2>Friends tip</h2>
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

export default Friend;
