import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "./css/JalNigamDashboard.css"
import Navbar2 from './Navbar2';
import Footer from '../home/Footer';
function JalNigamDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  const slideIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    from: { opacity: 0, transform: 'translateY(-100%)' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className='dashboards'>
      <Navbar2/>
      <div className='about-section'>
         <animated.h1 style={slideIn}>Dashboard</animated.h1><hr/>
         <p>"Data speaks, insights flow, optimizing water solutions globally."</p>
        </div>
      <div className='powerbi-dashboard'>
       <div>
         <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMDY2Mjc1YTQtMjZhYi00MDQ2LWFjNGItZmU1YzAzMzFiNzIwIiwidCI6ImJmYWE1OTMxLThkMDktNGMwNC04NWI4LTg4ZTg2MjgyMTA5YiJ9" frameborder="0" allowFullScreen="true"></iframe>
       </div>
        </div>
      <Footer/>
    </div>
  )
}

export default JalNigamDashboard