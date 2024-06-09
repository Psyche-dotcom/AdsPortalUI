"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
//import ReactApexChart from "react-apexcharts";

const CusAreaLineChart = ({ chartData, chartOptions }) => {
  return (
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default CusAreaLineChart;
