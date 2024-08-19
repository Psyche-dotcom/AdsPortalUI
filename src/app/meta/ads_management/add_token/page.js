"use client";
import MainLayout from "@/components/MainLayout";
import { postData } from "@/util/ApiService";
import React, { useState } from "react";

const AddToken = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [token, setToken] = useState("");
  const handleTokenSubmit = async () => {
    try {
      const loginToken = localStorage.getItem("token");
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      var response = await postData(
        `${baseUrl}api/token/add`,
        token,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        const data = response;
        console.log(data);
        setApiResponse(data);
        return data;
      }
    } catch (error) {
      console.error("Error submitting token:", error);
      setApiResponse({
        statusCode: 500,
        displayMessage: "Failed to submit token",
      });
    }
  };

  return (
    <MainLayout>
      <div className="w-11/12 mx-auto">
        <div className="card-design p-4 mb-8">
          <h3 className="text-xl mb-4">Submit Token</h3>
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Enter your token here"
            className="p-2 w-full h-40 rounded border border-gray-300 text-black"
          />
          <button
            onClick={handleTokenSubmit}
            className="cursor-pointer bg-green-600 text-white p-2 mt-4 rounded"
          >
            Submit Token
          </button>
          {apiResponse && (
            <div
              className={`mt-4 p-4 ${
                apiResponse.statusCode === 200
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <p>
                <strong>Status:</strong> {apiResponse.statusCode}
              </p>
              <p>
                <strong>Message:</strong> {apiResponse.displayMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AddToken;
