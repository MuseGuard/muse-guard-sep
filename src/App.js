
import React, { useState , useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import AuthPage from './Components/AuthPage';
import './App.css'; 


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    // Simulating an animation completion after a delay
    const animationTimeout = setTimeout(() => {
      setAnimationCompleted(true);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, []); 

  return (
    <main className="app-main">
      <Nav isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <div className={`app-content ${isLoggedIn && animationCompleted ? 'animate-fade-down' : ''}`}>
        {isLoggedIn ? (
          <Outlet />
        ) : (
          <>
            <AuthPage setLoggedIn={setLoggedIn} />
           
          </>
        )}
      </div>
    </main>
  );
};

export default App;
