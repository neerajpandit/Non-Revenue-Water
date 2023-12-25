import React from 'react';
import '../css/VideoSection.css'; 

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className='vid'>
      <video autoPlay muted loop>
        <source src="/img/slider2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="text-overlay"> 
        <h1>Digital NRW Solution</h1>
        <p>Unlocking Potential In Every Droplet</p>
      </div>
    </div>
  );
};

export default VideoSection;
