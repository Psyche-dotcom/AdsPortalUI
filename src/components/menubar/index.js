"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import MenuitemF from "../menu";
import { AuthContext } from "@/Utils/AuthContext"; // Adjust the import path as necessary

const MenuBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const loginStatus = localStorage.getItem("islogin");

    if (loginStatus !== "true" && pathname === "/register") {
      router.push("/register");
    } else if (loginStatus === "false") {
      router.push("/login");
    } else if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, [router, setIsLoggedIn]);

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
