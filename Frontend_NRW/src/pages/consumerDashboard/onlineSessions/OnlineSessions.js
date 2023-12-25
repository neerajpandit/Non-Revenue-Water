import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "../css/OnlineSessions.css";
import UpcomingSessions from './UpcomingSessions';
import PastSessions from './PastSessions';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

function Sessions() {
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
    <div className='session-container'>
      <Navbar1 />
      <div className='session-section'>
        <animated.h1 style={slideIn}>Online Sessions</animated.h1>
        <hr />
        <p>"Unlock water wisdom anytime, learn, and innovate with us."</p>
      </div>
      <UpcomingSessions />
      <PastSessions />
      <Footer />
    </div>
  );
}

export default Sessions;
