// useLogin.js
import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (password) => {
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/jwt/login', { password });
      const { token: responseToken } = response.data;

      // Store the token in state
      setToken(responseToken);

      setLoading(false);
      setError(null);

      return response.data; // You can return additional data if needed
    } catch (error) {
      setLoading(false);
      setError(error.response.data.error);

      throw error; // Re-throw the error for the component to handle if needed
    }
  };

  return { loading, error, token, login };
};

export default useLogin;
