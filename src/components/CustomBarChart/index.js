"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardContent, Typography } from "@mui/material";

const data = {
  labels: ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM"],
  datasets: [
    {
      label: "Google Ads",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
      hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [65, 59, 80, 81, 56],
    },
    {
      label: "Meta Ads",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(54, 162, 235, 0.4)",
      hoverBorderColor: "rgba(54, 162, 235, 1)",
      data: [45, 69, 60, 71, 46],
    },
  ],
};

function CustomBarChart() {
  return (
    <Card className="bg-gray-900 text-white shadow-lg">
      <CardContent>
        <Typography variant="h6" className="mb-4">
          Hourly Ad Impressions
        </Typography>
        <BarChart
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </CardContent>
    </Card>
  );
}
export default CustomBarChart;
