"use client";
import { AdsData, AdsImpressiondata, AdsTopdata } from "@/Utils/Data";
import BtnOrange2 from "../atom/BtnOrange2";
import CustomSelect from "../atom/CustomSelect";
import SearchInput from "../atom/SearchInput";

const TopFilter = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto pb-4">
      <section className="flex lg:hidden gap-2 justify-between items-center">
        <SearchInput />
        <div onClick={() => {}}>
          <BtnOrange2 text={"Filter"} />
        </div>
      </section>
      <section className="hidden lg:flex gap-2 justify-between items-center">
        <SearchInput />
        <CustomSelect data={AdsTopdata} />

        <CustomSelect
          data={AdsImpressiondata}
          otherdata={"last range filter: "}
        />
        <CustomSelect data={AdsData} otherdata={"Impresssion Count: "} />

        <BtnOrange2 text={"Filter"} />
      </section>
    </div>
  );
};

export default TopFilter;
