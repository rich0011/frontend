import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  ContentArea,
  InformationWrapper,
  MapWrapper,
  PolarisRioCodeWrapper,
  // WindWrapper,
  RoutePreciptationWrapper,
  // IceAlongRouteChartWrapper
} from '../Home/styled';
import { Context } from '../../Contexts/AppContext';
import { BASE_URL } from '../../config/config';
import IceAlongRouteBarChart from './IceAlongRouteBarChart';
import PolarisRioCode from './PolarisRioCode';
import Preciptation from './Preciptation';
import Wind from './Wind';
import CountryMap from '../Home/CountryMap'
import Search from '../Home/Search';

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
      <InformationWrapper>
        <PolarisRioCodeWrapper>
          <PolarisRioCode weatherData={weatherData} />
        </PolarisRioCodeWrapper>
        <PolarisRioCodeWrapper>
          <Wind weatherData={weatherData} />
        </PolarisRioCodeWrapper>
        <PolarisRioCodeWrapper>
          <Preciptation weatherData={weatherData} />
        </PolarisRioCodeWrapper>
        <RoutePreciptationWrapper>
          <IceAlongRouteBarChart weatherData={weatherData} />
        </RoutePreciptationWrapper>
      </InformationWrapper>
      <MapWrapper>
        <CountryMap selectedCountry={selectedCountry}/>
      </MapWrapper>
    </ContentArea>
    </>
  )
}

export default Content
