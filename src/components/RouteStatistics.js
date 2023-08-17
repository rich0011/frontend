import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FDDChart from './FDDChart';
import TempLineChart from './TempLineChart';
import WindSpeedBarChart from './WindSpeedBarChart';
import IceChart from './IceChart';
import HistBarChart from './HistBarChart';
import TotalIceBreakdownBarChart from './TotalIceBreakdownBarChart';
import RestrictedSlider from "./RestrictedSlider";
import CountryMap from './CountryMap';

const RouteStatistics = () => {
const fddData = [15, 20, 10, 5, 8, 12, 18,23,13,33,21,22];
const windData = [15, 20, 10, 5, 8, 12, 18,23,13,33,21,22];
  return (
    <Container style={{width: '100%', height: '100vh', backgroundColor: '#eeeeee' }}>
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
        <Col xs="1">
          <div style={{ height: '100%', border: '1px solid #ccc',  backgroundColor: 'white' }}>
          </div>
        </Col>
        <Col xs="3">
          <div style={{ height: '100%',border: '1px solid #ccc' }}>
          <div style={{ height: '30%', border: '1px solid #213f5e', backgroundColor: 'white' }}>
            <h5>Regional Risk Score</h5>
            {/* <p>{riskScore}</p> */}
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
};

export default RouteStatistics;