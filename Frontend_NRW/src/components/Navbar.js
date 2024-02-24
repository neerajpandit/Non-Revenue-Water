import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { getToken } from '../services/LocalStorageService';
import Group from '../pages/home/Assets/Group.png';


const Navbar = () => {
  const { access_token } = getToken()
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0d0d0d' }}>
      {/* color="secondary" */}
        <Toolbar>
            
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>JalSamadhan</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#0d0d0d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>

          {access_token ? <Button component={NavLink} to='/dashboard' style={({ isActive }) => { return { backgroundColor: isActive ? '#0d0d0d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Logout</Button> : <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#0d0d0d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Login/Registration</Button>}

        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
