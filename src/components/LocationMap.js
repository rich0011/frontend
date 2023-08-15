import React, { useState, useEffect } from 'react';
// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { Container, Row, Col,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const LocationMap = () => {
  const [riskScore, setRiskScore] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState('');
  const [locationName, setLocationName] = useState('');
  
  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = () => {
    // Fetch location data from your Django API
    axios.get(`http://localhost:8000//weather/fetch-data/?location=${locationName}`)
      .then(response => {
        console.log(response.data.latitude)

        const weatherData = response.data;
        const temperature = weatherData.currentConditions.temp;
        const precipitation = weatherData.currentConditions.precip;
        const windSpeed = weatherData.currentConditions.windSpeed

        const temperatureScore = temperature> 30 ? 10: 0;
        const precipitationScore = precipitation > 10 ? 20 : 0;
        const windSpeedScore = windSpeed > 20 ? 15 : 0;

        const overallScore = temperatureScore + precipitationScore + windSpeedScore;

        setRiskScore(overallScore);
        const lat = weatherData.latitude;
        const lon = weatherData.longitude;
        const address = weatherData.address;
        setLatitude(lat);
        setLongitude(lon);
        setAddress(address);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  };

  return (
    <Container style={{width: '100%', height: '100%', backgroundColor: '#ccc' }}>
        <Row>
          <Col>
            <div style={{border: '1px solid #ccc', backgroundColor: 'white' }}>Hello Jan</div>
          </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <input
                    type="text"
                    value={locationName}
                    onChange={e => setLocationName(e.target.value)}
                    placeholder="Enter location name"
                    />
                    <Button onClick={fetchLocations}>Search</Button>
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
                        <h2>Reginal Risk Score</h2>
                        <p>{riskScore}</p>
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
                <div id='map'>
                <MapContainer center={[0, 0]} zoom={2}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* {locations.map(location => ( */}
                    <Marker
                        // key={location.id}
                        position={[latitude, longitude]}
                    >
                        <Popup>{address}</Popup>
                    </Marker>
                    {/* ))} */}
                </MapContainer>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default LocationMap;
