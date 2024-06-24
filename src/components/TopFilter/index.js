import React from "react";
import BtnOrange2 from "../atom/BtnOrange2";
import CustomSelect from "../atom/CustomSelect";
import SearchInput from "../atom/SearchInput";

const TopFilter = ({ onDateChange }) => {
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    onDateChange(selectedDate);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto pb-4">
      <section className="flex lg:hidden gap-2 justify-between items-center">
        <SearchInput onDateChange={handleDateChange} />
        <div onClick={() => {}}>
          <BtnOrange2 text={"Filter"} />
        </div>
      </section>
      <section className="hidden lg:flex gap-4  items-center">
        <SearchInput onDateChange={handleDateChange} />
        {/* <CustomSelect data={AdsTopdata} />

        <CustomSelect
          data={AdsImpressiondata}
          otherdata={"last range filter: "}
        />
        <CustomSelect data={AdsData} otherdata={"Impresssion Count: "} /> */}

        <BtnOrange2 text={"Filter"} />
      </section>
    </div>
  );
};

export default TopFilter;
