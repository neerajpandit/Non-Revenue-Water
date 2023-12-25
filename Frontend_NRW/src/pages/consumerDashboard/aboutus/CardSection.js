import React from 'react';
import '../css/CardSection.css';

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="card">
        <h2>Our Mission</h2>
        <div className='box'>
        <div className="icon"><img src='img/mission.svg' alt='mission'></img></div>
        </div>
        <p>At JalSamadhan, our mission is to revolutionize water management by leveraging cutting-edge technology and sustainable practices, addressing critical challenges in the supply, distribution, and conservation of water.we strive to create a future where water is abundant, reliable, and a catalyst for thriving communities and ecosystems.</p>
      </div>
      <div className="card">
        <h2>Our Vision</h2>
        <div className='box1'>
        <div className="icon"><img src='img/vision.svg' alt='vision'></img></div>
        </div>
        <p>At JalSamadhan, we envision a future where water is not just a resource but a sustainable lifeline that nurtures communities and preserves the environment. Our vision is rooted in pioneering a transformative shift in water management, addressing critical challenges, and embracing the power of technology for positive change.</p>
      </div>
      <div className="card">
        <h2>Our Commitment</h2>
        <div className='box'>
        <div className="icon"><img src='img/commitment.svg' alt='commitment'></img></div>
        </div>
        <p>At JalSamadhan, our commitment is unwavering — a pledge to revolutionize water management, drive positive change, and build a sustainable future. Grounded in our core values, our commitment is reflected in every aspect of our operations, innovation, and a profound dedication to the well-being of communities and the environment.</p>
      </div>
    </div>
  );
};

export default CardSection;
