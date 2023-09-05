import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import L from 'leaflet';
import { BASE_URL } from '../../config/config';
import {
  ContentArea,
  InformationWrapper,
  MapWrapper,
  RegionInformationWrapper,
  ChartWrapper,
  PieChartWrapper,
} from './styled';
import FDDChart from './FDDChart';
import IceChart from './IceChart';
import CountryMap from './CountryMap';
import Search from './Search';
import RiskScore from './RiskScore';
import { Context } from '../../Contexts/AppContext';

const Content = () => {
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
      // Place a marker on the map
      if (map) {
        const { latitude, longitude } = weatherData;
        if (marker) {
          map.removeLayer(marker);
        }
        const newMarker = L.marker([latitude, longitude]).addTo(map);
        map.setView([latitude, longitude], 6);
        setMarker(newMarker);
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  return (
    <>
      <Search handleCountrySelect={handleCountrySelect} />
      <ContentArea>
        <InformationWrapper>
          <RegionInformationWrapper>
            <RiskScore weatherData={weatherData} />
          </RegionInformationWrapper>
          <ChartWrapper>
            <FDDChart weatherData={weatherData} />
          </ChartWrapper>
          <PieChartWrapper>
            <IceChart />
          </PieChartWrapper>
        </InformationWrapper>
        <MapWrapper>
          <CountryMap selectedCountry={selectedCountry} />
        </MapWrapper>
      </ContentArea>
    </>
  );
};

export default Content;
