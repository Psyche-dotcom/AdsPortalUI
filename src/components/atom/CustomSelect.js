import React from "react";

const CustomSelect = ({ data, otherdata }) => {
  return (
    <select className="bg-zinc-500 p-2 rounded-xl">
      {data.map((data, index) => (
        <option key={index} value={data.text}>
          {otherdata} {data.text}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
