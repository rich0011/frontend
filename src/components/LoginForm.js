import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import background from './background.png';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <Container>
      <Row className="justify-content">
        <Col xs="4">
          <Form className="login-form" onSubmit={handleLogin}>
            <h2>Already have an account?</h2>
            <FormGroup>
            <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <Button type="submit" color="primary">Login</Button>
            </FormGroup>
          </Form>
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

export default LoginForm;
