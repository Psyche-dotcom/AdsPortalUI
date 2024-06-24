"use client";
import { PieOptionDashData } from "@/Utils/Variable";
import MainLayout from "@/components/MainLayout";
import ResponsiveTable from "@/components/ResponsiveTable";
import { postData } from "@/util/ApiService";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CusAreaLineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});
const PieChartD = dynamic(() => import("@/components/PieChartD"), {
  ssr: false,
});

export default function Home() {
  const [lineChartDataDashboard, setLineChartDataDashboard] = useState([]);
  const [lineChartOptionsDashboard, setLineChartOptionsDashboard] = useState(
    {}
  );
  const [seriesPieData, setSeriesPieData] = useState([]);
  const [seriesPieDataClick, setSeriesPieDataClick] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const apiCallImpression = async (loginToken) => {
    try {
      const now = new Date();
      const isoDate = now.toISOString();
      const post = { date: isoDate };
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

  const apiCallReach = async (loginToken) => {
    try {
      const now = new Date();
      const isoDate = now.toISOString();
      const post = { date: isoDate };
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

  const apiCallClick = async (loginToken) => {
    try {
      const now = new Date();
      const isoDate = now.toISOString();
      const post = { date: isoDate };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await postData(
        `${baseUrl}api/ads/stats/meta/stats/daily/date?type=2`,
        post,
        "Bearer " + loginToken
      );
      if (response.statusCode === 200) {
        console.log(response);
        return response.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const apiCallTableData = async (loginToken, pageNumber) => {
    try {
      const now = new Date();
      const isoDate = now.toISOString();
      const post = { date: isoDate };
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

  useEffect(() => {
    const fetchData = async () => {
      const loginToken = localStorage.getItem("token");

      if (!loginToken) {
        router.push("/register");
      } else {
        const impressionResult = await apiCallImpression(loginToken);
        let metaImpressionData = [];
        let metaImpressionHours = [];
        let TotalReach = 0;
        let totalClick = 0;

        impressionResult.forEach((element) => {
          metaImpressionData.push(element.totalImpressions);
          metaImpressionHours.push(element.hour + ":00");
        });

        const reachResult = await apiCallReach(loginToken);
        reachResult.forEach((element) => {
          TotalReach += element.totalReach;
        });

        const clickResult = await apiCallClick(loginToken);
        clickResult.forEach((element) => {
          totalClick += element.totalClicks;
        });

        setSeriesPieDataClick([totalClick, 2342]);
        setSeriesPieData([TotalReach, 1555]);
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

        setLineChartDataDashboard([
          {
            name: "Google Ads",
            data: Array.from({ length: impressionResult.length }, () =>
              Math.floor(Math.random() * 3000 + 50)
            ),
          },
          {
            name: "Meta Ads",
            data: metaImpressionData,
          },
        ]);

        const tableResult = await apiCallTableData(loginToken, pageNumber);
        setTableData(tableResult);
      }
    };

    fetchData();
  }, [router, pageNumber]);

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
          <div className="card-design" style={{ minHeight: "400px" }}>
            <h6 className="mb-4 text-3xl">
              Daily Hourly Ad Impressions{"(Meta/Google)"}
            </h6>
            <CusAreaLineChart
              chartData={lineChartDataDashboard}
              chartOptions={lineChartOptionsDashboard}
            />
          </div>
          <section className="flex items-center justify-between gap-4">
            <div
              className="card-design"
              style={{ maxHeight: "500px", maxWidth: "500px" }}
            >
              <h6 className="mb-4">
                Current Daily Ads Click Overall{"(Meta/Google) Stats"}
              </h6>
              <PieChartD
                series={seriesPieDataClick}
                options={PieOptionDashData}
              />
            </div>
            <div
              className="card-design"
              style={{ maxHeight: "500px", maxWidth: "500px" }}
            >
              <h6 className="mb-4">
                Current Daily Ads Reach Overall{"(Meta/Google) Stats"}
              </h6>
              <PieChartD series={seriesPieData} options={PieOptionDashData} />
            </div>
          </section>
          <section className="mb-10">
            <div className="card-design">
              <div className="flex flex-col">
                <h6 className="mb-4">
                  Live Feed Data For all Ads{"(Meta/Google) Stats"}
                </h6>
                <ResponsiveTable data={tableData} />
                <div className="mt-4 self-end flex gap-4">
                  <button
                    className="bg-white py-2 px-4 rounded"
                    style={{
                      color: "rgba(6, 11, 40, 0.94)",
                    }}
                    onClick={handleNextPage}
                    disabled={pageNumber >= totalPages}
                  >
                    View More
                  </button>
                  <button
                    className="bg-white py-2 px-4 rounded"
                    style={{
                      color: "rgba(6, 11, 40, 0.94)",
                    }}
                    onClick={handlePrevPage}
                    disabled={pageNumber <= 1}
                  >
                    View Previous
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </MainLayout>
  );
}
