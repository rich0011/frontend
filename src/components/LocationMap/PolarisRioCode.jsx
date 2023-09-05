import React, {useState, useEffect} from "react";


const PolarisRioCode = ({ weatherData }) =>{
    const [polarCode, setPolarCode] = useState(null);

    useEffect(() => {
      try {
     
        if (weatherData && weatherData.currentConditions) {
          const polarisRioCode = weatherData.currentConditions.dew;

          setPolarCode(polarisRioCode);
        } else {
            setPolarCode(0);
        }
      } catch (error) {
        console.error('Error in useEffect:', error);
      }
    }, [weatherData]);
  
    useEffect(() => {
    }, [polarCode]);
  
    return(
        <div>
            <p>POLARIS RIO Code</p>
            <h3>{polarCode}</h3>
        </div>
    );
}

export default PolarisRioCode;