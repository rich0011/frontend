import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js';
import 'chart.js/auto';

const HistBarChart = () =>{
    const histData1 = [10, 20, 30, 25, 15, 12, 18,23,13,33,21,22];
    const histData2 =[15, 18, 10, 5, 8, 12, 18,23,13,33,21,22];
    const histData3 = [5, 8, 10, 15, 18, 20, 28,32,31,13,12,22];
    const histData4 = [25, 28, 1, 15,16, 11, 8,3,23,13,21,22];
    const chartData={
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label: 'Historical data1',
                backgroundColor: '#42929d',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: histData1
            },
            {
                label: 'Historical data2',
                backgroundColor: '#6d5f9e',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: histData2
            },
            {
                label: 'Historical data3',
                backgroundColor: '#aaaaaa',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: histData3
            },
            {
                label: 'Historical data4',
                backgroundColor: '#3bb3c2',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: histData4
            },
        ],
    };
    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
        legend: {
          display: false, 
          position: "right",
          align: 'center',
          labels: {
            fontSize: 4, 
            padding: 10, 
            boxWidth: 10
          },
        },
      },
        scales:{
            x: {
                stacked: true,
              },
            y:[
                {
                    ticks:{
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return <Bar data={chartData} options={chartOptions} />;
};

export default HistBarChart;