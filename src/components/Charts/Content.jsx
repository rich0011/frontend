import React from 'react'
import {
  ContentArea,
  InformationWrapper,
  ContentWrapper,
  ChartWrapper,
  AverageAirTempWrapper,
  PieChartWrapper,
  SubHeaderWrapper,
  FilterButton,
  SelectionOptionWrapper,
  SelectionSearchButtonWrapper,
  SearchButton
} from '../Home/styled'
import AverageAirTemp from './AverageAirTemp'
import WeatherStatistics from './WeatherStatistics'
import IceChart from './IceChart'
import FDDChart from './FDDChart'
// import CountryMap from './CountryMap'

export const Content = ({ countryList, selectedCountry }) => {
  
  return (
    <>
      <SubHeaderWrapper>
        <SelectionOptionWrapper>
        <h4 style={{ marginTop:'0.6rem' }}>Select region:  </h4>
        <select onChange={"hello"} value={selectedCountry} style={{ borderColor: '#e6e6f0', height: '3rem', width: '15%' }}>
          <option value="">Canada NWP</option>
          {/* {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))} */}
        </select>
        </SelectionOptionWrapper>
        <SelectionSearchButtonWrapper>
        <SearchButton color="" onClick={'hello'}>
          Search...
        </SearchButton>
        <FilterButton color="" onClick={'hello'}>
            Filter
        </FilterButton>
        </SelectionSearchButtonWrapper>
      </SubHeaderWrapper>
    <ContentArea>
      <InformationWrapper>
        <AverageAirTempWrapper>
          <AverageAirTemp />
        </AverageAirTempWrapper>
        <ChartWrapper>
           <FDDChart />
        </ChartWrapper>
       
        <PieChartWrapper>
            <IceChart />
        </PieChartWrapper>
      </InformationWrapper>
      <ContentWrapper>
        <WeatherStatistics />
      </ContentWrapper>
    </ContentArea>
    </>
  )
}

export default Content
