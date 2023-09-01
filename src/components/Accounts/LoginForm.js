import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, FormGroup, Button } from 'reactstrap';
import Box from '@mui/material/Box';
import { TextField, InputAdornment, IconButton, Snackbar } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { Context } from '../../Contexts/AppContext'
import { BASE_URL } from '../../config/config'; 


const LoginForm = ({ handleLoginSuccess }) => {
  const { email, isLoggedIn, setEmail, setIsLoggedIn } = useContext(Context);
  const [showPassword, setShowPassword] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [full_name, setFullName] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/account/login`, {
        email,
        full_name,
        password,
      });
      if (response.data.email) {
        // setSuccessMessage('Account created successfully!');
        handleLoginSuccess(response.data.full_name);
        setErrorMessage('');
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage('Login failed. Please check your credentials.');
      setSuccessMessage('');
    }
  };

  const handleSnackbarClose = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <Box>
      <Row>
        <Col>
          <Form onSubmit={handleLogin}>
            <h5 style={{ color: '#3bb3c2', fontSize:18, padding: '0 70px'}}>POLARCTIC</h5><br></br>
            <h2 style={{ fontSize:12 }}>Already have an account?</h2><br></br>
            <FormGroup>
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                size="small"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <Button onClick={() => setIsLoggedIn(true)} type="submit" color="primary" fullWidth>
                Login
              </Button>
            </FormGroup>
            <Snackbar
                open={!!successMessage || !!errorMessage}
                autoHideDuration={30000}
                onClose={handleSnackbarClose}
                message={successMessage || errorMessage}
                ContentProps={{
                  sx: {
                    color: successMessage ? '#99ffbb' : errorMessage ? 'red' : '',
                    backgroundColor: 'transparent'
                  },
                }}
            />
          </Form>
        </Col>
      </Row>
    </Box>
  );
};

export default LoginForm;
