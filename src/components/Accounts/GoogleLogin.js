import axios from 'axios';

const GoogleLogin = async (accesstoken) => {
  let res = await axios.post('http://localhost:8000/api/google/', {
    access_token: accesstoken,
  });
  console.log(res);
  return res.status;
};

export default GoogleLogin;