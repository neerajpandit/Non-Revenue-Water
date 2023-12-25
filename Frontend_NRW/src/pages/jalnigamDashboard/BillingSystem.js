import React, { useState , useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar2 from './Navbar2'
import Footer from '../home/Footer';
function BillingSystem() {
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
    <div>
      <Navbar2/>
        <div> 
        <div className='about-section'>
         <animated.h1 style={slideIn}>GIS Mapping</animated.h1><hr/>
         <p>"Mapping water's journey, where efficiency and sustainability intersect beautifully."</p>
        </div>
        <div className='powerbi-dashboard'>
       <div>
       </div>
       <div>
       <iframe title="Report Section" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNmRkZmQ4ZDMtMDI4MS00ZjJkLWE5ZWQtMDk4NDA1Y2E1ZTExIiwidCI6ImJmYWE1OTMxLThkMDktNGMwNC04NWI4LTg4ZTg2MjgyMTA5YiJ9" frameborder="0" allowFullScreen="true"></iframe>
       </div>
        </div>
        </div>
        <Footer/>
   </div>
  )
}

export default BillingSystem