import React from 'react';
import { Link } from 'react-router-dom';
import muselogo from '../Assets/muselogo.png';
import '../Styles/Nav.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <img className="nav-bar-logo" src={muselogo} alt="logo" />
        <ul className="nav-bar-list">
          <li>
            <Link to="/" className="nav-bar-list-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-bar-list-item">About</Link>
          </li>
          <li>
            <Link to="/manage" className="nav-bar-list-item">ArteFacts</Link>
          </li>
          <li>
            <Link to="/data" className="nav-bar-list-item">Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
