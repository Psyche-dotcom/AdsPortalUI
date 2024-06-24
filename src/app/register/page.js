"use client";
import MainLayout from "@/components/MainLayout";
import { postData } from "@/util/ApiService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First Name is required";
      if (!formData.lastName) newErrors.lastName = "Last Name is required";
    } else if (step === 2) {
      if (!formData.username) newErrors.username = "Username is required";
      if (!formData.email) newErrors.email = "Email is required";
    } else if (step === 3) {
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.phoneNumber)
        newErrors.password = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      var regData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        userName: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        confirmPassword: formData.password,
      };
      try {
        var baseUrl = process.env.NEXT_PUBLIC_API_URL;
        var response = await postData(
          baseUrl + "api/user/auth/register",
          regData
        );
        if (response.statusCode === 200) {
          alert("Successfully signed up");
          router.push("/login");
        }
      } catch (error) {
        console.log("Form submitted error", error);
      }
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
              </>
            )}
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="bg-gray-300 text-gray-700 p-2 rounded hover:bg-gray-400"
                >
                  Previous
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Next
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Register
                </button>
              )}
            </div>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterPage;
