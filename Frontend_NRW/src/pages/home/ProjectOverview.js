import React, { useState, useEffect } from 'react';
import './css/ProjectOverview.css';
import image from './Assets/water-hand.png';

function ProjectOverview() {
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    const hasAnimationPlayed = localStorage.getItem('animationPlayed');
    if (!hasAnimationPlayed) {
      setAnimationPlayed(true);
      localStorage.setItem('animationPlayed', true);
    }
  }, []); 

  return (
    <div className={`project-overview ${animationPlayed ? 'animation-played' : ''}`}>
      <div className="overview-headings">
        <h1 className="overviewlarge-heading">PROJECT OVERVIEW</h1>
        <h2 className="overviewsmall-heading">PROJECT OVERVIEW</h2>
      </div>
      <div className="project">
        <div className="overview-image">
          <img src={image} alt="overview-img" />
        </div>
        <div className="overview-text">
          <h2>WHAT IS DIGITAL NRW SOLUTION</h2>
          <p>
            Digital NRW Solutions refer to technological approaches and tools designed to tackle the
            issue of Non-Revenue Water (NRW). These solutions leverage digital technology to enhance
            water management, detect and address leaks, and optimize water distribution systems,
            ultimately minimizing losses and improving overall efficiency in water utilities.
          </p>
          <button id="overview-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
