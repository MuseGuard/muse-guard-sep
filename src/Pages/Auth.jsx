
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../Hooks/Auth'; // Import the Auth hook

const AuthPage = ({ setAuthentication }) => {
  const [newPassword, setNewPassword] = useState('');
  const { password, isAuthenticated, authenticate, changePassword, error, clearError, setPassword } = Auth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Before authenticate');
    await authenticate();
    setAuthentication(true);
    console.log('After authenticate');
    if (isAuthenticated) {
      console.log('Setting authentication status');
      setAuthentication(true);
      navigate('/');
    }
  };

  const handlePasswordChange = async () => {
    await changePassword(newPassword);
    // You can handle success or error here if needed
  };
  return (
    <div className="auth-container">
      {!isAuthenticated && (
        <div>
          <h2>Login</h2>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}

      {isAuthenticated && (
        <div>
          <h2>Change Password</h2>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordChange}>Change Password</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AuthPage;
