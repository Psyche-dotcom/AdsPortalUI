"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MenuitemF from "../menu";

const MenuBar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("islogin") === "true";
    if (loginStatus) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("islogin");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-white">My Ads Portal</h1>
      </Link>
      <div className="lg:flex lg:gap-8">
        {isLoggedIn ? (
          <>
            <MenuitemF />
            <p
              className="text-white font-semibold rounded-lg cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </p>
          </>
        ) : (
          <>
            <Link href="/login">
              <span className="text-white font-semibold rounded-lg">Login</span>
            </Link>
            <Link href="/register">
              <span className="text-white font-semibold rounded-lg">
                Signup
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
