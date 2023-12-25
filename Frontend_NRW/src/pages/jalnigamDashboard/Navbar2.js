import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; 
import Group from '../home/Assets/Group.png';
import '../home/css/Navbar.css'; 
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useDispatch } from 'react-redux';
import icon from './css/icon.png';

const Navbar2 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)


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
            <Button color="inherit" component={Link} to="/jalnigamdashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/billing">GIS Mapping</Button>
            <Button color="inherit" component={Link} to="/notification"><img src={icon} width={'30px'}></img></Button>
            <Button color="inherit" component={Link} to="/billing">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem Button key="Dashboard" onClick={handleDrawerClose} component={Link} to="/jalnigamdashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem Button key="Billing System" onClick={handleDrawerClose} component={Link} to="/billing">
            <ListItemText primary="Billing System" />
          </ListItem>
          <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar2;
