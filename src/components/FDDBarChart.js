import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function FDDBarChart({ selectedCountry }) {
    const [fddBarChartData, setFddBarChart] = useState([]);
    useEffect(() => {
        if (!selectedCountry) return;
        // const apiKey = '68DN78LZLDAAMDUNVGFTPZUH7';
        const url = `http://localhost:8000//weather/fetch-data/?location=${selectedCountry}`;

        axios.get(url).then(response => {
            const fdd_data = response.data.fdd;
            // const calculatedData = days.map(day => ({
            //     fdd: Math.max(32-((day.tempmax + day.tempmin) / 2)),
            // }));
            // console.log(calculatedData);
            setFddBarChart(fdd_data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [selectedCountry]);
    const chartData = {
        labels: fddBarChartData.map(day => day.day),
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