import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "../css/AboutUs.css";
import CardSection from './CardSection';
import WorkingProcess from './WorkingProcess';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

function AboutUs() {
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
    <div className='about-container'>
      <Navbar1 />
      <div className='about-section'>
        <animated.h1 style={slideIn}>About Us</animated.h1>
        <hr />
        <p>"Innovating water solutions for efficient, reliable, global impact."</p>
      </div>
      <CardSection />
      <WorkingProcess />
      <Footer />
    </div>
  );
}

export default AboutUs;
