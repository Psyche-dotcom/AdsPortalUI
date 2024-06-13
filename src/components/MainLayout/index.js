"use client";
import React from "react";
import MenuBar from "../menubar";

const MainLayout = ({ children }) => {
  return (
    <>
      {" "}
      <nav>
        <div className="w-11/12 md:w-10/12 mx-auto py-14">
          <MenuBar />
        </div>
      </nav>
      {children}
    </>
  );
};

export default MainLayout;
