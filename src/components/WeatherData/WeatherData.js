import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { Container, Row, Col,Button } from 'reactstrap';
import Autosuggest from 'react-autosuggest';
import 'bootstrap/dist/css/bootstrap.min.css';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      userLocation: '',
      suggestions: [],
      map: null,
      marker: null,
    };
  }

  componentDidMount() {
    const map = L.map('map').setView([0, 0], 2);
    this.setState({ map });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
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
  

  fetchSuggestions = (value) => {
    fetch(`https://nominatim.openstreetmap.org/search?country=${value}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((result) => result.display_name.split(',')[0]);
        this.setState({ suggestions: countryNames });
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });
  };

  searchCountry = () => {
    const { userLocation, map, marker, userDatetime } = this.state;
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
  
          // Fetch weather data using user input values
          this.fetchWeatherData(userLocation, userDatetime)
            .then((weatherData) => {
              // Update the map to display weather data
              // Adjust map display based on the weather data
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
    // const { searchQuery, suggestions } = this.state;
    const { userLocation, suggestions } = this.state;
    // const inputProps = {
    //   value: searchQuery,
    //   onChange: this.handleSearchChange,
    // };

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
/>
{/* <input
  type="datetime-local"
  value={userDatetime}
  onChange={this.handleDatetimeChange}
/> */}

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
            <div style={{ height: '30%', border: '1px solid #213f5e',  backgroundColor: 'white' }}>
              <p>Reginal Risk Score</p>
            </div>
            <div style={{ height: '35%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
              <p>Number of FDD in Region</p>
            </div>
            <div style={{ height: '35%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
              <p>Total Ice in Region by type</p>
            </div>
          </div>
        </Col>
        <Col xs="8">
          <div id="map" style={{ height: '100vh' }}></div>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default MapComponent;
