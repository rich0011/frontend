import React, { useState } from 'react';
import Box from '@mui/material/Box';
import GoogleLogin from 'react-google-login';
import {Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Snackbar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { BASE_URL } from '../../config/config'; 
import googleLogin from './googleLogin'

const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!full_name || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    if (!isEmailValid(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/account/register`, {
        full_name,
        email,
        password,
      });
      if (response.data) {
        setSuccessMessage('Account created successfully!');
        setErrorMessage('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error === 'Email already exists.') {
        setErrorMessage('This email already exists.');
      } else {
        setErrorMessage('Account creation failed.');
      }
      setSuccessMessage('');
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  // const responseGoogle = async (response) => {
  //   let googleResponse = await googleLogin(response.accessToken);
  //   console.log(googleResponse);
  //   console.log(response);
  // };
  const responseGoogle = async (response) => {
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };
  return (
    <Box>
        <Row>
          <Col>
            <Form onSubmit={handleSignup}>
              <h5 style={{ color: '#3bb3c2', fontSize:18, padding: '0 70px'}}>POLARCTIC</h5><br></br>
              <h2 style={{ fontSize:21 }}>Create an account</h2>
              <p style={{ fontSize:14 }}>let's get started!</p>
              <FormGroup>
                <TextField
                  type="text"
                  label="Name"
                  sx={{
                    "& .MuiInputLabel-root": {color: 'white', fontFamily: 'Nunito'},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }
                    },
                  }}
                  variant="outlined"
                  size="small"
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'white', backgroundColor: '#242442'},
                  }}
                  InputProps={{
                    style: { color: 'white'},
                  }}
                  fullWidth
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  value={email}
                  sx={{
                    "& .MuiInputLabel-root": {color: 'white', fontFamily: 'Nunito'},
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "white"
                      }
                    },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'white', backgroundColor: '#242442' },
                  }}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  fullWidth
                />
              </FormGroup>
              <FormGroup>
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    size="small"
                    value={password}
                    sx={{
                      "& .MuiInputLabel-root": { color: 'white', fontFamily: 'Nunito'},
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "white" },
                        "&:hover fieldset": { borderColor: "white" },
                      },
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            style={{ color: 'white' }} 
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      style: { color: 'white'}, 
                    }}
                    InputLabelProps={{
                      style: { color: 'white', backgroundColor: '#242442' },
                    }}
                    fullWidth
                  />
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#31327e',
                    borderColor: '#31327e',
                  }}
                  color="primary" fullWidth
                >
                  Sign up
                </Button>
              </FormGroup>
              <FormGroup>
              {/* <GoogleLogin
                clientId="39326038182-mdrsib9lrldvqhpnquhdmn9jc1kui21i.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              /> */}
              {/* <GoogleLogin /> */}
                <Button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: 'white',
                  }}
                  color="black" fullWidth
                >
                  Continue with email
                </Button>
              </FormGroup>
              <div className="account-link">
                <p style={{ fontSize:12, padding: '0 30px'}}>
                  Already have an account?{' '}
                  <Link style={{ color: 'white' }} to="/login">
                    Log in
                  </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
        <Snackbar
          open={!!successMessage || !!errorMessage}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={successMessage || errorMessage}
          ContentProps={{
            sx: {
              color: successMessage ? '#99ffbb' : errorMessage ? 'red' : '',
              backgroundColor: 'transparent'
            },
          }}
      />
      </Box>
  );
};

export default SignupForm;
