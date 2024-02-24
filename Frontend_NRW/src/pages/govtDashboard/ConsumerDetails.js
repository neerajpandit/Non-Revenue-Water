import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar3 from './Navbar3'
import Footer from '../home/Footer'
import Crud from './Crud'
import './css/ConsumerDetails.css'

function ConsumerDetails() {
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
    <div className='details'>
        <Navbar3/>
        <div className='details-section'>
        <animated.h1 style={slideIn}>Consumer Information Table</animated.h1>
        <hr />
        <p>"Data flows, empowering choices, ensuring water utility excellence."</p>
      </div>
        <Crud/>
        <Footer/>
    </div>
  )
}

export default ConsumerDetails