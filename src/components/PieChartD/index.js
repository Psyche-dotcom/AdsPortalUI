"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChartD = ({ series, options }) => {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      width="100%"
      height="100%"
    />
  );
};

export default PieChartD;
