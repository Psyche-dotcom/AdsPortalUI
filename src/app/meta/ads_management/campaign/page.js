"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import { fetchData } from "@/util/ApiService";
import ResponsiveCampaignTable from "@/components/ResponsiveCampaignTable";

const MetaCampaignsPage = () => {
  const [campaignData, setCampaignData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [adsId, setAdsId] = useState("");
  const router = useRouter();

  const apiCallCampaignData = async (loginToken, adsid) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetchData(
        `${baseUrl}api/ads/stats/ads_account/campaigns?adsid=${adsid}`,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        return response.result.data;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchCampaignData = async () => {
    const loginToken = localStorage.getItem("token");
    if (!loginToken) {
      router.push("/register");
      return;
    }
    if (adsId == null) {
      alert("Please enter ads account id");
      return;
    }
    setLoading(true);
    const campaignData = await apiCallCampaignData(loginToken, adsId);
    setCampaignData(campaignData);
    setLoading(false);
  };

  const handleView = async (campaignId) => {
    const campaignDetails = campaignData.find(
      (campaign) => campaign.id === campaignId
    );
    setSelectedCampaign(campaignDetails);
  };

  const handleBack = () => {
    setSelectedCampaign(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("ID copied to clipboard!");
  };

  const handleInputChange = (e) => {
    setAdsId(e.target.value);
  };

  const handleFetchData = () => {
    if (adsId) {
      fetchCampaignData();
    } else {
      alert("Please enter an Ads ID");
    }
  };

  return (
    <MainLayout>
      <div className="text-white w-11/12 mx-auto">
        {selectedCampaign ? (
          <div className="card-design p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl mb-4">Campaign Details</h2>
              <p>
                <strong>ID:</strong> {selectedCampaign.id}{" "}
                <button
                  onClick={() => copyToClipboard(selectedCampaign.id)}
                  className="ml-2 text-blue-400 underline cursor-pointer"
                >
                  Copy
                </button>
              </p>
              <p>
                <strong>Name:</strong> {selectedCampaign.name}
              </p>
              <p>
                <strong>Status:</strong> {selectedCampaign.status}
              </p>
              <p>
                <strong>Objective:</strong> {selectedCampaign.objective}
              </p>
              <p>
                <strong>Start Time:</strong> {selectedCampaign.startTime}
              </p>
              <p>
                <strong>Budget Remaining:</strong>{" "}
                {selectedCampaign.budgetRemaining}
              </p>
              <p>
                <strong>Daily Budget:</strong> {selectedCampaign.dailyBudget}
              </p>
            </div>
            <button
              onClick={handleBack}
              className="cursor-pointer bg-white p-4 text-blue-700 mt-4 rounded"
            >
              Back to Table
            </button>
          </div>
        ) : (
          <section className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-4 items-center  mb-4">
              <input
                type="text"
                value={adsId}
                onChange={handleInputChange}
                placeholder="Enter Ads ID"
                className="p-2 rounded border border-gray-300 text-black"
              />
              <button
                onClick={handleFetchData}
                className="cursor-pointer bg-blue-600 text-white p-2 rounded"
              >
                Fetch Campaign Data
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="loader">Loading...</div>
              </div>
            ) : (
              <>
                <div className="card-design" style={{ minHeight: "400px" }}>
                  <h6 className="mb-4 text-3xl">
                    All Campaigns for the Ads Account
                  </h6>
                  <ResponsiveCampaignTable
                    data={campaignData}
                    onView={handleView}
                  />
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </MainLayout>
  );
};

export default MetaCampaignsPage;
