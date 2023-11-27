import  { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [pin, setPin] = useState('');
  const [token, setToken] = useState('');
  const [protectedMessage, setProtectedMessage] = useState('');

  
  const handleLogin = async () => {
    try {
      const response = await axios.post(' ', { pin });
      setToken(response.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  
  const accessProtectedEndpoint = async () => {
    try {
      const response = await axios.get(' ', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProtectedMessage(response.data.message);
    } catch (error) {
      console.error('Error accessing protected endpoint:', error);
    }
  };

  return {
    pin,
    setPin,
    token,
    setToken,
    protectedMessage,
    handleLogin,
    accessProtectedEndpoint,
  };
};

export default Auth;
