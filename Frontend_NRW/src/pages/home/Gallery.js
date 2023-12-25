import React from 'react';
import GallerySlider from './GallerSlider';
import './css/Gallery.css';

const images = [
'https://www.wegot.in/blog/wp-content/uploads/2022/08/NON-REVENUE-BLOG-03-1024x1024.png',
'https://www.collidu.com/media/catalog/product/img/0/a/0a6dbeddcd5045ccc60203b2d46562c98e8f28e2387faac4f21ce860d46cf4f9/non-revenue-water-slide1.png',
'https://www.wegot.in/blog/wp-content/uploads/2022/08/NON-REVENUE-BLOG-01.png',
'https://image.slidesharecdn.com/wateraudit-151209060154-lva1-app6892/75/water-audit-a-tool-for-assessment-of-nonrevenue-water-19-2048.jpg?cb=1667462249',
'https://www.collidu.com/media/catalog/product/img/e/b/eb85dfde4d9a254b5bf38f9515ec591ebb9a62aefff04bec98e2560764e85aa3/non-revenue-water-slide2.png',
'https://www.hawle.com/cache-buster-1/04_hawle_Knowledge/00_HBG/11_Anleitungen/The_hidden_costs_of_gate_valves/1548/image-thumb__1548__knowledge-list-item_auto_350009215e667bfb2f50d94abd96d820/the-hidden-costs-of-gate-valves.png',
];

const Gallery = () => { 
  return (
    <div className="app-container">
        <div className="gallery-headings">
        <h1 className="gallerylarge-heading">GALLERY</h1>
        <h2 className="gallerysmall-heading">GALLERY</h2>
      </div>
      {/* <h1>Responsive Gallery Slider</h1> */}
      <GallerySlider images={images} />
    </div>
  );
};

export default Gallery;
