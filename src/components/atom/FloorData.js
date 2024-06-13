import React, { useState } from "react";

const FloorData = () => {
  const [count, setCount] = useState(20);
  const incrementCount = () => {
    setCount((prev) => prev + 10);
  };
  const decrementCount = () => {
    if (count === 10) {
      setCount(10);
    } else {
      setCount((prev) => prev - 10);
    }
  };
  return (
    <div className="bg-home-grey p-1 rounded-xl flex items-center gap-1">
      <p>Floor area: {count}</p>
      <div>
        <img
          src="/images/collapse-arrow.png"
          alt="increase floor area"
          onClick={incrementCount}
        />
        <img
          src="/images/expand-arrow.png"
          alt="decrease floor area"
          onClick={decrementCount}
        />
      </div>
    </div>
  );
};

export default FloorData;
