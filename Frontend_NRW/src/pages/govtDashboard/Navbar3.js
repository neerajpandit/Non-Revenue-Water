import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import Group from '../home/Assets/Group.png';
import '../home/css/Navbar.css'; 

const Navbar3 = () => {
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
            <MenuIcon />
          </IconButton>
          <div className="logo-container">
            <img src={Group} alt="Logo" className="logo-img" />
            <Typography variant="h6" className="logo-text">
              JalSamadhan
            </Typography>
          </div>
          <div className="navbar-links-container">
            <Button color="inherit" component={Link} to="/govtDashboard">Consumer Details</Button>
            <Button color="inherit" component={Link} to="/consumerBilling">Consumer Billing</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem button key="Consumer Details" onClick={handleDrawerClose} component={Link} to="/jalnigamDashboard">
            <ListItemText primary="Consumer Details" />
          </ListItem>
          <ListItem button key="Consumer Billing" onClick={handleDrawerClose} component={Link} to="/consumerBilling">
            <ListItemText primary="Consumer Billing" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar3;
