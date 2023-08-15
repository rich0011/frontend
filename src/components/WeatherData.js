import React, { Component } from 'react';
import L from 'leaflet';
// import { MapContainer, GeoJSON } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Container, Row, Col,Button } from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import 'bootstrap/dist/css/bootstrap.min.css';
import FDDChart from './FDDChart';
import IceChart from './IceChart';
import CountryMap from './CountryMap';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      userLocation: '',
      suggestions: [],
      map: null,
      marker: null,
      riskScore: null,
    };
  }
  
  handleSearchChange = (event, { newValue }) => {
    this.setState({ searchQuery: newValue });
  };

  handleLocationChange = (event, { newValue }) => {
    this.setState({ userLocation: newValue });
  };
  
  handleDatetimeChange = (event) => {
    this.setState({ userDatetime: event.target.value });
  };
  
  fetchWeatherData = (location) => { 
    return axios.get(`http://localhost:8000//weather/fetch-data/?location=${location}`)
      .then((response) => {
        const weatherData = response.data;

        const temperature = weatherData.currentConditions.temp;
        const precipitation = weatherData.currentConditions.precip;
        const windSpeed = weatherData.currentConditions.windSpeed;

        // Calculate risk scores based on your criteria
        const temperatureScore = temperature > 30 ? 10 : 0;
        const precipitationScore = precipitation > 10 ? 20 : 0;
        const windSpeedScore = windSpeed > 20 ? 15 : 0;

        // Calculate overall risk score
        const overallScore = temperatureScore + precipitationScore + windSpeedScore;

        // Update the state with the calculated values
        this.setState({
          riskScore: overallScore,
          latitude: weatherData.latitude,
          longitude: weatherData.longitude,
          address: weatherData.address,
        });
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  };

  fetchSuggestions = (value) => {
    fetch(`https://nominatim.openstreetmap.org/search?country=${value}&format=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((data) => {
        // Process data
      })
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        alert('An error occurred while fetching data. Please check your network connection.');
      });
  };
  

  searchCountry = () => {
    const { userLocation, map, marker } = this.state;
    if (!userLocation) return;
  
    fetch(`https://nominatim.openstreetmap.org/search?country=${userLocation}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const [result] = data;
          const { lat, lon } = result;
          const coords = [parseFloat(lat), parseFloat(lon)];
  
          if (marker) {
            map.removeLayer(marker);
          }
  
          const newMarker = L.marker(coords).addTo(map);
          map.setView(coords, 6);
  
          this.setState({ marker: newMarker });

          this.fetchWeatherData(userLocation)
            .then((weatherData) => {

              const temperature = weatherData.temp;
  
              if (temperature > 25) {
                map.getContainer().style.backgroundColor = 'red';
              } else {
                map.getContainer().style.backgroundColor = 'blue';
              }
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        } else {
          alert('Country not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('An error occurred while searching for the country.');
      });
  };
  
  

  onSuggestionsFetchRequested = ({ value }) => {
    this.fetchSuggestions(value);
  };

  
  onSuggestionSelected = (event, { suggestion }) => {
    this.setState({ userLocation: suggestion });
  };
  

  render() {

    const { userLocation, suggestions,  riskScore} = this.state;

    const fddData = [15, 20, 10, 5, 8, 12, 18,23,13,33,21,22];

    return (
      <Container style={{width: '100%', height: '100vh', backgroundColor: '#ccc' }}>
        <Row>
          <Col>
            <div style={{border: '1px solid #ccc', backgroundColor: 'white' }}>Hello Jan</div>
          </Col>
        </Row>
      <Row>
        <Col>
        <div className="d-flex align-items-center" style={{ width: '100%', backgroundColor: 'white'}}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => <div>{suggestion}</div>}
          inputProps={{
            value: userLocation,
            onChange: this.handleLocationChange,
          }}
          onSuggestionsClearRequested={() => {
            // Clear the suggestions array in the state when suggestions need to be cleared
            this.setState({ suggestions: [] });
          }}
        />


        <Button color="info" onClick={this.searchCountry}>
          Search
        </Button>
        </div>
        
        </Col>
      </Row>
      <Row className="justify-content">
        <Col xs="1">
          <div style={{ height: '100%', border: '1px solid #ccc',  backgroundColor: 'white' }}></div>
        </Col>
        <Col xs="3">
          <div style={{ height: '100%',border: '1px solid #ccc' }}>
          <div style={{ height: '30%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
            <h5>Regional Risk Score</h5>
            <p>{riskScore}</p>
          </div>
            <div style={{ height: '35%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
              <p>Number of FDD in Region</p>
              <FDDChart fddData={fddData} />
            </div>
            <div style={{ height: '35%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
              <p>Total Ice in Region by type</p>
              <IceChart />
            </div>
          </div>
        </Col>
        <Col xs="8">
          <div id="map" style={{ height: '100vh' }}>
          <CountryMap />
          </div>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default MapComponent;
