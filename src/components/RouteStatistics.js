import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IceAlongRouteBarChart from "./IceAlongRouteBarChart";
import RestrictedSlider from "./RestrictedSlider";
import CountryMap from './CountryMap';

const RouteStatistics = () => {

  return (
      <Container style={{width: '100%', height: '100%', backgroundColor: '#eeeeee' }}>
      <Row>
          <Col>
              <div style={{border: '1px solid #ccc', backgroundColor: 'white' }}>Hello Jan</div>
          </Col>
      </Row>
      <Row className="justify-content">
          <Col>
              <div className="d-flex align-items-center" style={{ width: '100%', backgroundColor: 'white'}}>
                  <span>Select region<Input type='search' placeholder='search' color="info">Search</Input></span>
              </div>
          </Col>
      </Row>
      <Row className="justify-content">
          <Col>
              <RestrictedSlider />
          </Col>
      </Row><br></br>
      <Row className="justify-content">
          <Col xs="4">
              <div style={{height:"130px", backgroundColor: 'white' }}>
                  <div  style={{marginLeft: '40px' }}>
                      <p>POLARIS RIO Code</p>
                      <h3>15</h3>
                  </div>
              </div><br></br>
              <div style={{height:"130px", backgroundColor: 'white' }}>
                  <div style={{marginLeft: '40px'}}>
                      <p>Wind</p>
                      <h3>NE 12 knots</h3>
                  </div>
              </div><br></br>
              <div style={{height:"130px", backgroundColor: 'white' }}>
                  <div  style={{marginLeft: '40px' }}>
                      <p>Precipitation</p>
                      <h3>4 cm</h3>
                  </div>
              </div><br></br>
              <div style={{height:"240px", backgroundColor: 'white' }}>
                  <div style={{height: '200px', width: '350px', marginLeft: '10px',  backgroundColor: 'white' }}>
                      <p>Ice Along Route</p>
                      <IceAlongRouteBarChart />
                  </div>
              </div>
          </Col>
          <Col xs="8">
              <div style={{width: "100vh", height: "100vh", backgroundColor: 'white' }}>
                      <CountryMap />
              </div>
          </Col>
      </Row>
    </Container>
  );
};

export default RouteStatistics;