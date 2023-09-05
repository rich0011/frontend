import React from 'react';
import { Sunny, Snow } from 'weather-styled-icon';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestrictedSlider from "./RestrictedSlider";
import sunny from '../../assets/WeatherIcon/sunny.png';
import cloud from '../../assets/WeatherIcon/cloud.png';
import cloudy from '../../assets/WeatherIcon/cloudy.png';
import snow from '../../assets/WeatherIcon/snow.png';
import windy from '../../assets/WeatherIcon/windy.png';
import rainy from '../../assets/WeatherIcon/rainy.png';

const WeatherForcast = () => {

  return (
    <Container style={{width: '100%', height: '100vh', backgroundColor: '#eeeeee' }}>
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
                <img src={sunny} alt="POLARCTIC" style={{width: '60%'}}/>
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                <img src={cloud} alt="POLARCTIC" style={{width: '60%'}}/>
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                <img src={cloudy} alt="POLARCTIC" style={{width: '60%'}}/>
                </div>
            </Col>
            <Col xs="2">
                <div style={{  backgroundColor: 'white' }}>
                <img src={snow} alt="POLARCTIC" style={{width: '60%'}}/>
                </div>
            </Col>
            <Col xs="2">
                <div style={{ backgroundColor: 'white' }}>
                <img src={windy} alt="POLARCTIC" style={{width: '60%'}}/>
                </div>
            </Col>
            <Col xs="1">
                <div style={{ backgroundColor: 'white' }}>
                <img src={rainy} alt="POLARCTIC" style={{width: '60%'}}/>
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