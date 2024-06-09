import {
  PieOptionDashData,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
  seriesPie,
} from "@/Utils/Variable";
import ResponsiveTable from "@/components/ResponsiveTable";

import dynamic from "next/dynamic";
import Head from "next/head";

const CusAreaLineChart = dynamic(() => import("@/components/LineChart"), {
  ssr: false,
});
const PieChartD = dynamic(() => import("@/components/PieChartD"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="text-white w-11/12  mx-auto">
      <Head>
        <title>Ad Impressions Dashboard</title>
      </Head>
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
              Last Week Ads Impressions Overall{"(Meta/Google) Stats"}
            </h6>
            <PieChartD series={seriesPie} options={PieOptionDashData} />
          </div>
          <div
            className="card-design"
            style={{ maxHeight: "500px", maxWidth: "500px" }}
          >
            <h6 className="mb-4">
              Current Week Ads Impressions Overall{"(Meta/Google) Stats"}
            </h6>
            <PieChartD series={seriesPie} options={PieOptionDashData} />
          </div>
        </section>
        <section className="mb-10">
          <div className="card-design">
            <div className="flex flex-col">
              <h6 className="mb-4">
                LiveFeed Data For all Ads{"(Meta/Google) Stats"}
              </h6>
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
  );
}
