import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  ContentArea,
  InformationWrapper,
  MainInformationWrapper,
  ChartWrapper,
  AverageAirTempWrapper,
  PieChartWrapper,
  SeeSurfaceTempWrapper,
  SubSmallContentWrapper,
  SubMeduimContentWrapper,
  SubBigContentWrapper,
  TempLineChartWrapper,
  HistBarChartWrapper
} from '../Home/styled'
import AverageAirTemp from './AverageAirTemp';
import SeeSurfaceTemp from './SeeSurfaceTemp';
import SolarRadiation from './SolarRadiation';
import TempLineChart from './TempLineChart';
import WindSpeedBarChart from './WindSpeedBarChart';
import TotalIceBreakdownBarChart from './TotalIceBreakdownBarChart';
import HistBarChart from './HistBarChart';
import IceChart from './IceChart';
import FDDChart from './FDDChart';
import { Context } from '../../Contexts/AppContext';
import { BASE_URL } from '../../config/config';
import Preciptation from './Preciptation';
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
        <AverageAirTempWrapper>
          <AverageAirTemp weatherData={weatherData} />
        </AverageAirTempWrapper>
        <ChartWrapper>
           <FDDChart weatherData={weatherData} />
        </ChartWrapper>
        <PieChartWrapper>
            <IceChart />
        </PieChartWrapper>
      </InformationWrapper>
      <MainInformationWrapper>
        <SubSmallContentWrapper>
          <SeeSurfaceTempWrapper>
            <SeeSurfaceTemp weatherData={weatherData} />
          </SeeSurfaceTempWrapper>
          <SeeSurfaceTempWrapper>
            <Preciptation weatherData={weatherData} />
          </SeeSurfaceTempWrapper>
          <SeeSurfaceTempWrapper>
            <SolarRadiation weatherData={weatherData} />
          </SeeSurfaceTempWrapper>
        </SubSmallContentWrapper>
        <SubMeduimContentWrapper>
          <TempLineChartWrapper>
            <TempLineChart weatherData={weatherData} />
          </TempLineChartWrapper>
          <TempLineChartWrapper>
            <WindSpeedBarChart weatherData={weatherData} />
          </TempLineChartWrapper>
        </SubMeduimContentWrapper>
        <SubBigContentWrapper>
          <HistBarChartWrapper>
            <HistBarChart />
          </HistBarChartWrapper>
          <HistBarChartWrapper>
            <TotalIceBreakdownBarChart />
          </HistBarChartWrapper>
        </SubBigContentWrapper>
      </MainInformationWrapper>
    </ContentArea>
    </>
  )
}

export default Content
