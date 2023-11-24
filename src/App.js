import React, { useState, useEffect } from 'react';
import Nav from './Pages/Nav';
import { Outlet } from 'react-router-dom';
import AuthPage from './Pages/Auth'; // Assuming you have AuthPage.jsx
import './App.css'; // Import the custom CSS file

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    console.log('Initial Auth Status:', isAuthenticated);
    // Check local storage or session to see if the user is already authenticated
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to set authentication status and update local storage or session
  const setAuthentication = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);
  };

  return (
    <main>

      <div className="app-content">
        {/* Render AuthPage only if not authenticated */}
        {!isAuthenticated && <AuthPage setAuthentication={setAuthentication} />}

        {/* Render all pages if authenticated */}
        {isAuthenticated && 
        <div className='main'>
        <Nav />
        <div className='content'> 
        <Outlet />
        </div>
        </div>}
      </div>
    </main>
  );
}

export default App;

