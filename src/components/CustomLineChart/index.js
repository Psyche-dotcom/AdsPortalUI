"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BorderColor } from "@mui/icons-material";

const fetchAdImpressions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        googleAds: Array.from({ length: 24 }, () =>
          Math.floor(Math.random() * 100 + 50)
        ),
        metaAds: Array.from({ length: 24 }, () =>
          Math.floor(Math.random() * 100 + 50)
        ),
        labels: Array.from({ length: 24 }, (_, i) => `${i + 1}:00`),
      });
    }, 1000);
  });
};

export default function CustomLineChart() {
  const [data, setData] = useState({
    googleAds: [],
    metaAds: [],
    labels: [],
  });

  useEffect(() => {
    fetchAdImpressions().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="card-design">
      <Typography variant="h6" className="mb-4">
        Hourly Ad Impressions
      </Typography>
      <LineChart
        width={500}
        height={300}
        series={[
          { data: data.googleAds, label: "Google Ads" },
          { data: data.metaAds, label: "Meta Ads" },
        ]}
        xAxis={[{ scaleType: "point", data: data.labels }]}
      />
    </div>
  );
}
