import React, {useState, useEffect} from "react";


const Wind = ({ weatherData }) =>{
    const [wind, setWind] = useState(null);

    useEffect(() => {
      try {
     
        if (weatherData && weatherData.currentConditions) {
          const windData = weatherData.currentConditions.wind;

          setWind(windData);
        } else {
            setWind(0);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);
  
    useEffect(() => {
    }, [wind]);
    return(
        <div>
            <p>Wind</p>
            <h3>NE {wind} konts</h3>
        </div>
    );
}

export default Wind;