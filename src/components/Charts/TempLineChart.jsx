import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TempLineChart = ({ weatherData }) => {
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    try {
   
      if (weatherData && weatherData.days) {
        const tempvalues = weatherData.days;
        setTempData(tempvalues);
      } else {
        setTempData([]);
      }
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, [weatherData]);

  // const temp_fahrenheit= tempData.map(day => day.temp);
  // const temp_celsius= (temp_fahrenheit - 32) * 5/9;
  
  const data = {
    labels: tempData.map(day => day.datetime),
    datasets: [
      {
        label: 'Temperature',
        data: tempData.map(day => day.temp),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        labels: tempData.map(day => day.datetime),
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size:6,
        }
      },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '20vh', width: '29vw' }}>
      <p>Temperature</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default TempLineChart;
