import React, {useState, useEffect} from "react";

const SeeSurfaceTemp = ({ weatherData }) =>{
    const [seeSurfaceTemp, setSeeSurfaceTemp] = useState(null);

    useEffect(() => {
      try {
     
        if (weatherData && weatherData.currentConditions) {
          const seeSurfaceTemp = weatherData.currentConditions.temp;
          setSeeSurfaceTemp(seeSurfaceTemp);
        } else {
            setSeeSurfaceTemp(0);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);
  
    useEffect(() => {
    }, [seeSurfaceTemp]);
    return(
        <div>
            <p>See surface Temprature</p>
            <h4>{seeSurfaceTemp} °C</h4>   
        </div>
    );
}

export default SeeSurfaceTemp;