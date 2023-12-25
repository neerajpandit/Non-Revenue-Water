import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Group from './Assets/Group.png';
import './css/Navbar.css'; 

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

const toggleDropdown = () => {
    setDropdownVisible(true);

    setTimeout(() => {
      setDropdownVisible(false); 
    }, 3000);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => { 
    setDrawerOpen(false);
  };

  return (
    <div>
      <AppBar position="static" className='nav-container'>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            className='menu-icon'
          >
            <MenuIcon  />
          </IconButton>
          <div className="logo-container">
            <img src={Group} alt="Logo" className="logo-img" />
            <Typography variant="h6" className="logo-text">
              JalSamadhan
            </Typography>
          </div>
          <div className="navbar-links-container">
            <Button color="inherit" href="/">HOME</Button>
            <div className="dropdown-container">
           <p onClick={toggleDropdown} className='dropdown'>LOGIN</p>
           {dropdownVisible && (
            <div className="dropdown-content1">
               <Button color="inherit" href="/jalnigamLogin">JalNigam Login</Button><br/><hr/>
            <Button color="inherit" href="/consumerLogin">Consumer Login</Button><br/>
            </div>
          )}
        </div>
            <Button color="inherit" href="/consumerSignup">SIGNUP</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem Button key="Home" onClick={handleDrawerClose} component={Link} to="/">
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem Button key="SignUp" onClick={handleDrawerClose} component={Link} to="/consumerSignup">
            <ListItemText primary="SIGNUP" />
          </ListItem>
          <div className="dropdown-container">
          <p onClick={toggleDropdown} className='dropdown1'>LOGIN</p>
          {dropdownVisible && (
            <div className="dropdown-content1">
                <ListItem Button key="LoginC" onClick={handleDrawerClose} component={Link} to="/consumerLogin">
                  <ListItemText primary="CONSUMER LOGIN" />
                </ListItem>
                <ListItem Button key="LoginJ" onClick={handleDrawerClose} component={Link} to="/jalnigamLogin">
                  <ListItemText primary="JALNIGAM LOGIN" />
                </ListItem>
            </div>
          )}
        </div>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
