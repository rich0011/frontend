import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import "chart.js";
import "chart.js/auto";

const FDDChart = ({ weatherData }) => {
  const [fddData, setFddData] = useState([]);
 
  useEffect(() => {
    try {
   
      if (weatherData && weatherData.fdd) {
        const fddvalues = weatherData.fdd;
        setFddData(fddvalues);
      } else {
        setFddData([]);
      }
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, [weatherData]);


  const chartData = {
    labels: fddData.map(day => day.day),
    datasets: [
      {
        label: "Freezing Degree Days",
        backgroundColor: "#009999",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        data: fddData.map(day => day.fdd),
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
        labels: fddData.map(day => day.day),
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size:6,
        }
      },
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

  return (
    <div style={{position: 'relative', height:'20vh', width:'20vw'}}>
        <p>Number of FDD in region</p>
        <Bar data={chartData} options={chartOptions} />
    </div>
    )
};

export default FDDChart;
