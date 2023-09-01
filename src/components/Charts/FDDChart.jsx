import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js";
import "chart.js/auto";

const FDDChart = () => {
  const fddData = [10, 20, 30, 25, 15, 12, 18,23,13,33,21,22];
  const chartData = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
      {
        label: "Freezing Degree Days",
        backgroundColor: "#009999",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        data: fddData,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
      },
      y: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default FDDChart;
