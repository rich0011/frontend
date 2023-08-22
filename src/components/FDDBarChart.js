import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function FDDBarChart() {
    const [fddBarChartData, setFddBarChart] = useState([]);
    useEffect(() => {
        const apiKey = '68DN78LZLDAAMDUNVGFTPZUH7';
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/last30days?key=${apiKey}&include=days&elements=tempmax,tempmin`;

        axios.get(url).then(response => {
            const days = response.data.days;
            const calculatedData = days.map(day => ({
                fdd: Math.max(32-((day.tempmax + day.tempmin) / 2)),
            }));
            console.log(calculatedData);
            setFddBarChart(calculatedData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label: 'Freezing Degree Days',
                data: fddBarChartData.map(day => day.fdd),
                backgroundColor: '#009999',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
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
                        beginAtZero: false,
                    },
                },
            ],
        },
    };
    return (
        <div className="weatherChart">
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}

export default FDDBarChart;