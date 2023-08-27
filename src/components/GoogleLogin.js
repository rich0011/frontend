import React, { useState } from 'react';
import { GoogleLogin as GoogleLoginButton } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate();

  const responseGoogle = (response) => { 
    if (response.user) {
      // Handle successful login
      navigate('/home');
    }
    else{
      setError("");
    }
  }
  

  return (
    <div>
      {error && <p>{error}</p>}
      <GoogleLoginButton
        clientId="486641136026-u3eb6sbvvj4ec3ol91i2vanet82dkh4h.apps.googleusercontent.com"
        buttonText="continue with email"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLogin;
