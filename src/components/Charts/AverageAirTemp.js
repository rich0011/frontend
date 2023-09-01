import React, {useState, useEffect} from "react";
import axios from "axios";

const apiKey = '68DN78LZLDAAMDUNVGFTPZUH7';
const location = 'London,UK';

const AverageAirTemp = () =>{
    const [averageTemp, setAverageTemp] = useState(null);

    useEffect(() =>{
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

        axios.get(apiUrl).then(response =>{
            const tempData = response.data;
            const temps = tempData.days.map(day => day.temp2m);

            const totalTemp = temps.reduce((sum, temp) =>sum + temp, 0);

            const tempMean = totalTemp / temps.length;

            setAverageTemp(tempMean.toFixed(2));
        })
        .catch(error =>{
            console.log('Error fetching weather data', error);
        });
    },[]);
    return(
        <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
            <p>Average Aire Temprature</p>
            <h4>5 °C</h4>
            
        </div>
    );
}

export default AverageAirTemp;