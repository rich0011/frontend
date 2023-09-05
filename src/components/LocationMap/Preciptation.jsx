import React, {useState, useEffect} from "react";

const Preciptation = ({ weatherData }) =>{
    const [precip, setPrecip] = useState(0);

    useEffect(() => {
      try {
     
        if (weatherData && weatherData.currentConditions) {

          const precipitationScore = weatherData.currentConditions.precip;
    
          setPrecip(precipitationScore);
        } else {
          setPrecip(0);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);
  
    useEffect(() => {
    }, [precip]);
  

    return(
        <div>
            <p>Preciptation</p>
            <h3>{precip} cm</h3>
        </div> 
    );
}

export default Preciptation;