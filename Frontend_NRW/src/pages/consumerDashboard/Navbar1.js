import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Group from '../home/Assets/Group.png';
import './css/Navbar1.css'; 
import ProfileIcon from './Assets/profile-logo.png';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice';
import { getToken, removeToken } from '../../services/LocalStorageService';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useDispatch } from 'react-redux';


const Navbar = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

// const toggleDropdown = () => {
//     setDropdownVisible(true);

//     setTimeout(() => {
//       setDropdownVisible(false); 
//     }, 3000);
//   };
const [supportDropdownVisible, setSupportDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleSupportDropdown = () => {
    setSupportDropdownVisible(!supportDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

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
            className='menu-icon1'
          >
            <MenuIcon  />
          </IconButton>
          <div className="logo-container">
            <img src={Group} alt="Logo" className="logo-img" />
            <Typography variant="h6" className="logo-text">
              JalSamadhan
            </Typography>
          </div>
          <div className="navbar-links-container1">
            <Button color="inherit" href="/consumer">Home</Button>
            <Button color="inherit" href="/about">AboutUs</Button>
            <Button color="inherit" href="/sessions">Online Sessions</Button>
            <Button color="inherit" href="/blogs">Blogs</Button>
        <div className="dropdown-container">
          <Button color="inherit" onClick={toggleSupportDropdown} className="support-dropdown">
            SUPPORT
          </Button>
          {supportDropdownVisible && (
            <div className="dropdown-content">
              <Button color="inherit" href="/complaint">
                Complaint
              </Button>
              <br />
              <hr />
              <Button color="inherit" href="/faqs">
                FAQs
              </Button>
              <br />
              <hr />
              <Button color="inherit" href="/feedback">
                Feedbacks
              </Button>
            </div>
          )}
        </div>

           <div className="dropdown-container">
          <Button color="inherit" onClick={toggleProfileDropdown} className="support-dropdown">
          <img src={ProfileIcon} alt='Profile' width={'35px'} height={'35px'}></img>
          </Button>
          {profileDropdownVisible && (
            <div className="dropdown-content">
              <Button color="inherit" href="/dashboard">
                Profile
              </Button>
              <br />
              <hr />
              <Button color="inherit" href="/changepassword">
                Change Password
              </Button>
              <br />
              <hr />
              <Button color="inherit" href="/bill">
                Payment
              </Button>
              <br />
              <hr />
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          )}
        </div>
        {/* <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button> */}
      </div>

        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
        <ListItem Button key="Home" onClick={handleDrawerClose} component={Link} to="/consumer">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem Button key="About" onClick={handleDrawerClose} component={Link} to="/about">
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem Button key="Sessions" onClick={handleDrawerClose} component={Link} to="/sessions">
            <ListItemText primary="Online Sessions" />
          </ListItem>
          <ListItem Button key="Blogs" onClick={handleDrawerClose} component={Link} to="/blogs">
            <ListItemText primary="Blogs" />
          </ListItem>
          <div className="dropdown-container">
          <p onClick={toggleSupportDropdown} className='dropdown1'>Support</p>
          {supportDropdownVisible && (
            <div className="dropdown-content">

                 <ListItem Button key="Complaint" onClick={handleDrawerClose} component={Link} to="/complaint">
                  <ListItemText primary="Complaint" />
                </ListItem>
                <ListItem Button key="FAQs" onClick={handleDrawerClose} component={Link} to="/faqs">
                  <ListItemText primary="FAQs" />
                </ListItem>
                <ListItem Button key="Feedback" onClick={handleDrawerClose} component={Link} to="/feedback">
                  <ListItemText primary="Feedback" />
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
