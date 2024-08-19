"use client";
import React, { useEffect, useState } from "react";
import MainLayout from "@/components/MainLayout";
import ResponsiveTable from "@/components/ResponsiveTable";
import TopFilter from "@/components/TopFilter";
import { postData } from "@/util/ApiService";
import dynamic from "next/dynamic";
import { PieOptionDashData, PieOptionMetaDashData } from "@/Utils/Variable";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

const CusAreaLineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});

const PieChartD = dynamic(() => import("@/components/PieChartD"), {
  ssr: false,
});

const MetaPage = () => {
  const [lineChartMetaDataDashboard, setLineChartMetaDataDashboard] = useState(
    []
  );
  const [lineChartOptionsDashboard, setLineChartOptionsDashboard] = useState(
    {}
  );
  const [seriesMetaPie, setSeriesMetaPie] = useState([]);
  const [seriesPie, setSeriesPie] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const formatDateToISO = (date) => {
    return new Date(date).toISOString();
  };

  const apiCallMetaImpressions = async (loginToken, date) => {
    try {
      const post = { date: formatDateToISO(date) };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await postData(
        `${baseUrl}api/ads/stats/meta/impression/daily/date`,
        post,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        return response.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const apiCallReach = async (loginToken, date) => {
    try {
      const post = { date: formatDateToISO(date) };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await postData(
        `${baseUrl}api/ads/stats/meta/stats/daily/date?type=1`,
        post,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        return response.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const apiCallClick = async (loginToken, date) => {
    try {
      const post = { date: formatDateToISO(date) };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await postData(
        `${baseUrl}api/ads/stats/meta/stats/daily/date?type=2`,
        post,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        return response.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const apiCallTableData = async (loginToken, date, pageNumber) => {
    try {
      const post = { date: formatDateToISO(date) };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await postData(
        `${baseUrl}api/ads/stats/meta/stats/daily/all?pageSize=5&pagenumber=${pageNumber}`,
        post,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        setTotalPages(response.result.totalPages);
        return response.result.metaStats;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async (date) => {
    const loginToken = localStorage.getItem("token");

    if (!loginToken) {
      router.push("/register");
    } else {
      setLoading(true);

      const metaImpressionResult = await apiCallMetaImpressions(
        loginToken,
        date
      );
      const reachResult = await apiCallReach(loginToken, date);
      const clickResult = await apiCallClick(loginToken, date);
      const tableResult = await apiCallTableData(loginToken, date, pageNumber);

      let metaImpressionData = [];
      let metaImpressionHours = [];
      let totalReach = 0;
      let totalClick = 0;

      metaImpressionResult.forEach((element) => {
        metaImpressionData.push(element.totalImpressions);
        metaImpressionHours.push(element.hour + ":00");
      });

      reachResult.forEach((element) => {
        totalReach += element.totalReach;
      });

      clickResult.forEach((element) => {
        totalClick += element.totalClicks;
      });

      setSeriesMetaPie([totalClick]);
      setSeriesPie([totalReach]);
      setLineChartOptionsDashboard({
        chart: {
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "string",
          categories: metaImpressionHours,
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "12px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "12px",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          strokeDashArray: 5,
          borderColor: "#56577A",
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
          },
          colors: ["#2CD9FF", "#582CFF"],
        },
        colors: ["#2CD9FF", "#582CFF"],
      });

      setLineChartMetaDataDashboard([
        {
          name: "Meta Ads",
          data: metaImpressionData,
        },
      ]);

      setTableData(tableResult);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedDate);
  }, [pageNumber]);

  const handleFilter = (date) => {
    setSelectedDate(date);
    fetchData(date);
  };

  const handleNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <MainLayout>
      <div className="text-white w-11/12 mx-auto">
        <section className="flex flex-col gap-8">
          <div className="flex justify-between gap-8">
            <div>
              <p className="text-center">Select Stats Date</p>
              <div className=" self-center">
                {" "}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => handleFilter(date)}
                  dateFormat="yyyy-MM-dd"
                  className="text-white bg-zinc-600 p-4 rounded-xl"
                />
              </div>
            </div>
            <Link href={"/meta/ads_management"}>
              {" "}
              <button className="text-white bg-green-700 p-6">
                Ads Management
              </button>
            </Link>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="loader">Loading...</div>
            </div>
          ) : (
            <>
              <div className="card-design" style={{ minHeight: "400px" }}>
                <h6 className="mb-4 text-3xl">
                  Daily Hourly Ad Impressions Meta
                </h6>
                <CusAreaLineChart
                  chartData={lineChartMetaDataDashboard}
                  chartOptions={lineChartOptionsDashboard}
                />
              </div>
              <section className="flex items-center justify-between gap-4">
                <div
                  className="card-design"
                  style={{ maxHeight: "500px", maxWidth: "500px" }}
                >
                  <h6 className="mb-4">
                    Current Daily Ads Click Overall Meta Stats
                  </h6>
                  <PieChartD
                    series={seriesMetaPie}
                    options={PieOptionMetaDashData}
                  />
                </div>
                <div
                  className="card-design"
                  style={{ maxHeight: "500px", maxWidth: "500px" }}
                >
                  <h6 className="mb-4">
                    Current Daily Ads Reach Overall Meta Stats
                  </h6>
                  <PieChartD
                    series={seriesPie}
                    options={PieOptionMetaDashData}
                  />
                </div>
              </section>
              <section className="mb-10">
                <div className="card-design">
                  <div className="flex flex-col gap-4">
                    <h6 className="mb-4">
                      Live Feed Data For all Meta Ads Stats
                    </h6>
                    <ResponsiveTable data={tableData} />
                    <div className="mt-4 self-end">
                      <button
                        className="bg-white py-2 px-4 rounded mr-2"
                        style={{
                          color: "rgba(6, 11, 40, 0.94)",
                        }}
                        onClick={handlePrevPage}
                        disabled={pageNumber <= 1}
                      >
                        Prev
                      </button>
                      <button
                        className="bg-white py-2 px-4 rounded"
                        style={{
                          color: "rgba(6, 11, 40, 0.94)",
                        }}
                        onClick={handleNextPage}
                        disabled={pageNumber >= totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </section>
      </div>
    </MainLayout>
  );
};

export default MetaPage;
