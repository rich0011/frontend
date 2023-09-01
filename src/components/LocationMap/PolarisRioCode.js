import React, {useState, useEffect} from "react";
import axios from "axios";

const apiKey = '68DN78LZLDAAMDUNVGFTPZUH7';
const location = 'London,UK';

const PolarisRioCode = () =>{
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
        <div style={{height:"130px", backgroundColor: 'white' }}>
        <div  style={{marginLeft: '40px' }}>
            <p>POLARIS RIO Code</p>
            <h3>15</h3>
        </div>
    </div>
    );
}

export default PolarisRioCode;