import React from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js';
import "chart.js/auto"

const FDDChart = ({fddData}) =>{
    const chartData= {
        label:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[
        {
            label: 'Freezing Degree Days',
            backgroundColor: '#009999',
            // borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            // hoverBorderColor: 'rgba(75,192,192,1)',
            data: fddData
        },
    ],
};
const chartOptions = {
    maintainAspectRatio: false,
    scales:{
        x: {
            type: 'category', 
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

export default FDDChart;