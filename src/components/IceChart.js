import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const IceChart = () => {
  const [iceData, setIceData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000//weather/fetch-data/?location=Ethiopia")
      .then((response) => {
        const extractedData = processData(response.data);
        setIceData(extractedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const processData = (rawData) => {
    const dayData = rawData.days[0];

    const transformedData = [
      { label: "9/10", value: dayData.solarenergy },
      { label: "Ice free", value: dayData.cloudcover },
      { label: "3/9", value: dayData.humidity },
      { label: "6/10", value: dayData.dew },
    ];

    return transformedData;
  };

  const chartData = {
    labels: iceData.map((item) => `${item.label}: ${item.value.toFixed(1)}%`),
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
        fontSize: 4, 
        padding: 10, 
        boxWidth: 10
      },
    },
  },
  };

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default IceChart;
