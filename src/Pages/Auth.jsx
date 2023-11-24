/*

import React, { useState } from "react";
import axios from "axios";
import Home from "./Home"; // Assuming you have Home.jsx

const AuthPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [defaultPassword] = useState("defaultPassword"); // Set your default password here

  const authenticate = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to check the password
      const response = await axios.post('YOUR_API_ENDPOINT', { password });

      if (response.data.authenticated) {
        setIsAuthenticated(true);
      } else {
        setError("Incorrect password");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError("Error during authentication. Please try again.");
    }
  };

  const changePassword = async (newPassword) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to change the password
      const response = await axios.post('YOUR_API_ENDPOINT/change-password', { newPassword });

      if (response.data.success) {
        setPassword(newPassword);
        clearError();
      } else {
        setError("Failed to change password");
      }
    } catch (error) {
      console.error("Error during password change:", error);
      setError("Error during password change. Please try again.");
    }
  };

  const handleAuthentication = async () => {
    if (password === defaultPassword) {
      await authenticate();
    } else {
      setError("Incorrect password");
    }

    if (isAuthenticated) {
      // User is authenticated, update the state
      clearError();
    } else {
      // Authentication failed, handle accordingly
      // For simplicity, I'm not handling the error here
      console.error("Authentication failed");
    }
  };

  const handlePasswordChange = (newPassword) => {
    changePassword(newPassword);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h1>Login</h1>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleAuthentication}>Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <div>
          <Home />
          <div>
            <h2>Change Password</h2>
            <label>New Password:</label>
            <input
              type="password"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
*/ // AuthPage.jsx
// AuthPage.jsx



// AuthPage.jsx
// AuthPage.jsx
// AuthPage.jsx

/*
import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Info from "./Info";
import Artefact from "./Artefact";

const AuthPage = ({ setAuthenticated }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const handleAuthentication = (password) => {
    // Your authentication logic here
    // For simplicity, I'm using a password check
    const isAuthenticated = password === "yourDefaultPassword";

    if (isAuthenticated) {
      setIsAuthenticated(true);
      setAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h1>Login</h1>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => handleAuthentication(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Welcome!</h2>
          {//You can render additional content for authenticated users if needed //}
        </div>
      )}
    </div>
  );
};

export default AuthPage;
*/
// AuthPage.jsx
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
