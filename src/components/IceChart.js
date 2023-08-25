import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const IceChart = ({ selectedCountry }) => {
  const [iceData, setIceData] = useState([]);

  useEffect(() => {
    // Update the API endpoint based on the selectedCountry prop
    const apiUrl = `http://localhost:8000/weather/fetch-data/?location=${selectedCountry}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const extractedData = processData(response.data);
        setIceData(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCountry]); // Run this effect whenever selectedCountry changes

  const processData = (rawData) => {
    const dayData = rawData.days[0];

    const transformedData = [
      { label: "Solar Energy", value: dayData.solarenergy },
      { label: "Cloud Cover", value: dayData.cloudcover },
      { label: "Humidity", value: dayData.humidity },
      { label: "Dew", value: dayData.dew },
    ];

    return transformedData;
  };

  const chartData = {
    labels: iceData.map((item) => item.label),
    datasets: [
      {
        data: iceData.map((item) => item.value),
        backgroundColor: ["#f2e6ff", "#5e407d", "#8c68b1", "#e6ccff"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: 'center',
        labels: {
          fontSize: 12,
          padding: 10,
          boxWidth: 10
        },
      },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default IceChart;
