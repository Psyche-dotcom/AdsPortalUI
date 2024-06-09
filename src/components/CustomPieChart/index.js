"use client";
import { PieChart } from "@mui/x-charts/PieChart";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { label: "Google Ads", value: 400 },
  { label: "Meta Ads", value: 300 },
];

function CustomPieChart() {
  return (
    <Card className="bg-gray-900 text-white shadow-lg rounded-3xl">
      <CardContent>
        <Typography variant="h6" className="mb-4">
          Ad Impressions Distribution
        </Typography>
        <PieChart
          series={[
            {
              paddingAngle: 5,
              innerRadius: 60,
              outerRadius: 80,
              data,
            },
          ]}
          width={400}
          height={400}
          slotProps={{
            legend: true,
          }}
        />
      </CardContent>
    </Card>
  );
}
export default CustomPieChart;
