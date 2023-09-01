import React, {useEffect, useRef} from "react";
import {Chart} from 'chart.js';

const TempLineChart = () => {
    const chartRef = useRef();
    useEffect(() => {
        const tempChartRef = chartRef.current.getContext('2d');
        new Chart(tempChartRef, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets:[
                    {
                        label: 'Temerature data',
                        data: [10, 20, 15, 25, 30,3,9,13,18],
                        borderColor: '#009999',
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                legend: {
                  display: false, 
                },
              },
            },
        });
    },[]);
    return <canvas ref={chartRef} />;
};

export default TempLineChart;