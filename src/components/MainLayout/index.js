"use client";
import React from "react";
import MenuBar from "../menubar";
import { AuthProvider } from "@/Utils/AuthContext";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <nav>
        <div className="w-11/12 md:w-10/12 mx-auto py-14">
          <MenuBar />
        </div>
      </nav>
      {children}
    </AuthProvider>
  );
};

export default MainLayout;
