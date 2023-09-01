import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js';
import 'chart.js/auto';

const IceAlongRouteBarChart = () =>{
    const iceRouteData=[1, 0, 2, 1, 0.5,1.5]
    const chartData={
        label:['40,000', '60,000', '80,000', '100,000', '120,000'],
        datasets:[
            {
                label: 'Ice along route',
                backgroundColor: '#00cadc',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: iceRouteData
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
                type: 'category', 
                labels: ['40,000', '60,000', '80,000', '100,000', '120,000'],
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
    return <Bar data={chartData} options={chartOptions} />;
};

export default IceAlongRouteBarChart;