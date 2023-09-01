import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FDDChart from './FDDChart';
import TempLineChart from './TempLineChart';
import WindSpeedBarChart from './WindSpeedBarChart';
import IceChart from './IceChart';
import HistBarChart from './HistBarChart';
import TotalIceBreakdownBarChart from './TotalIceBreakdownBarChart';
// import RestrictedSlider from "./RestrictedSlider";
import AverageAirTemp from './AverageAirTemp';

const WeatherStatistics = () => {
const fddData = [15, 20, 10, 5, 8, 12, 18,23,13,33,21,22];
const windData = [15, 20, 10, 5, 8, 12, 18,23,13,33,21,22];
  return (
    <Container style={{width: '100%', height: '100%', backgroundColor: '#eeeeee' }}>
        <Row className="justify-content">
            <Col xs="4">
                <div style={{ height:"160%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>See surface temperature</p>
                        <p>0°C</p>
                    </div>
                </div>
            </Col>
            <Col xs="4">
                <div style={{ height:"160%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>Percipitation</p>
                        <p>4 cm</p>
                    </div>
                </div>
            </Col>
            <Col xs="4">
                <div style={{ height:"160%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>Solar Radiation</p>
                        <p>29</p>
                    </div>
                </div>
            </Col>
        </Row><br></br><br></br>
        <Row className="justify-content">
            <Col xs="6">
                <div style={{ height: '180px',width: '469px',marginTop: '5px', backgroundColor: 'white' }}>
                    <div style={{ height: '130px', width: '300px', marginLeft: '50px',  backgroundColor: 'white' }}>
                        <p>Temerature</p>
                        <TempLineChart  />
                    </div>
                </div>
            </Col>
            <Col xs="6">
                <div style={{ height: '180px',width: '469px',marginTop: '5px', backgroundColor: 'white' }}>
                    <div style={{ height: '130px', width: '300px', marginLeft: '50px',  backgroundColor: 'white' }}>
                        <p>Wind speed</p>
                        <WindSpeedBarChart windData={windData} />
                    </div>
                </div>
            </Col>
        </Row><br />
        <Row className="justify-content">
            <Col xs="6">
                <div style={{ height: '180px',width: '469px',marginTop: '5px', backgroundColor: 'white' }}>
                    <div style={{ height: '130px', width: '300px', marginLeft: '50px',  backgroundColor: 'white' }}>
                        <p>Historical Averages</p>
                        <HistBarChart />
                    </div>
                </div>
            </Col>
            <Col xs="6">
                <div style={{ height: '180px', width: '469px',marginTop: '5px', backgroundColor: 'white' }}>
                    <div style={{height: '130px', width: '300px', marginLeft: '50px',  backgroundColor: 'white' }}>
                        <p>Total Ice Type Breakdown</p>
                        <hr style={{ background: 'black', color: 'black', borderColor: 'black', height: '3px',}}      />
                        <TotalIceBreakdownBarChart />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default WeatherStatistics;