import React, {useState, useEffect} from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

function TotalIceDoughnutChart(){
    const [totalIce, setTotalIce] = useState(0);

    useEffect(() => {
        const apiKey = '68DN78LZLDAAMDUNVGFTPZUH7';
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${apiKey}`;

        axios.get(apiUrl).then(response => {
            const dailyWeather = response.data.days;
            let totalIceSum = 0;

            dailyWeather.forEach(day => {
                const precipitationType = day.precipType;
                const precipitationAmount = day.precip;

                if (precipitationType === 'snow'){
                    const snowWaterEquivalent = precipitationAmount * 0.1;
                    totalIceSum += snowWaterEquivalent;
                }
                else if (precipitationType ==='sleet'){
                    totalIceSum += precipitationAmount;
                }
            });
            setTotalIce(totalIceSum);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },[]);

    const chartData = {
        labels: ['9/10', 'Ice free', '3/9', '6/10'],
        datasets : [
            {
                data: [totalIce],
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

    return (
        <Doughnut data={chartData} options={chartOptions} />
    );

}

export default TotalIceDoughnutChart;