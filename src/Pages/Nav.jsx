import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import muselogo from '../Assets/muselogo.png';
import '../Styles/Nav.css';

const Nav = () => {
  return (
    <AppBar position="static" className="nav-bar">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img className="nav-bar-logo" src={muselogo} alt="logo" />
        <Typography variant="h6" className="nav-bar-title">
          Muse Guard
        </Typography>
        <div className="nav-bar-list">
          <Button component={Link} to="/" color="inherit" className="nav-bar-list-item">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit" className="nav-bar-list-item">
            About
          </Button>
          <Button component={Link} to="/manage" color="inherit" className="nav-bar-list-item">
            ArteFacts
          </Button>
          <Button component={Link} to="/data" color="inherit" className="nav-bar-list-item">
            Info
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
