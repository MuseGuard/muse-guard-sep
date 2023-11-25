import React from 'react';
import Nav from './Components/Nav';
import { Outlet } from 'react-router-dom';
import './App.css'; // Import the custom CSS file

function App() {
  return (
    <main className="app-main">
      <Nav />
      <div className="app-content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
