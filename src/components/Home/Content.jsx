import React, { Component } from 'react'; // Import Component from 'react'
import axios from 'axios'; // Import axios
import L from 'leaflet';
import { BASE_URL } from '../../config/config'; 
import {
  ContentArea,
  InformationWrapper,
  MapWrapper,
  RegionInformationWrapper,
  ChartWrapper,
  PieChartWrapper,
  SubHeaderWrapper,
  FilterButton,
  SelectionOptionWrapper,
  SelectionSearchButtonWrapper,
  SearchButton
} from './styled';
import FDDChart from './FDDChart';
import IceChart from './IceChart';
import CountryMap from './CountryMap';

class Content extends Component { // Change to class component and use 'Component' from 'react'
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedCountry: 'United States',
      map: null,
      marker: null,
      riskScore: null,
      countryList: [],
    };
    // Bind fetchRiskScoreData to the current instance
    this.fetchRiskScoreData = this.fetchRiskScoreData.bind(this);
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryList = response.data.map(country => country.name.common);
        this.setState({ countryList });
      })
      .catch(error => {
        console.error('Error fetching country list:', error);
      });
  }
  
  handleCountrySelect = (event) => {
    const selectedCountry = event.target.value;
    this.setState({ selectedCountry });
  };
  
  async fetchRiskScoreData() {
    const { selectedCountry, map } = this.state;

    if (!selectedCountry) return;

    try {
      const response = await axios.get(`${BASE_URL}/weather/fetch-data/?location=${selectedCountry}`);
      
      const weatherData = response.data;

      // Calculate risk scores based on your criteria
      const temperatureScore = weatherData.currentConditions.temp > 30 ? 15 : 5;
      const precipitationScore = weatherData.currentConditions.precip > 10 ? 20 : 0;
      const windSpeedScore = weatherData.currentConditions.windSpeed > 20 ? 15 : 10;

      // Calculate overall risk score
      const overallScore = temperatureScore + precipitationScore + windSpeedScore;

      // Update the state with the calculated values
      this.setState({
        riskScore: overallScore,
        latitude: weatherData.latitude,
        longitude: weatherData.longitude,
        address: weatherData.address,
      });

      // Place a marker on the map
      if (map) {
        const { latitude, longitude } = weatherData;
        if (this.state.marker) {
          map.removeLayer(this.state.marker);
        }
        const marker = L.marker([latitude, longitude]).addTo(map);
        map.setView([latitude, longitude], 6);
        this.setState({ marker });
      }
    } catch(error) {
      console.error('Error fetching location data:', error);
    }
  }

  searchCountry = async () => { 
    await this.fetchRiskScoreData();
  }

  render() {
    const { selectedCountry, countryList, riskScore } = this.state;
    return (
      <>
      <SubHeaderWrapper>
        <SelectionOptionWrapper>
        <h4 style={{ marginTop:'0.6rem' }}>Select region:  </h4>
        <select onChange={this.handleCountrySelect} value={selectedCountry} style={{ borderColor: '#e6e6f0', height: '3rem', width: '15%' }}>
          <option value="">Canada NWP</option>
          {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
        </SelectionOptionWrapper>
        <SelectionSearchButtonWrapper>
        <SearchButton color="" onClick={this.searchCountry}>
          Search...
        </SearchButton>
        <FilterButton color="" onClick={this.searchCountry}>
            Filter
        </FilterButton>
        </SelectionSearchButtonWrapper>
      </SubHeaderWrapper>
      
      <ContentArea>

        <InformationWrapper>
          <RegionInformationWrapper>
            <h5>Regional Risk Score</h5>
            <p>{riskScore}</p>
          </RegionInformationWrapper>
          <ChartWrapper>
            <FDDChart />
          </ChartWrapper>
          <PieChartWrapper>
            <IceChart />
          </PieChartWrapper>
        </InformationWrapper>
        <MapWrapper>
          <CountryMap selectedCountry={this.state.selectedCountry} />
        </MapWrapper>
      </ContentArea>
      </>
    );
  }
}

export default Content;
