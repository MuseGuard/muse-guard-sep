import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [success, setSuccess] = useState(false);

  const login = async (password) => {
    setLoading(true);

    try {
      const response = await axios.post('http://34.88.237.151/jwt/login', { password });
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

  const updatePassword = async (oldPassword, newPassword) => {
    setLoading(true);

    try {
      const response = await axios.patch('http://34.88.237.151/jwt/update-password', {
        oldPassword,
        newPassword,
      });

      if (response.status === 200) {
        setSuccess(true);
        setError(null);
      } else {
        setSuccess(false);
        setError('Password update failed');
      }
    } catch (error) {
      setSuccess(false);
      setError(error.response?.data?.error || 'Internal Server Error');
    } finally {
      setLoading(false);
    }
  };


  return { loading, error, token, login , updatePassword, success};
};

export default useLogin;
