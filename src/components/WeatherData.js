import React, { Component } from 'react';
import L from 'leaflet';
import Box from '@mui/material/Box';
// import { BrowserRouter as Link } from 'react-router-dom';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Container, Row, Col,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FDDChart from './FDDChart';
import IceChart from './IceChart';
import CountryMap from './CountryMap';
import FDDBarChart from './FDDBarChart';
import TotalIceDoughnutChart from './TotalIceDoughnutChart';
// import Home from './Home';

class MapComponent extends Component {
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
  
  searchCountry = () => { 
    const { selectedCountry, map} = this.state;
    async function fetchRiskScoreData(){
    if (!selectedCountry) return;
    try{
      const response = await axios.get(`http://localhost:8000//weather/fetch-data/?location=${selectedCountry}`)
      
      const weatherData = response.data;

      const temperature = weatherData.currentConditions.temp;
      const precipitation = weatherData.currentConditions.precip;
      const windSpeed = weatherData.currentConditions.windSpeed;

      // Calculate risk scores based on your criteria
      const temperatureScore = temperature > 30 ? 15 : 5;
      const precipitationScore = precipitation > 10 ? 20 : 0;
      const windSpeedScore = windSpeed > 20 ? 15 : 10;

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
}

  render() {

    const {selectedCountry, countryList, riskScore} = this.state;

    return (
      <Container className="container-fluid" style={{width: '180%',backgroundColor: '#eeeeee' }}>
        <Row>
          <Col>
            <div style={{border: '1px solid #ccc', backgroundColor: 'white'}}>Hello Jan</div>
          </Col>
        </Row>
      <Row>
        <Col>
        <div className="d-flex align-items-center" style={{ backgroundColor: 'white'}}>
        <h4>Select region:</h4>
        <select onChange={this.handleCountrySelect} value={selectedCountry} style={{borderColor: '#ccccff', width: '10%'}}>
                <option value="">Canada NWP</option>
                {countryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <Button color="" onClick={this.searchCountry}>
                Search
              </Button>
        </div>
        
        </Col>
      </Row><br></br>
      <Row className="justify-content" style={{ marginLeft: '10px'}}>
        {/* <Col xs='1' style={{ backgroundColor: 'white' }}>
            
        </Col> */}
        <Col xs="3">
        <Row className="justify-content">
          <div style={{ height: '200px', backgroundColor: 'white' }}>
            <h5>Regional Risk Score</h5>
            <p>{riskScore}</p>
          </div>
        </Row><br></br>
        <Row className="justify-content">
            <div style={{ height: '200px', backgroundColor: 'white' }}>
              <p>Number of FDD in Region</p>
              <FDDBarChart selectedCountry={selectedCountry} />
            </div>
        </Row><br></br>
        <Row className="justify-content">
            <div style={{ height: '200px', backgroundColor: 'white' }}>
              <p>Total Ice in Region by type</p>
              <IceChart  selectedCountry={selectedCountry} />
            </div>
        </Row>
        </Col>
        <Col xs="9" style={{ height: '100vh', width: '66%'}}>
          <div id="map">
          <CountryMap selectedCountry={selectedCountry} />
          </div>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default MapComponent;
