"use client";
export const lineChartDataDashboard = [
  {
    name: "Google Ads",
    data: Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 100 + 50)
    ),
  },
  {
    name: "Meta Ads",
    data: Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100 + 50)
    ),
  },
];
export const lineChartGoogleDataDashboard = [
  {
    name: "Google Ads",
    data: Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100 + 50)
    ),
  },
];
export const lineChartMetaDataDashboard = [
  {
    name: "Meta Ads",
    data: Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 100 + 50)
    ),
  },
];
export const seriesPie = [2444, 1555];
export const seriesMetaPie = [2444];
export const PieOptionDashData = {
  chart: {
    width: 400,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  labels: ["Google Ads", "Meta Ads"],
  dataLabels: {
    color: "#ffffff",
    dropShadow: {
      blur: 3,
      opacity: 0.8,
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: ["verticalLines", "squares"],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const PieOptionMetaDashData = {
  chart: {
    width: 400,
    type: "donut",
    dropShadow: {
      enabled: true,
      color: "#111",
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  labels: ["Meta Ads"],
  dataLabels: {
    color: "#ffffff",
    dropShadow: {
      blur: 3,
      opacity: 0.8,
    },
  },
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: ["verticalLines", "squares"],
    },
  },
  states: {
    hover: {
      filter: "none",
    },
  },
  theme: {
    palette: "palette2",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export const lineChartOptionsDashboard = {
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
    type: "int",
    categories: Array.from({ length: 24 }, (_, i) => `${i + 1}:00`),
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
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#2CD9FF", "#582CFF"],
  },
  colors: ["#2CD9FF", "#582CFF"],
};
export const navData = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Meta Ads", link: "/" },
  { id: 3, title: "Google Ads", link: "/" },
];
