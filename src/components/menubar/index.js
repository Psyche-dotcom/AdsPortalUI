"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MenuitemF from "../menu";

const MenuBar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const loginStatus = localStorage.getItem("islogin") === "true";
    if (loginStatus !== "true" && pathname === "/register") {
      router.push("/register");
    } else if (loginStatus === "false") {
      router.push("/login");
    } else if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, [router]);

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
