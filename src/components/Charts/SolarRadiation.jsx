import React, {useState, useEffect} from "react";

const SolarRadiation = ({ weatherData }) =>{
    const [solar, setSolar] = useState(0);

    useEffect(() => {
      try {
     
        if (weatherData && weatherData.currentConditions) {

          const solarRadiation = weatherData.currentConditions.solarradiation;
    
          setSolar(solarRadiation);
        } else {
          setSolar(0);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);
  
    useEffect(() => {
    }, [solar]);
  

    return(
        <div>
            <p>Solar Radiation</p>
            <h4>{solar} cm</h4>
            
        </div>
    );
}
export default SolarRadiation;