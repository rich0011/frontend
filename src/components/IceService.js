import React from 'react';
import ReactCountryFlag from "react-country-flag"
import { Container, Row, Col, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IceService = () => {

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
        </Row><br></br>
        <Row className="justify-content">
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                    <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content">
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content">
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
            <Col xs="6">
                <div style={{ backgroundColor: 'white' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '2em',
                            height: '2em',
                        }}
                        title="US"
                    />
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default IceService;