"use cliet";
import { navData } from "@/Utils/Variable";
import React from "react";
import NavItem from "../NavItem";

const MenuitemF = () => {
  return (
    <>
      <NavItem key={1} title={"General Analytics"} link={"/"} />;
      <NavItem key={2} title={"Meta Ads"} link={"/meta"} />;
      <NavItem key={3} title={"Google Ads"} link={"/google"} />;
    </>
  );
};

export default MenuitemF;
