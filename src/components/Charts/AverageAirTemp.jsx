import React, {useState, useEffect} from "react";

const AverageAirTemp = ({ weatherData }) =>{
    const [averageTemp, setAverageTemp] = useState(0);

    useEffect(() =>{
        try {
   
            if (weatherData && weatherData.currentConditions) {
            const temps = weatherData.days.map(day => day.temp);

            const totalTemp = temps.reduce((sum, temp) =>sum + temp, 0);

            const tempMean = totalTemp / temps.length;

            setAverageTemp(tempMean.toFixed(2));
            console.log(tempMean)
        } else {
            setAverageTemp(0);
          }
        }catch (error) {
            console.error('Error in useEffect:', error);
          }
    },[weatherData]);

    useEffect(() => {
    }, [averageTemp]);

    
    return(
        <div>
            <p>Average Aire Temprature</p>
            <h4>{averageTemp} °C</h4>  
        </div>
    );
}

export default AverageAirTemp;