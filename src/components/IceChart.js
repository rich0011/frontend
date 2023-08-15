import React, {useEffect, useState} from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const IceChart = () => {
    const [iceData, setIceData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000//weather/fetch-data/?location=Ethiopia').then(Response =>{
            const extractedData = processData(Response.data);
            setIceData(extractedData);
        })
        .catch(error =>{
            console.error('Error fetching data:', error);
        });
    }, []);
    const processData = rawData => {
        const dayData = rawData.days[0];
      
        const transformedData = [
          { label: '9/10 30.3%', value: dayData.solarenergy },
          { label: 'Ice Free 13.1%', value: dayData.cloudcover },
          { label: '3/10 28.6', value: dayData.humidity },
          { label: '6/10 28%', value: dayData.dew },
          // Add more categories as needed
        ];
      
        return transformedData;
      };
      const chartData = {
        labels: iceData.map(item => item.label),
        datasets:[{
            data: iceData.map(item => item.value),
            backgroundColor: ['#f2e6ff', '#5e407d', '#8c68b1', '#e6ccff'],
            borderWidth: 0,
        }],
      };
      return(
        <Doughnut data={chartData} />
      );
      
};
 export default IceChart;