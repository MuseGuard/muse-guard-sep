// import React from 'react';
// import Nav from './Components/Nav';

// import './App.css'; // Import the custom CSS file

// function App() {
//   return (
//     <main className="app-main">
//       <Nav />
//       <div className="app-content">
//         <Outlet />
//       </div>
//     </main>
//   );
// }

// export default App;

// App.js
import React, { useState , useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import AuthPage from './Components/AuthPage';
import './App.css'; 
// Import your custom CSS file if needed

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
      <div className={`app-content ${isLoggedIn && animationCompleted ? 'animate-opening' : ''}`}>
        {isLoggedIn ? (
          <Outlet />
        ) : (
          <>
            <AuthPage setLoggedIn={setLoggedIn} />
            {/* Optional: You can customize the message or UI for non-logged-in users */}
            {/* <p>Please log in to access the application.</p> */}
          </>
        )}
      </div>
    </main>
  );
};

export default App;
