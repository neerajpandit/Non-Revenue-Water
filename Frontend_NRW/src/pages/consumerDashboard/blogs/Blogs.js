import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "../css/Blogs.css";
import Main from './Main';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

function Blogs() {
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
    <div className='blog-container'>
      <Navbar1/>
      <div className='blog-section'>
        <animated.h1 style={slideIn}>Blogs</animated.h1>
        <hr/>
        <p>"Dive into knowledge, surf the waves of water wisdom."</p>
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Blogs;
