import React, { useState,useEffect} from 'react';
import './css/Crud.css';
import axios from "axios";
import Navbar from './Navbar1';
// import './css/C'


const Crud = () => {

  return (
    // <Navbar/>
    <div className="crud">
        {/* <Navbar/>  */}
      <div className="create-section">
       
      
      
        
      
       
        {/* <button onClick={handleAdd}>{isEditItem !== null ? 'Edit' : 'Add'}</button> */}
      </div>
      <div className='table-box'>
      <table>
        <thead>
          <tr>
            <th>Consumer No.</th>
            <th>Consumer Name</th>
            <th>Gender</th>
            <th>Father's Name</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Monthly Due</th>
            <th>Total Due</th>
            <th>Incentive</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
            <tr>
              <td>C01</td>
              <td>Neeraj</td>
              <td>Male</td>
              <td>Virendra</td>
              <td>Ayodhya</td>
              <td>01/11/2009</td>
              <td>Na</td>
              <td>540</td>
              <td>100</td>
              <td>25</td>
              <td>
     
<button onClick={() => window.location.href = "https://pmny.in/uIRngGlDPeT1"}>Pay Now</button>
              </td>
            </tr>
          
        </tbody>
      </table>
      </div>
     
      
    </div>
  );
};

export default Crud;
