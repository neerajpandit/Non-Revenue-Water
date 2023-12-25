import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from './Navbar2'
import './css/notificat.css';


const MeterTable = () => {

  const [meterData, setMeterData] = useState([]);

  useEffect(() => {
    // Assuming Django backend endpoint for meter data
    const apiUrl = 'http://127.0.0.1:8000/api/jalnigam/meterdata/';

    // Fetch data from Django backend
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMeterData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();

    // Set up interval to fetch data periodically (adjust as needed)
    const intervalId = setInterval(fetchData, 5000); // Fetch data every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='notification'>
        <Navbar2/>
        <div className="meter-table-container">
      <table className="meter-table">
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Meter ID</th>
            <th>Meter Status</th>
            <th>Pressure</th>
          </tr>
        </thead>
        <tbody>
          {meterData.map((row) => (
            <tr key={row.deviceId}>
              <td>{row.device_id}</td>
              <td>{row.meter_id}</td>
              <td>{row.meter_status}</td>
              <td>{row.pressure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <Footer/> */}
    </div>
    
  );
};

export default MeterTable;
