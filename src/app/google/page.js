import TopFilter from "@/components/TopFilter";
import React from "react";
import {
  PieOptionDashData,
  lineChartDataDashboard,
  lineChartGoogleDataDashboard,
  lineChartOptionsDashboard,
  seriesPie,
} from "@/Utils/Variable";
import MainLayout from "@/components/MainLayout";
import ResponsiveTable from "@/components/ResponsiveTable";

import dynamic from "next/dynamic";

const CusAreaLineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});
const PieChartD = dynamic(() => import("@/components/PieChartD"), {
  ssr: false,
});

const GooglePage = () => {
  return (
    <MainLayout>
      <div className="text-white w-11/12  mx-auto">
        <section className="flex flex-col gap-8">
          <div className="card-design" style={{ minHeight: "400px" }}>
            <h6 className="mb-4 text-3xl">
              Daily Hourly Ad Impressions Google
            </h6>
            <CusAreaLineChart
              chartData={lineChartGoogleDataDashboard}
              chartOptions={lineChartOptionsDashboard}
            />
          </div>
          <section className="flex items-center justify-between gap-4">
            <div
              className="card-design"
              style={{ maxHeight: "500px", maxWidth: "500px" }}
            >
              <h6 className="mb-4">
                Last Week Ads Impressions Overall {"Google Stats"}
              </h6>
              <PieChartD series={seriesPie} options={PieOptionDashData} />
            </div>
            <div
              className="card-design"
              style={{ maxHeight: "500px", maxWidth: "500px" }}
            >
              <h6 className="mb-4">
                Current Week Ads Impressions Overall{" Google Stats"}
              </h6>
              <PieChartD series={seriesPie} options={PieOptionDashData} />
            </div>
          </section>
          <section className="mb-10">
            <div className="card-design">
              <div className="flex flex-col gap-4">
                <h6 className="mb-4">
                  Live Feed Data For all {"Google Ads Stats"}
                </h6>
                <TopFilter />
                <ResponsiveTable />
                <div className="mt-4 self-end">
                  <button
                    className="bg-white py-2 px-4 rounded"
                    style={{
                      color: "rgba(6, 11, 40, 0.94)",
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </MainLayout>
  );
};

export default GooglePage;
