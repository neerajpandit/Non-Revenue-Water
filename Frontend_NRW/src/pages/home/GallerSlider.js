import React, { useState, useEffect } from 'react';
import './css/GallerySlider.css';

const GallerySlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gallery-slider-container">
      <button className="prev-Button" onClick={prevSlide}>&#10094;</button>
      <div className="gallery-slider">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
      <button className="next-Button" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default GallerySlider;
