import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js';
import 'chart.js/auto';

const TotalIceBreakdownBarChart = () =>{
    const iceBreakdownData1 = [10, 20, 30, 25, 15, 12, 18,23,13,33,21,22];
    const iceBreakdownData2 =[15, 18, 10, 5, 8, 12, 18,23,13,33,21,22];
    const iceBreakdownData3 = [5, 8, 10, 15, 18, 20, 28,32,31,13,12,22];
    const iceBreakdownData4 = [25, 28, 1, 15,16, 11, 8,3,23,13,21,22];
    const monthData={
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label: 'Total ice breakdown data',
                backgroundColor: '#42929d',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: iceBreakdownData1
            },
            {
                label: 'Total ice breakdown data',
                backgroundColor: '#6d5f9e',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: iceBreakdownData2
            },
            {
                label: 'Total ice breakdown data',
                backgroundColor: '#aaaaaa',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: iceBreakdownData3
            },
            {
                label: 'Total ice breakdown data',
                backgroundColor: '#3bb3c2',
                borderWidth: 1,
                hoverBackgroundColor: '#e6ccff',
                data: iceBreakdownData4
            },
        ],
    };
    const chartOptions = {
        maintainAspectRatio:false,
        responsive: true,
        plugins: {
        legend: {
          display: false, 
        },
      },
        scales:{
            x:{
                stacked: true,
            },
            y:[
                {
                    ticks:{
                        beginsAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div style={{position: 'relative', height:'20vh', width:'29vw'}}>
            <p>Total Ice breakdown</p>
            <Bar data={monthData} options={chartOptions} />
        </div>
    )
};

export default TotalIceBreakdownBarChart;