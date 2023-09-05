import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  ContentArea,
  WeatherMainContentWrapper,
  WeatherIconContentWrapper,
  WeatherIconFirstContentWrapper,
  WeatherIconSecondContentWrapper,
  WeatherDataWrapper,
  WeatherDataIconWrapper
} from '../Home/styled';
import WeatherForcast from './WeatherForcast';
import AverageAirTemp from './AverageAirTemp';
import SeeSurfaceTemp from './SeeSurfaceTemp';
import SolarRadiation from './SolarRadiation';
import Preciptation from './Preciptation';
import IconRain from './IconRain';
import IconCloud from './IconCloud';
import IconSunny from './IconSunny';
import IconWindy from './IconWindy';
import IconCloudy from './IconCloudy';
import IconSnow from './IconSnow';
import Search from '../Home/Search';
import { Context } from '../../Contexts/AppContext';
import { BASE_URL } from '../../config/config';

export const Content = () => {
  const { countryList, selectedCountry, setCountryList, setSelectedCountry } = useContext(Context);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [weatherData, setWeatherData] = useState(0);

  const handleCountrySelect = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryList = response.data.map((country) => country.name.common);
        setCountryList(countryList);
      })
      .catch((error) => {
        console.error('Error fetching country list:', error);
      });
  }, []);

  useEffect(() =>{
    if(selectedCountry){
        fetchWeatherData()
    }
  },[selectedCountry])

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather/fetch-data/?location=${selectedCountry}`
      );

      const weatherData = response.data;
      setWeatherData(weatherData);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };
  return (
    <>
    <Search handleCountrySelect={handleCountrySelect} />
    <ContentArea>
      <WeatherMainContentWrapper>
      <WeatherIconContentWrapper>
        <WeatherDataWrapper>
          <AverageAirTemp weatherData={weatherData} />
        </WeatherDataWrapper>
        <WeatherDataWrapper>
          <SeeSurfaceTemp weatherData={weatherData} />
        </WeatherDataWrapper>
        <WeatherDataWrapper>
          <Preciptation weatherData={weatherData} />
        </WeatherDataWrapper>
        <WeatherDataWrapper>
          <SolarRadiation weatherData={weatherData} />
        </WeatherDataWrapper>
      </WeatherIconContentWrapper>
      <WeatherIconFirstContentWrapper>
        <WeatherDataIconWrapper>
          <IconSnow />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconSnow />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconRain />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconWindy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloudy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloudy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconSunny />
        </WeatherDataIconWrapper>
      </WeatherIconFirstContentWrapper>
      <WeatherIconSecondContentWrapper>
      <WeatherDataIconWrapper>
          <IconCloud />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloud />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconWindy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloudy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloudy />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconSunny />
        </WeatherDataIconWrapper>
        <WeatherDataIconWrapper>
          <IconCloudy />
        </WeatherDataIconWrapper>
      </WeatherIconSecondContentWrapper>
      </WeatherMainContentWrapper>
    </ContentArea>
    </>
  )
}

export default Content
