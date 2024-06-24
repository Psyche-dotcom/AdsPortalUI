"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/MainLayout";
import { AuthContext } from "@/Utils/AuthContext";
import { postData } from "@/util/ApiService";

const LoginSection = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }

    var loginData = {
      email: username,
      password: password,
    };
    try {
      var baseUrl = process.env.NEXT_PUBLIC_API_URL;
      var response = await postData(baseUrl + "api/user/auth/login", loginData);
      if (response.statusCode === 200) {
        localStorage.setItem("token", response.result.jwt);
        setIsLoggedIn(true);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.errorMessages[0]);
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginSection;
