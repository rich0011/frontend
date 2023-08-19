import React from 'react';
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import { Container, Row, Col, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestrictedSlider from "./RestrictedSlider";

const WeatherForcast = () => {

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
            <Col xs="3">
                <div style={{ height:"100%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>Average air temperature</p>
                        <p>5°C</p>
                    </div>
                </div>
            </Col>
            <Col xs="3">
                <div style={{ height:"100%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>See surface temperature</p>
                        <p>0°C</p>
                    </div>
                </div>
            </Col>
            <Col xs="3">
                <div style={{ height:"100%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>Percipitation</p>
                        <p>4 cm</p>
                    </div>
                </div>
            </Col>
            <Col xs="3">
                <div style={{ height:"100%", backgroundColor: 'white' }}>
                    <div style={{marginLeft: '40px',  backgroundColor: 'white' }}>
                        <p>Solar Radiation</p>
                        <p>29</p>
                    </div>
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content">
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Cloudy />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Cloudy />
                </div>
            </Col>
            <Col xs="2">
                <div style={{  backgroundColor: 'white' }}>
                    <Snow />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="1">
                <div style={{ backgroundColor: 'white' }}>
                    <Rain />
                </div>
            </Col>
            <Col xs="1">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content">
        <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Snow />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="2">
                <div style={{  backgroundColor: 'white' }}>
                    <Snow />
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="1">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
            <Col xs="1">
                <div style={{ backgroundColor: 'white' }}>
                    <Sunny />
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default WeatherForcast;