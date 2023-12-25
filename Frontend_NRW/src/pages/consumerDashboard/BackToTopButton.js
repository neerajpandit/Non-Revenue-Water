import React, { useState, useEffect } from 'react';
import './css/BackToTop.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to determine when to show the Button
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`back-to-top-Button${isVisible ? ' visible' : ''}`}
      onClick={scrollToTop}
    >
      <span>&uarr;</span> {/* Unicode character for an upward arrow */}
    </div>
  );
};

export default BackToTopButton;
