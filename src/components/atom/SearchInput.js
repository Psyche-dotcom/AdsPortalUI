import React from "react";
import CusInput2 from "./CusInput2";

const SearchInput = () => {
  return (
    <div className="relative">
      <CusInput2
        type={"date"}
        placeholder={"Enter an address, city, or ZIP code"}
      />
    </div>
  );
};

export default SearchInput;
