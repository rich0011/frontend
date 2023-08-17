import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js';
import 'chart.js/auto';

const WindSpeedBarChart = ({windData}) =>{
    const chartData={
        label:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label: 'Wind Speed',
                backgroundColor: '#8c68b1',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: windData
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
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

export default WindSpeedBarChart;