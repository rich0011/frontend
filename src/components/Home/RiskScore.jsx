import React, { useState, useEffect } from 'react';
import chart from '../../assets/WeatherIcon/icon-chart2.png';

const RiskScore = ({ weatherData }) => {
  const [riskScore, setRiskScore] = useState(null);

  useEffect(() => {
    try {
   
      if (weatherData && weatherData.currentConditions) {
        const temperatureScore = weatherData.currentConditions.temp > 30 ? 15 : 5;
        const precipitationScore = weatherData.currentConditions.precip > 10 ? 20 : 0;
        const windSpeedScore = weatherData.currentConditions.windSpeed > 20 ? 15 : 10;

        const overallScore = temperatureScore + precipitationScore + windSpeedScore;
        setRiskScore(overallScore);
      } else {
        setRiskScore(0);
      }
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, [weatherData]);

  useEffect(() => {
  }, [riskScore]);

  return (
    <>
    <img src={chart} alt="POLARCTIC" style={{width: '10%', height: '40%', marginLeft: "5%"}}/> 
      <h5>Regional Risk Score</h5>
      <p>{riskScore}</p>
    </>
  );
};

export default RiskScore;
