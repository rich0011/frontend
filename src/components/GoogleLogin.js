import React, { useState } from 'react';
import { GoogleLogin as GoogleLoginButton } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    if (response.error) {
      // Handle error cases
      setError(response.error);
    } else if (response.user) {
      // Handle successful login
      navigate('/home');
    }
  }

  return (
    <div>
      {error && <p>An error occurred: {error}</p>}
      <GoogleLoginButton
        clientId="173833737443-qfckldasquupsdfffehslv30mpls2bmn.apps.googleusercontent.com"
        buttonText="continue with email"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleLogin;
