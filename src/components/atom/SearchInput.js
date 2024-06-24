import React from "react";
import CusInput2 from "./CusInput2";

const SearchInput = ({ onDateChange }) => {
  return (
    <div className="relative">
      <CusInput2
        type={"date"}
        placeholder={"Filter by date"}
        onChange={onDateChange}
      />
    </div>
  );
};

export default SearchInput;
