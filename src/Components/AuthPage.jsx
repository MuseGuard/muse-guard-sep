// AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../Hooks/Auth';

const AuthPage = ({ setLoggedIn }) => {
  const [password, setPassword] = useState('');
  const { loading, error, login } = Auth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(password);
      setLoggedIn(true); // Set login status to true
      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      console.error(error); // Handle the error as needed
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AuthPage;
