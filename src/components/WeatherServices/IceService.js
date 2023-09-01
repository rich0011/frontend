import React from 'react';
import ReactCountryFlag from "react-country-flag"
import { Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IceService = () => {

  return (
    <Container style={{width: '100%', height: '100vh', backgroundColor: '#eeeeee' }}>

        <Row className="justify-content" style={{ marginLeft: '20%'}}>
            <Col xs="6">
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                    <ReactCountryFlag
                        countryCode="CA"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="Canada Ice Service"
                    />
                    <p>Canada Ice Service</p>
                </div>
            </Col>
            <Col xs="6" style={{ marginLeft: '-10%'}}>
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="NoAA Ice Desk"
                    />
                    <p>NoAA Ice Desk</p>
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content" style={{ marginLeft: '20%'}}>
            <Col xs="6">
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                <ReactCountryFlag
                        countryCode="FI"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="Finish Ice Service"
                    />
                    <p>Finish Ice Service</p>
                </div>
            </Col>
            <Col xs="6" style={{ marginLeft: '-10%'}}>
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                <ReactCountryFlag
                        countryCode="DK"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="Danish Metereological Institute"
                    />
                    <p>Danish Metereological Institute</p>
                </div>
            </Col>
        </Row><br></br>
        <Row className="justify-content" style={{ marginLeft: '20%'}}>
            <Col xs="6">
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                <ReactCountryFlag
                        countryCode="NO"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="Norway Ice Service"
                    />
                    <p>Norway Ice Service</p>
                </div>
            </Col>
            <Col xs="6" style={{ marginLeft: '-10%'}}>
                <div style={{ backgroundColor: 'white', padding: '0 60px', width: '70%' }}>
                <ReactCountryFlag
                        countryCode="IS"
                        svg
                        style={{
                            width: '10em',
                            height: '8em',
                        }}
                        title="Iceland Ice Service"
                    />
                    <p>Iceland Ice Service</p>
                </div>
            </Col>
        </Row>
    </Container>
  );
};

export default IceService;