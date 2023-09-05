import React, { useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import 'chart.js';
import 'chart.js/auto';

const WindSpeedBarChart = ({ weatherData }) =>{
    const [windData, setWindData] = useState([]);
 
    useEffect(() => {
      try {
     
        if (weatherData && weatherData.days) {
          const windvalues = weatherData.days;
          setWindData(windvalues);
        } else {
            setWindData([]);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);

    const chartData={
        label:windData.map(day => day.datetime),
        datasets:[
            {
                label: 'Wind Speed',
                backgroundColor: '#8c68b1',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: windData.map(day => day.windspeed)
            },
        ],
    };
    const chartOptions ={
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
        legend: {
          display: false, 
        },
      },
        scales:{
            x: {
                labels: windData.map(day => day.datetime),
                ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                    font: {
                      size:6,
                  }
                },
              },
            y:[
                {
                    ticks:{
                        beginAtZero:true,
                    },
                },
            ],
        },
    };
    return (
        <div style={{position: 'relative', height:'20vh', width:'29vw'}}>
            <p>Wind Speed</p>
            <Bar data={chartData} options={chartOptions} />
        </div>
    )
};

export default WindSpeedBarChart;