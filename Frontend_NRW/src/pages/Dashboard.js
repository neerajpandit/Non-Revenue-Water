import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import Navbar from './consumerDashboard/Navbar1';
import './Dashboard.css'
const Dashboard = () => {
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

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])

  return <>
  <Navbar/>
    <CssBaseline />
    <Grid container height='80vh'>
      <Grid item sm={12} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1 className='phead'>Profile</h1>
        <Typography className='ne' variant='h6'>Name: {userData.name}</Typography>
        <Typography className='ne' variant='h5'>Email: {userData.email}</Typography>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Button className='lbutton' variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 28 }}>Logout</Button>
</div>
      </Grid>
      {/* <Grid item sm={8}>
        <ChangePassword />
      </Grid> */}
    </Grid>
  </>;
};

export default Dashboard;
