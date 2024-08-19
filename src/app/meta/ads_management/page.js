"use client";

import React, { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";
import { postData, fetchData } from "@/util/ApiService";
import { useRouter } from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable2 from "@/components/ResponsiveTable2";
import Link from "next/link";

const MetaAdsPage = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const router = useRouter();

  const apiCallAdsAccountData = async (loginToken) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetchData(
        `${baseUrl}api/ads/stats/ads_account/all`,
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

  const fetchAdsAccountData = async () => {
    const loginToken = localStorage.getItem("token");
    if (!loginToken) {
      router.push("/register");
      return;
    }

    setLoading(true);
    const adsAccountData = await apiCallAdsAccountData(loginToken);
    console.log(adsAccountData);
    setTableData(adsAccountData);
    setLoading(false);
    return adsAccountData;
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchAdsAccountData();
    };
    fetchDataAsync();
  }, []);

  const handleView = async (adId) => {
    const adDetails = tableData.find((ad) => ad.id === adId);
    setSelectedAd(adDetails);
  };

  const handleBack = () => {
    setSelectedAd(null);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("ID copied to clipboard!");
  };

  return (
    <MainLayout>
      <div className="text-white w-11/12 mx-auto">
        <section className="my-6 flex gap-6">
          <Link href={"/meta/ads_management/add_token"}>
            {" "}
            <button className="text-white bg-green-700 p-6">Add Token</button>
          </Link>
          <Link href={"/meta/ads_management/add_campaign"}>
            {" "}
            <button className="text-white bg-yellow-700 p-6">
              Add Campaign
            </button>
          </Link>
          <Link href={"/meta/ads_management/campaign"}>
            {" "}
            <button className="text-white bg-orange-600 p-6">
              Fetch Campaign
            </button>
          </Link>
        </section>
        {selectedAd ? (
          <div className="card-design p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl mb-4">Ad Details</h2>
              <p>
                <strong>ID:</strong> {selectedAd.id}{" "}
                <button
                  onClick={() => copyToClipboard(selectedAd.id)}
                  className="ml-2 text-blue-400 underline cursor-pointer"
                >
                  Copy
                </button>
              </p>
              <p>
                <strong>Name:</strong> {selectedAd.name}
              </p>
              <p>
                <strong>Status:</strong> {selectedAd.accountStatus}
              </p>
              <p>
                <strong>Currency:</strong> {selectedAd.currency}
              </p>
              <p>
                <strong>Owner:</strong> {selectedAd.owner}
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
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="loader">Loading...</div>
              </div>
            ) : (
              <>
                <div className="card-design" style={{ minHeight: "400px" }}>
                  <h6 className="mb-4 text-3xl">All Ads on User Account.</h6>
                  <ResponsiveTable2 data={tableData} onView={handleView} />
                </div>
              </>
            )}
          </section>
        )}
      </div>
    </MainLayout>
  );
};

export default MetaAdsPage;
