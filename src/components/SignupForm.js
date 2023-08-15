import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import {Link} from "react-router-dom";
import axios from 'axios';
import Logo from './Logo';
import background from './background.png';
import './SignupForm.css';

const SignupForm = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        first_name,
        last_name,
        email,
        password,
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <Container>
      <Row className="justify-content">
        <Col xs="4">
        <div className="left-sidebar">
          <Form className="signup-form" onSubmit={handleSignup}>
            <Logo />
            <h5>POLARCTIC</h5>
            <h2>Create an account</h2>
            <p>let's get started!</p>
            <FormGroup>
              <Input
                type="text"
                placeholder="First Name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                placeholder="Last Name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
            <Button type="submit" style={{width: '350px', backgroundColor: '#3d0099', borderColor: '#3d0099'}} color="primary">Sign up</Button>
            </FormGroup>
            <FormGroup>
            <Button type="submit" style={{width: '350px'}} color='light'>continue with email</Button>
            </FormGroup>
            <div className="account-link">
              <p>Already have an account? <Link style={{color: 'white'}} to="/login">Log in</Link></p>
            </div>
          </Form>
          </div>
        </Col>
        <Col xs="8">
          <div className="bg-img">
            <img src={background} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
